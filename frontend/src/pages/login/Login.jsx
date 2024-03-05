const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-8 h-full w-full bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
                <h1 className="text-3xl text-center text-black">
                    Login

                </h1>

                <form className="mt-5">
                    <div>
                        <label className="label ">
                            <span className="text-base label-text text-black">Username</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text text-black">Password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder="Password" />
                        </label>
                    </div>
                    <div className="mt-2">
                        <span className="text-black">New to Project Chat ?</span>
                        <a href="#" className="text-base text-blue-500 hover:underline">
                            <span> Sign up for free !</span> </a>
                    </div>

                    <div> <button className="btn btn-block btn-medium mt-4 bg-green-700 text-white">Login</button></div>

                </form>


            </div>
        </div>
    );
}

export default Login;


// Starter Code for login
// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className="p-8 h-full w-full bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
//                 <h1 className="text-3xl text-center text-black">
//                     Login

//                 </h1>

//                 <form className="mt-5">
//                     <div>
//                         <label className="label ">
//                             <span className="text-base label-text text-black">Username</span>
//                         </label>
//                         <label className="input input-bordered flex items-center gap-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
//                                 <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                             </svg>
//                             <input type="text" className="grow" placeholder="Username" />
//                         </label>
//                     </div>

//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text text-black">Password</span>
//                         </label>
//                         <label className="input input-bordered flex items-center gap-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
//                                 <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
//                             </svg>
//                             <input type="password" className="grow" placeholder="Password" />
//                         </label>
//                     </div>
//                     <div className="mt-2">
//                         <span className="text-black">New to Project Chat ?</span>
//                         <a href="#" className="text-base text-blue-500 hover:underline">
//                             <span> Sign up for free !</span> </a>
//                     </div>

//                     <div> <button className="btn btn-block btn-medium mt-4 bg-green-700 text-white">Login</button></div>

//                 </form>


//             </div>
//         </div>
//     );
// }

// export default Login;
