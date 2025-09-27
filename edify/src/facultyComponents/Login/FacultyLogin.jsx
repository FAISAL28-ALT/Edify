import React, { useState } from 'react'
import facultyLoginIllustration from '../../assets/faculty-login-illustration.png'
import {Link } from 'react-router-dom'


function FacultyLogin() {


    return (
        <div>
            <a href="/"><img className='h-[88px]' src="/logo.png" alt="" /></a>
            <div className='w-[100%] h-[70vh] flex justify-evenly items-center text-font-color flex-wrap'>
            <img className='md:h-[80%] h-[50%] w-auto' src={facultyLoginIllustration} alt="" />
            {/* LOGIN FORM */}
            <div className='login flex flex-col gap-10 px-0 '>
                <h2 className='text-[36px] font-manrope font-bold md:text-[54px] md:font-semibold'>Login <span className='text-[22px]'>as faculty</span></h2>
                <form className='flex flex-col gap-5 mb-10' action="">
                    <input className='h-[54px] w-12/12 bg-[#f0f0f0] border-0 outline-none rounded-[10px] pl-4 pr-20 font-montserrat' type="text" placeholder='Username' />
                    <input className='h-[54px] w-12/12 bg-[#f0f0f0] border-0 outline-none rounded-[10px] pl-4 pr-20 font-montserrat' type="password" placeholder='Password' />
                    <Link className='text-gray-87 font-montserrat underline underline-offset-2 font-medium' to="/">Forgot Password?</Link>
                    <Link className='bg-accent rounded-[10px] text-white h-[54px] text-center text-[18px] font-manrope font-semibold flex items-center justify-center' to="/faculty-dashboard">Login to Edify</Link>
                    <Link className=' underline underline-offset-2 font-medium text-[18px]' to="/">Student Login</Link>
                </form>
            </div>
            </div>
        </div>
    )
}

export default FacultyLogin
