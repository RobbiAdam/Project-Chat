import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../store/useConversation';
import notification from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const notificationSound = new Audio(notification);
            notificationSound.play();
            
            setMessages([...messages, newMessage])
        });

        return () => socket?.off("newMessages");
    }, [socket, setMessages, messages]);

}

export default useListenMessages
