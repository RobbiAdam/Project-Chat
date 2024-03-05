import React from 'react'
import GenderCheckbox from './GenderCheckbox.jsx'
const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="p-8 h-full w-full bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <h1 className="text-3xl text-center text-black">Sign Up</h1>


        <form>
          <div>
            <label className='label'>
              <span>Full Name</span>
            </label>
            <label>
              <input type="text" className="input input-bordered w-full" placeholder="Full Name" />
            </label>
          </div>

          <div>
            <label className='label'>
              <span>Username</span>
            </label>
            <label>
              <input type="text" className="input input-bordered w-full" placeholder="Username" />
            </label>
          </div>

          <div>
            <label className='label'>
              <span>Password</span>
            </label>
            <label>
              <input type="text" className="input input-bordered w-full" placeholder="Password" />
            </label>
          </div>

          <div>
            <label className='label'>
              <span>Confirm Password</span>
            </label>
            <label>
              <input type="text" className="input input-bordered w-full" placeholder="Confirm Password" />
            </label>
          </div>

          <div>
            <GenderCheckbox />
          </div>
          
          <div>
            <button className="btn btn-block btn-medium mt-2 bg-green-700 text-white">Sign Up</button>
          </div>

          <div className='mt-2'>
            <a href="#" className="text-base text-blue-500 hover:underline">
              <span> Already have an account ?</span> </a>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp


// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="p-8 h-full w-full bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
//         <h1 className="text-3xl text-center text-black">Sign Up</h1>


//         <form>
//           <div>
//             <label className='label'>
//               <span>Full Name</span>
//             </label>
//             <label>
//               <input type="text" className="input input-bordered w-full" placeholder="Full Name" />
//             </label>
//           </div>

//           <div>
//             <label className='label'>
//               <span>Username</span>
//             </label>
//             <label>
//               <input type="text" className="input input-bordered w-full" placeholder="Username" />
//             </label>
//           </div>

//           <div>
//             <label className='label'>
//               <span>Password</span>
//             </label>
//             <label>
//               <input type="text" className="input input-bordered w-full" placeholder="Password" />
//             </label>
//           </div>

//           <div>
//             <label className='label'>
//               <span>Confirm Password</span>
//             </label>
//             <label>
//               <input type="text" className="input input-bordered w-full" placeholder="Confirm Password" />
//             </label>
//           </div>

//           <div>
//             <GenderCheckbox />
//           </div>
          
//           <div>
//             <button className="btn btn-block btn-medium mt-2 bg-green-700 text-white">Sign Up</button>
//           </div>

//           <div className='mt-2'>
//             <a href="#" className="text-base text-blue-500 hover:underline">
//               <span> Already have an account ?</span> </a>
//           </div>
          
//         </form>

//       </div>
//     </div>
//   )
// }

// export default SignUp
