'use client'
import "../globals.css"
import {useState,useMemo} from "react"
import Plus from "../icons/plus"
import Minus from "../icons/minus"
import Low from "../icons/Low"
import Medium from "../icons/Medium"
import High from "../icons/High"
import Urgent from "../icons/Urgent"
import Ramesh from "../icons/Ramesh"
import Suresh from "../icons/suresh"
import Shankar from "../icons/shankar"
import Yogesh from "../icons/yogesh"
import Ap from "../icons/Anoop Sharma"
import Circle from "../icons/circle"
import Progress from "../icons/progress"
import Done from "../icons/done"
import Cancelled from "../icons/cancelled"

import DisplayCard from "./DisplayCard"

export default function Priority(){
    const[elements,setElements]=useState(0);
    const [none,setNone]=useState([])
    const [low,setLow]=useState([])
    const [medium,setMedium]=useState([])
    const [high,setHigh]=useState([])
    const [urgent,setUrgent]=useState([])
    const [user,setUser]=useState([])

    const fetchData = (check:any,status:any,priority:any) => {
        fetch("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers")
          .then((response) => response.json())
          .then((json) => {
            const results = json.tickets.filter((obj:any) => {
              if (check === 'status') {
                return status === obj.status;
              } else if (check === 'priority') {
                return priority == obj.priority;
              }
              // Add a default case or return false if check is neither 'status' nor 'priority'
              return false;
            });

            if(priority==0)
              setNone(results)
            else if(priority==1)
              setLow(results)
            else if(priority==2)
              setMedium(results)
            else if(priority==3)
              setHigh(results)
            else if(priority==4)
              setUrgent(results)
          })  
      };

      const fetchUser = () => {
        fetch("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers")
          .then((response) => response.json())
          .then((json) => {
            const results = json.users.filter((obj:any) => {
              return true
            }
              // Add a default case or return false if check is neither 'status' nor 'priority'
            );

            setUser(results)
          })  
      };

      function getData(check:any,status:any,priority:any){
        useMemo(()=>{
          fetchData(check,status,priority)
          fetchUser()
         },[])

         return <></>
      }

      var count=-100;

      function setCount(){
        count=-100;
        return <></>
      }

      var userName="";

    return (
        <div className="status">
            <div className="backlog my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px"}}>
                
               <div >
               <Minus/>
                 <span style={{marginLeft:"10px"}}>No Priority</span> 
                <span className="number">1</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('priority','',0)}

               { 
                    none.map((obj)=>{
                        count=count+150;

                        user.map((u)=>{
                          if(u['id']==obj['userId'])
                          userName=(u['name'])
                        })

                        if(obj['priority']==0){

                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==1){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==2){
                          if(userName=='Anoop sharma')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ap/>}/>
                        else if(userName=='Ramesh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ramesh/>}/>
                        else if(userName=='Suresh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Suresh/>}/>
                        else if(userName=='Shankar Kumar')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Shankar/>}/>
                        else
                        return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==3){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==4){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                    })
                }
            </div>

            <div className="Todo my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px", marginLeft:"20px"}}>
                <div >
               <Low/>
                 <span style={{marginLeft:"10px"}}>Low</span> 
                <span className="number">3</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('priority','',1)}
                {setCount()}

               { 
                    low.map((obj)=>{
                        count=count+150;

                        user.map((u)=>{
                          if(u['id']==obj['userId'])
                          userName=(u['name'])
                        })

                        if(obj['priority']==0){

                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==1){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==2){
                          if(userName=='Anoop sharma')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ap/>}/>
                        else if(userName=='Ramesh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ramesh/>}/>
                        else if(userName=='Suresh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Suresh/>}/>
                        else if(userName=='Shankar Kumar')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Shankar/>}/>
                        else
                        return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==3){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==4){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                    })
                }
            </div>

            <div className="In-progress my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px", marginLeft:"35px"}}>
                <div >
               <Medium/>
                 <span style={{marginLeft:"10px"}}>Medium</span> 
                <span className="number">2</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('priority','',2)}
                {setCount()}

               { 
                    medium.map((obj)=>{
                        count=count+150;

                        user.map((u)=>{
                          if(u['id']==obj['userId'])
                          userName=(u['name'])
                        })

                        if(obj['priority']==0){

                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==1){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==2){
                          if(userName=='Anoop sharma')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ap/>}/>
                        else if(userName=='Ramesh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ramesh/>}/>
                        else if(userName=='Suresh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Suresh/>}/>
                        else if(userName=='Shankar Kumar')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Shankar/>}/>
                        else
                        return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==3){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==4){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                    })
                }
            </div>

            <div className="Done my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px", marginLeft:"20px"}}>
                 <div >
               <High/>
                 <span style={{marginLeft:"10px"}}>High</span> 
                <span className="number">3</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('priority','',3)}
                {setCount()}

               { 
                    high.map((obj)=>{
                        count=count+150;

                        user.map((u)=>{
                          if(u['id']==obj['userId'])
                          userName=(u['name'])
                        })

                        if(obj['priority']==0){

                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==1){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==2){
                          if(userName=='Anoop sharma')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ap/>}/>
                        else if(userName=='Ramesh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ramesh/>}/>
                        else if(userName=='Suresh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Suresh/>}/>
                        else if(userName=='Shankar Kumar')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Shankar/>}/>
                        else
                        return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==3){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==4){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                    })
                }
            </div>
            <div className="Cancelled my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px", marginLeft:"20px"}}>
                <div >
               <Urgent/>
                 <span style={{marginLeft:"10px"}}>Urgent</span> 
                <span className="number">1</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('priority','',4)}
                {setCount()}

               { 
                    urgent.map((obj)=>{
                        count=count+150;

                        user.map((u)=>{
                          if(u['id']==obj['userId'])
                          userName=(u['name'])
                        })

                        if(obj['priority']==0){

                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==1){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Low/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==2){
                          if(userName=='Anoop sharma')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ap/>}/>
                        else if(userName=='Ramesh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Ramesh/>}/>
                        else if(userName=='Suresh')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Suresh/>}/>
                        else if(userName=='Shankar Kumar')
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Shankar/>}/>
                        else
                        return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Medium/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==3){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<High/>} name={<Yogesh/>}/>
                        }
                        else if(obj['priority']==4){
                          if(userName=='Anoop sharma')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ap/>}/>
                          else if(userName=='Ramesh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Ramesh/>}/>
                          else if(userName=='Suresh')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Suresh/>}/>
                          else if(userName=='Shankar Kumar')
                            return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Urgent/>} name={<Shankar/>}/>
                          else
                          return <DisplayCard id={obj['id']} title={obj['title']} count={count} icons={<Minus/>} name={<Yogesh/>}/>
                        }
                    })
                }
            </div>
        </div>
    );
}