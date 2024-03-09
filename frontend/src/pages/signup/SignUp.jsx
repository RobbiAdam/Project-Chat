import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'
const SignUp = () => {
  
  const [inputs, setInputs] = useState({
    fullname : '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
});

const {loading , signup} = useSignup();

const handleCheckboxChange = (gender) => {
  setInputs({...inputs, gender});
  
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  await signup(inputs);
  
};



  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="p-8 h-full w-full bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <h1 className="text-3xl text-center text-black">Sign Up</h1>


        <form onSubmit={handleSubmit}>
          <div>
            <label className='label'>
              <span>Full Name</span>
            </label>
            <label>
              <input type="text" className="input input-bordered w-full" placeholder="Full Name" 
              value={inputs.fullname}
              onChange={e => setInputs({...inputs, fullname: e.target.value})}  />
              
            </label>
          </div>

          <div>
            <label className='label'>
              <span>Username</span>
            </label>
            <label>
              <input type="text" className="input input-bordered w-full" placeholder="Username"
              value={inputs.username} 
              onChange={e => setInputs({...inputs, username: e.target.value})} />
            </label>
          </div>

          <div>
            <label className='label'>
              <span>Password</span>
            </label>
            <label>
              <input type="password" className="input input-bordered w-full" placeholder="Password" 
              value={inputs.password}
              onChange={e => setInputs({...inputs, password: e.target.value})}/>
            </label>
          </div>

          <div>
            <label className='label'>
              <span>Confirm Password</span>
            </label>
            <label>
              <input type="password" className="input input-bordered w-full" placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={e => setInputs({...inputs, confirmPassword: e.target.value})} />
            </label>
          </div>

          <div>
            <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender={inputs.gender}/>
          </div>
          
          <div>
            <button className="btn btn-block btn-medium mt-2 bg-green-700 text-white">
              {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
            </button>
          </div>

          <div className='mt-2'>
            <Link to="/login" className="text-base text-blue-500 hover:underline">
              <span> Already have an account ?</span> </Link>
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
