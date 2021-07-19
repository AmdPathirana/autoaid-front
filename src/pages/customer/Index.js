import React from 'react'
import BottomNav from '../../components/Moleculars/customer/BottomNav'
import Addnew from '../../components/Atoms/serviceStation/Addnew'
import HeadingPRimary from '../../components/Atoms/customer/HeadingPRimary'
import DetailsShowing from '../../components/Moleculars/customer/DetailsShowing'
import SideLink from '../../components/Atoms/customer/SideLink'
import VehicleContainer from '../../components/Moleculars/customer/VehicleContainer'
import StatusViewer from '../../components/Moleculars/customer/StatusViewer'
import TopNav from '../../components/Moleculars/customer/TopNav'
export default function Index() {
    return (
        <div className="mb-44">
            <div className="flex flex-col items-center">
                <TopNav />
                <div className="w-10/12 justify-center">
                    <div className="flex justify-center">

                        <Addnew txt="Book Now" />
                    </div>
                    <div>
                        <StatusViewer />
                    </div>
                    <div className="md:flex justify-center">

                        <div className="md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5">
                            <div className="flex justify-between">
                                <HeadingPRimary heading="Expenses" />
                                <SideLink name="View Details" />
                            </div>
                            <div className="flex flex-wrap justify-between my-5">
                                <DetailsShowing data="Rs. 5125.00" dataHeading="Total Expenditure" />
                                <DetailsShowing data="Rs. 2500.00" dataHeading="Expenses in May" />
                                <DetailsShowing data="Rs. 1500.00" dataHeading="Avg. Expenditure/Month" />
                                <DetailsShowing data="1" dataHeading="Active Repairs" />
                                <DetailsShowing data="2" dataHeading="Avg. Repairs/ Month" />

                            </div>

                        </div>
                        <div className="flex flex-col justify-center md:bg-white md:p-5 md:rounded-lg md:shadow-lg md:w-1/3 md:my-5 md:mx-5 ">
                            <HeadingPRimary heading="Vehicles" />
                            <VehicleContainer reg="CAM-9044" time="200km / 3 Months" />
                            <VehicleContainer reg="CAM-9044" time="200km / 3 Months" />
                        </div>
                    </div>


                </div>
            </div>
            <BottomNav />
        </div>
    )
}