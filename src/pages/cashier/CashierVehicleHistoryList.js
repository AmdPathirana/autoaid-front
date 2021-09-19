import React from 'react'
import CashierSideBar from '../../components/Moleculars/cashier/CashierSideBar'

export default function CashierVehicleHistoryList() {
    return (
        <div>
        <div className="md:ml-40 "><CashierSideBar name="DashBoard" roleName="Cashier"/></div>
        <div className=" w-full absolute bg-Background-0 h-screen">
            <div className="md:ml-40 ">
                {/* <div className="font-primary text-xl font-medium ml-6 mt-8 md:text-2xl lg:text-3xl xl:text-4xl">Sections</div> */}
                <div className="px-3 md:px-8 -mt-24">
                    <div className="container mx-auto max-w-full mt-36">
                        <div className="font-primary text-xl md:text-2xl font-bold flex justify-center items-center mb-10">Completed Vehicle List</div>
                        <div className="w-11/12 ml-8 md:ml-12 grid grid-cols-1 gap-4 border-2 border-gray-400 p-8 rounded-lg ">
                           
                
                        </div> 
                    </div>
                </div>   
            </div>
        </div>
    </div>
    )
}