import React from 'react'
import SelectedSevicesSVAD from '../../components/Atoms/SelectedSevicesSVAD'
import SectionItems from '../../components/Atoms/serviceStation/SectionItems'
import SectionSelectionTop from '../../components/Atoms/serviceStation/SectionSelectionTop'
import SelectionSectionNavbar from '../../components/Atoms/serviceStation/SelectionSectionNavbar'
import TopContainerVNo from '../../components/Atoms/technician/TopContainerVNo'
import SelectionSectionNavbarMolecular from '../../components/Moleculars/serviceAdvisor/SelectionSectionNavbarMolecular'
import SideNav from '../../components/Moleculars/serviceAdvisor/sideNav'


export default function SectionSelection() {
    return (
        <div className=" bg-Background-0">
            <div className="flex flex-row">
                <div className="">
                    <SideNav />
                </div>
                <div className="w-full flex flex-col">
                    <SectionSelectionTop heading1="CAM 9044"/>
                    <div className="flex">
                        <div className="w-1/2 bg-white shadow-xl rounded-lg mt-12 ml-6 p-8">
                            <div className="font-primary text-xl">Select Section</div>
                            <div className="  p-1 rounded-lg mt-4 w-full">
                                <SelectionSectionNavbarMolecular/>
                            </div>
                            <div>
                                <SectionItems itemName="Car Wash" itemTime="20 min"/>
                                <SectionItems itemName="Oil Filter Change" itemTime="15 min"/>
                                <SectionItems itemName="Vaccume" itemTime="10 min"/>
                            </div>
                        </div>
                        <div className="w-2/6 bg-white shadow-xl rounded-lg mt-12 ml-16  p-8">
                            <SelectedSevicesSVAD heading1="Selected Service" description="ss"/>
                        </div>
                    </div>
                </div>
            </div>  
</div>

    )
}

