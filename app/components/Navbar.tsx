'use client'
import "../globals.css"
import {useState} from "react";
import DropDown from "./DropDown";


export default function Navbar({setValue}:{setValue:any}){
    const [dropdown,showDropdown]=useState(false);

    return (
    <div className="container">
        {dropdown?<DropDown setValue={setValue}/>:<></>}
        <div className="display-button" onClick={()=>showDropdown(!dropdown)}>
        
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"></path></svg>
        <div className="display">Display</div>
        </div>
        <button className="toggle">
            <img src="data:image/png;base64,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" style={{width:"20px"}}></img>
        </button>
        
    </div>
    );
}