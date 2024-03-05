import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public" alt="" />
                </div>

            </div>
            <div className={'chat-bubble text-black bg bg-green-500'}>Message Test</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10:30</div>
        </div>
    )
}

export default Message

import React from 'react'

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
