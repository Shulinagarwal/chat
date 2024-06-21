import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from "../../hooks/useLogin";


const Login = () => {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")


  const {loading,login}=useLogin();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    await login(username,password)
  }
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
      <div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
        <h1 className="text-3xl font-medium text-center text-gray-100">
          Login
          <span className='text-yellow-400'> ChatApp</span>
        </h1>

        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className="label p-4">
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
              <label className="label p-4">
                  <span className='text-base label-text text-gray-200'>Password</span>
                </label>
                <input type="password" placeholder='Password' className='w-full input input-bordered h-10'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

          </div>
          <Link to="/signup" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          {"Don't"} have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}
            >{loading ? <span className='loading loading-spinner '></span> : "Login"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login


// Starter CODE FOR THIS FILE
// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
//       <div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
//         <h1 className="text-3xl font-medium text-center text-gray-100">
//           Login
//           <span className='text-yellow-400'> ChatApp</span>
//         </h1>

//         <form action="">
//           <div>
//             <label className="label p-4">
//               <span className='text-base label-text text-gray-200'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//               <label className="label p-4">
//                   <span className='text-base label-text text-gray-200'>Password</span>
//                 </label>
//                 <input type="password" placeholder='Password' className='w-full input input-bordered h-10' />

//           </div>
//           <a href="/" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//           {"Don't"} have an account?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login