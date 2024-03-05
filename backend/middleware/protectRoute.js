import  Jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).json({ error: "Unauthorized, no token found" });
        }

        const decoded = Jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded)
        {
            res.status(401).json({ error: "Unauthorized, token is invalid" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user)
        {
            res.status(401).json({ error: "Unauthorized, user not found" });
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Protect route error", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute