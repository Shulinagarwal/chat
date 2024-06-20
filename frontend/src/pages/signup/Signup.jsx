// STARTER CODE FOR SIGNUP

import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
       <div className="w-full p-6 shadow-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
       <h1 className="text-3xl font-medium text-center text-gray-100">
          Sign Up
          <span className='text-yellow-400'> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className='label p-4'>
            <span className='text-base label-text text-gray-200'>FullName</span>
            </label>
            <input type="text" placeholder='Enter Your Name' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-4'>
            <span className='text-base label-text text-gray-200'>UserName</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-4'>
            <span className='text-base label-text text-gray-200'>Password</span>
            </label>
            <input type="password" placeholder='Enter Your Password' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-4'>
            <span className='text-base label-text text-gray-200'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>

          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheckbox/>

          <a href="/" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up </button>
          </div>
        </form>
       </div>
    </div>
  )
}

 export default Signup

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//        <div className="w-full p-6 shadow-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//        <h1 className="text-3xl font-medium text-center text-gray-100">
//           Sign Up
//           <span className='text-yellow-400'> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className='label p-4'>
//             <span className='text-base label-text text-gray-200'>FullName</span>
//             </label>
//             <input type="text" placeholder='Enter Your Name' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-4'>
//             <span className='text-base label-text text-gray-200'>UserName</span>
//             </label>
//             <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-4'>
//             <span className='text-base label-text text-gray-200'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter Your Password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-4'>
//             <span className='text-base label-text text-gray-200'>Confirm Password</span>
//             </label>
//             <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
//           </div>

//           {/* GENDER CHECKBOX GOES HERE */}
//           <GenderCheckbox/>

//           <a href="/" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//           Already have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Sign Up </button>
//           </div>
//         </form>
//        </div>
//     </div>
//   )
// }

// export default Signup