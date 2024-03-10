import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessage } from "react-icons/ti";
import useConversation from '../../store/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageRoomContainer = () => {

  const { selectedConversation,setSelectedConversation } = useConversation()
  
  useEffect(() => {
    return () => setSelectedConversation(null)
  },[])
  return (
    <div className='md:min-w[450px] flex flex-col '>
      {selectedConversation ? (
        <>
          {/* header */}
          <div className='bg-slate-800 px-4 py-2 mb-2'>
            <span className='label-text'>To: </span>{" "}
            <span className='text-gray-300'>{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <ChatSelected />
      )}
    </div>
  );
};

export default MessageRoomContainer;
const ChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-x1 text-gray-600 font font-semibold flex flex-col items items-center gap-2'>
        <p>{authUser.fullname}</p>
        <p>Select Friend to start chatting</p>
        <TiMessage className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};



// import React from 'react';
// import Messages from './Messages';
// import MessageInput from './MessageInput';
// import { TiMessage } from "react-icons/ti";

// const MessageRoomContainer = () => {
//   const chatSelected = false;
//   return (
//     <div className='md:min-w[450px] flex flex-col '>
//       {chatSelected ? (
//         <>
//           {/* header */}
//           <div className='bg-slate-800 px-4 py-2 mb-2'>
//             <span className='label-text'>To</span>
//             <span className='text-gray-800'>Username</span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       ) : (
//         <ChatSelected />
//       )}
//     </div>
//   );
// };

// const ChatSelected = () => {
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-x1 text-gray-600 font font-semibold flex flex-col items items-center gap=2'>
//         <p>Welcome Username</p>
//         <p>Select Friend to start chatting</p>
//         <TiMessage className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   );
// };

// export default MessageRoomContainer;