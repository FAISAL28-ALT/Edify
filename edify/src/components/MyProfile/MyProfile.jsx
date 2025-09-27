import React from 'react'
import ProfileHeader from '../UI/ProfileHeader'
import ProfileEdit from '../UI/ProfileEdit'
import Layout from '../../Layout'
import Navigations from '../Navigations/Navigations'
import SkillTimeline from '../UI/SkillTimeline';
import ProjectShowcase from '../UI/ProjectShowcase'
import RecentActivities from '../UI/RecentActivities'
import CurrentCredits from '../UI/CurrentCredits'
import Achievements from '../UI/Achievements'

function MyProfile() {
    return (
        <div>
            {/* SIDEBAR NAVIGATION */}
            <div className='fixed top-0'>
             <Navigations />
            </div>
             {/* PROFILE HEADER */}
             <div className='fixed flex justify-between left-0 md:left-[20%] top-0 w-[100vw] md:w-[79vw] z-50'>
                <ProfileHeader />
             </div>
             {/* PHOTO EDIT AND EXPORT AS CV */}
             <div className='ml-[12%] md:ml-[20%] mt-[5%]'>
             <ProfileEdit />
            </div>
            {/* SKILL TIMELINE GRAPH */}
            <div className='my-[-2%] md:ml-[20%] px-[3%] flex flex-col md:flex-row flex-wrap justify-between gap-8 items-center md:w-[79vw]'>
            <SkillTimeline />
            <ProjectShowcase />
            <RecentActivities />
            <div className='flex flex-row gap-8 flex-wrap'>
            <CurrentCredits />
            <Achievements />
            </div>
            </div>
        </div>
    )
}

export default MyProfile
