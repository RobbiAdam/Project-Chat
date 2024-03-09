import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../store/useConversation';
import { extractTime } from '../../utils/ExtractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromSender = message.senderId === authUser._id;
    const chatClassName = fromSender ? "chat-end" : "chat-start";
    const formattedTime =  extractTime(message.createdAt);
    const profilePic = fromSender ? authUser?.profilePic : selectedConversation?.profilePic;
    const chatBubbleColor = fromSender ? 'bg bg-green-500' : "bg bg-yellow-400";
    const alignment = fromSender ? 'flex-row-reverse' : 'flex-row';

    return (
        <div className={`chat ${chatClassName}`}>
            <div className={`flex ${alignment} items-center`}>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img src={profilePic} alt="" />
                    </div>
                </div>
                <div className={`chat-bubble text-black ${chatBubbleColor}`}>{message.message}</div>
            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-black pb-2'>{formattedTime}</div>
        </div>
    )
}

export default Message;



// const Message = () => {
//     return (
//         <div className='chat chat-end'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img src="https://avatar.iran.liara.run/public" alt="" />
//                 </div>

//             </div>
//             <div className={'chat-bubble text-black bg bg-green-500'}>Message Test</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10:30</div>
//         </div>
//     )
// }

// export default Message
