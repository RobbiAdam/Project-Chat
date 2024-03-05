import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants : {$all : [senderId, receiverId]},
        })
        
        if(!conversation)
        {
            conversation = await Conversation.create({
                participants : [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage);
        }

        await Promise.all([
            conversation.save(),
            newMessage.save(),
        ])

        // socket IO functionality


        
        console.log("message sent", req.params.id);
        res.status(200).json({newMessage});
        
    } catch (error) {
        console.log("Send message error", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessage = async (req, res) =>{
    try {
        const {id:userToChatId} =  req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants : {$all : [senderId, userToChatId]}
        }).populate("messages");

        res.status(200).json(conversation.messages);

        if(!conversation)
        {
            res.status(404).json({error: "Conversation not found"});
        }

        const message = conversation.messages;
        res.status(200).json({message});


    } catch (error) {
        console.log("Get message error", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}