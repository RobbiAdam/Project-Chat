import { FaSearch } from "react-icons/fa";
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../store/useConversation';
import { useState } from 'react';
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("")
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;

        const conversationFilter = conversations.find((conversation) => conversation.fullname.toLowerCase().includes(search.toLowerCase()));

        if (conversationFilter) {
            setSelectedConversation(conversationFilter);
            setSearch("");
        } else toast.error("No such user found!");
    };

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>

            <input type="text"
                placeholder="Search"
                className="input input-bordered rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

            <button type='submit' className='btn btn-circle bg-green-500 text-white border-none'>
                <FaSearch className='w-6 h-6 outline-none' />
            </button>

        </form>
    )
}

export default SearchInput;

// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//     return (
//         <form className='flex items-center gap-2'>
//             <input type="text" placeholder="Type here" className="input input-bordered rounded-full" />
//             <button type='submit' className='btn btn-circle bg-green-500 text-white border-none'>
//             <FaSearch className='w-6 h-6 outline-none'/>
//             </button>
//         </form>
//     )
// }

// export default SearchInput
