import React from 'react'
import AdminTopBar from '../../components/Atoms/admin/AdminTopBar'
import EndPath from '../../components/Atoms/EndPath'
import SearchVihicleRowOne from '../../components/Atoms/SearchVihicleRowOne'
import SearchVihicleRowThree from '../../components/Atoms/SearchVihicleRowThree'
import SearchVihicleRowTwo from '../../components/Atoms/SearchVihicleRowTwo'
import SearchBarVehicle from '../../components/Atoms/serviceStation/SearchBarVehicle'
import StartPath from '../../components/Atoms/StartPath'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'
import VehicleListTable from '../../components/Organs/serviceAdvisor/VehicleListTable'
export default function SearchVehicle() {
    return (
            <div className=" bg-Background-0  h-screen ">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col xl:ml-40">
                    <AdminTopBar name="XXXXXXXX" roleName="Service Advisor" />
                    <div className="container mx-auto max-w-full overflow-hidden">
                        <div className="mt-20 mb-12">
                            <SearchBarVehicle/>
                        </div>
                        <div className="mb-8 w-11/12 grid grid-cols-1 place-items-center mt-32 ml-3 lg:ml-12 xl:ml-14">
                            <VehicleListTable/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
