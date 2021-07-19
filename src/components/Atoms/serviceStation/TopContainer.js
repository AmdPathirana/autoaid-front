import React from 'react'
import Addnew from './Addnew'
import ProfileIcon from './ProfileIcon'

export default function TopContainer(props) {
    return (
        <div>
            <div className="w-full h-24 bg-forth-0 rounded-b-3xl flex items-center justify-center">
                <div className=" flex w-9/12 justify-between items-center">

                    <h1 className=" font-primary text-3xl text-white">{props.heading1} <span className=" font-primary text-2xl text-white font-light">({props.heading2})</span></h1>
                    <div className="flex items-center justify-center">
                        <Addnew txt={props.addnewbtntext} />
                        <ProfileIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}