import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navigations() {
    return (
    <nav className='md:block hidden h-screen fixed bg-gray-100 p-0 m-0 w-[20%] overflow-y-scroll scrollable-hide-scrollbar'>
            <a href="/"><img className='h-[88px]' src="/logo.png" alt="" /></a>


        <div className="navigations ml-5 mt-10 mr-5 flex flex-col gap-5">

        <NavLink to="/MyProfile" className={({isActive}) => `flex flex-row gap-3 ml-2 px-3 py-3 hover:font-semibold hover:text-accent  transition-all duration-300 ease-in-out ${isActive ? "text-accent font-manrope font-bold bg-secondary-accent rounded-[5px]" : "text-gray-87"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>My Profile</span>
        </NavLink>
        <NavLink to="/Dashboard" className={({isActive}) => `flex flex-row gap-3 ml-2 px-3 py-3 hover:font-semibold hover:text-accent  transition-all duration-300 ease-in-out ${isActive ? "text-accent font-manrope font-bold bg-secondary-accent rounded-[5px]" : "text-gray-87"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                <span>Dashboard</span>
        </NavLink>
        <NavLink to="/Subjects" className={({isActive}) => `flex flex-row gap-3 ml-2 px-3 py-3 hover:font-semibold hover:text-accent  transition-all duration-300 ease-in-out ${isActive ? "text-accent font-manrope font-bold bg-secondary-accent rounded-[5px]" : "text-gray-87"}`}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-command-icon lucide-command"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
               <span>Subjects</span>
        </NavLink>
        <NavLink to="/Assignments" className={({isActive}) => `flex flex-row gap-3 ml-2 px-3 py-3 hover:font-semibold hover:text-accent  transition-all duration-300 ease-in-out ${isActive ? "text-accent font-manrope font-bold bg-secondary-accent rounded-[5px]" : "text-gray-87"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-icon lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                <span>Assignments</span>
        </NavLink>
        <hr className='h-0.5 bg-gray-87 opacity-50 w-[80%] ml-2' />
        <NavLink to="/Chats" className={({isActive}) => `flex flex-row gap-3 ml-2 px-3 py-3 hover:font-semibold hover:text-accent  transition-all duration-300 ease-in-out ${isActive ? "text-accent font-manrope font-bold bg-secondary-accent rounded-[5px]" : "text-gray-87"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-dot-icon lucide-message-square-dot"><path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"/><circle cx="19" cy="6" r="3"/></svg>
                <span>Chats</span>
        </NavLink>
                <NavLink to="/Settings" className={({isActive}) => `flex flex-row gap-3 ml-2 px-3 py-3 hover:font-semibold hover:text-accent  transition-all duration-300 ease-in-out ${isActive ? "text-accent font-manrope font-bold bg-secondary-accent rounded-[5px]" : "text-gray-87"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>
                <span>Settings</span>
        </NavLink>
        </div>

        <div className="helpCenter font-manrope flex flex-col text-center justify-center items-center h-182 mt-[20%] bg-secondary-accent rounded-[25px] py-5 mx-7
         mb-10" >
            <h2 className=' font-bold text-[20px] text-font-color'>Help Center</h2>
            <p className='text-gray-87 py-1'>Have a problem? <br /> How can we help you?</p>
            <Link className='text-[18px] font-medium my-5 px-10 py-2 bg-accent rounded-[10px] w-fit text-white'>Raise a Query</Link>
        </div>
    </nav>
    )
}

