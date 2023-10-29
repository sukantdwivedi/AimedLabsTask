import React, { useState } from 'react';
import picture from './images/picture.png'

const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem('userData', JSON.stringify(formData));
    
  }

  const [passwordData, setPasswordData] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const handleInput = (e) => {
    setPasswordData(e.target.value)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <main className='flex max-md:flex max-md:flex-col min-h-screen font-[Poppins]'>

        <div className='w-1/2 max-md:w-full flex justify-center items-center pl-10 max-md:pl-0 mx-auto'>
          <img src={picture} alt="" />
        </div>

        <div className='min-h-screen w-full flex justify-center items-center p-10'>
          <div className='h-full w-full shadow-2xl py-2'>
            <form onSubmit={(e) => handleSubmit(e)} className='w-full h-full flex flex-col px-24 py-auto justify-center'>
              <h1 className='text-5xl font-bold flex justify-center'>Login</h1>

              <p className='my-2'>Login ID</p>
              <input type="text" name='loginId' className='border rounded-lg py-1.5 px-3 outline-none' placeholder='Enter Login ID' onChange={(e) => handleChange(e)} />

              <p className='my-2'>Password</p>
              <div className='flex items-center'>
              {/* <i className="ri-eye-off-fill -ml-6 cursor-pointer"></i> */}
                <input type={showPassword ? 'text' : 'password'} name='password' className='w-full border rounded-lg py-1.5 px-3 outline-none' placeholder='Enter Password' onChange={handleInput} />
                {
                  showPassword ? (<i className="ri-eye-fill -ml-6 cursor-pointer" onClick={handleShowPassword}></i>) : (<i className="ri-eye-off-fill -ml-6 cursor-pointer" onClick={handleShowPassword}></i>)
                }
              </div>

              <div className='flex my-2 justify-between max-md:flex max-md:flex-col'>
                <div className='flex'>
                  <input type="checkbox" className='mr-2' /> 
                  <p className='text-[#737B86]'>Remember Me</p>
                </div>
                <div>
                  <p className='text-[#F78719] cursor-pointer'>Change Password</p>
                </div>
              </div>

              <div className='flex'>
                <input type="checkbox" className='mr-2'/> 
                <p className='text-[#737B86]'>Agree to <span className='text-[#F78719] underline cursor-pointer'>Terms & Conditions</span></p>
              </div>

              <div className='my-6'>
                <button type='submit' className='bg-[#1575A7] text-white text-md py-2 rounded-lg border m-auto w-8/12 flex justify-center items-center'>Login</button>
              </div>

              <p className='mx-auto'>Don’t have an account? <span className='text-[#F78719] underline cursor-pointer'>Register Here</span></p>
            </form>
          </div>
        </div>

      </main>
    </>
  )
}

export default App