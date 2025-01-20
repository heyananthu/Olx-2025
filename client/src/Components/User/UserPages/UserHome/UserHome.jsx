import React from 'react'
import UserNav from './UserNav'
import ScrollSection from './ScrollSection'
import PostSections from './PostSections'
import BottomNav from './BottomNav'
function UserHome() {
    return (
        <div>
            <UserNav />
            <ScrollSection />
            <PostSections />
            <BottomNav/>
        </div>
    )
}

export default UserHome
