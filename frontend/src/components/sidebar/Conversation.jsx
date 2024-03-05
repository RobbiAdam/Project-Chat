import React from 'react'


const Conversation = () => {
    return (

        <div>

            <div className='flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src=' https://avatar.iran.liara.run/public/boy' alt="user avatar" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-800'> Insert Name</p>
                        <span className='text xl'>
                            😊
                        </span>
                    </div>
                </div>
            </div>

            <div className='divider my-2 py-0 h-1' />
        </div>

    )
}

export default Conversation

// import React from 'react'

// const Conversation = () => {
//     return (

//         <div>

//             <div className='flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1'>
//                 <div className='avatar online'>
//                     <div className='w-12 rounded-full'>
//                         <img src=' https://avatar.iran.liara.run/public/boy' alt="user avatar" />
//                     </div>
//                 </div>

//                 <div className='flex flex-col flex-1'>
//                     <div className='flex gap-3 justify-between'>
//                         <p className='font-bold text-gray-800'> Insert Name</p>
//                         <span className='text xl'>
//                             😊
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             <div className='divider my-2 py-0 h-1' />
//         </div>

//     )
// }

// export default Conversation

