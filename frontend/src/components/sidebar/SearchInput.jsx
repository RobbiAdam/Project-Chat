import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder="Type here" className="input input-bordered rounded-full" />
            <button type='submit' className='btn btn-circle bg-green-500 text-white border-none'>
            <FaSearch className='w-6 h-6 outline-none'/>
            </button>
        </form>
    )
}

export default SearchInput

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
