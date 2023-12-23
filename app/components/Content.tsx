'use client'

import "../globals.css"
import Status from "./Status"
import Priority from "./Priority"
import Users from "./Users"

export default function Content({value}:{value:any}){

    function display(){
        if(value=="Status"){
            return <Status/>
        }
        else if(value=="Priority"){
            return <Priority/>
        }
        else{
            return <Users/>
        }
    }
    
    return (
        <div className="home">
            {display()}
        </div>
    )
}