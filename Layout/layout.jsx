import React from 'react'
import Nav from '@/public/Compnents/Nav'
import LeftSide from '@/public/Compnents/LeftSide'
import RightSide from '@/public/Compnents/RightSide'
const layout = ({ children }) => {
    return (
        <div>
            <div>
                <Nav />
                <div className="wrapper">
                    <LeftSide />
                    <main className="main-content">
                    {children}
                    </main>
                    <RightSide />
                </div>
            </div>
        </div>
    )
}

export default layout