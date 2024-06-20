import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
      <div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
        <h1 className="text-3xl font-medium text-center text-gray-100">
          Login
          <span className='text-yellow-400'> ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-4">
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>

          <div>
              <label className="label p-4">
                  <span className='text-base label-text text-gray-200'>Password</span>
                </label>
                <input type="password" placeholder='Password' className='w-full input input-bordered h-10' />

          </div>
          <a href="/" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          {"Don't"} have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
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