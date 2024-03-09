import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';


const LogoutButton = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOutCircle className='w-6 h-6 text-gray-500 cursor-pointer' onClick={logout}/>
      ) : (
        <span className='loading loading-spinner '></span>
      )}
      
    </div>
  )
}

export default LogoutButton

// import React from 'react'
// import { BiLogOutCircle } from "react-icons/bi";

// const LogoutButton = () => {
//   return (
//     <div className='mt-auto'>
//       <BiLogOutCircle className='w-6 h-6 text-gray-500 cursor-pointer'/>
//     </div>
//   )
// }

// export default LogoutButton
