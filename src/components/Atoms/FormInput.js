import React from 'react'

export default function FormInput(props) {
    return (
        <div>
            <div className="">
               <h1 className="font-primary  text-md"> {props.lable}</h1> 
                <input type="text" name="name" className=" rounded-lg shadow-lg h-10 w-60 float-right" />
            </div>
            
        </div>
    )
}
