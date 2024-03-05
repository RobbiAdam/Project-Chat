import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password doesn't match" })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "Username already exist" })
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);

        const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password : hashedPassword,
            gender,
            profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
        })

        if(newUser){
            // Generate JWT Token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }
        else
        {
            res.status(400).json({error: "Invalid user data"})
        }


    } catch (error) {

        console.log("Sign In Controller error", error.message)
        res.status(500).json({ error: "Internal server error" });

    };
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Username or password doesn't match"})
        }
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id : user._id,
            fullname : user.fullname,
            username : user.username,
            profilePic : user.profilePic
        });

    } catch (error) {
        console.log("Login error", error.message)
        res.status(500).json({ error: "Internal server error" });
    }

};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logout succesfully"})
    

    } catch (error) {
        console.log("Logout error", error.message);
        res.status(500).json({error: "Internal server error"});
    }

    res.send("from logout function")
    console.log("Log out")
};
