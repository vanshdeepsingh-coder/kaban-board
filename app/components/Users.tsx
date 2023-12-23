'use client'
import "../globals.css"
import {useState,useMemo} from "react"
import Plus from "../icons/plus"
import Minus from "../icons/minus"
import Ap from "../icons/Anoop Sharma"
import Yogesh from "../icons/yogesh"
import Suresh from "../icons/suresh"
import Shankar from "../icons/shankar"
import Ramesh from "../icons/Ramesh"
import Circle from "../icons/circle"
import Progress from "../icons/progress"
import Done from "../icons/done"
import Cancelled from "../icons/cancelled"
import Low from "../icons/Low"
import Medium from "../icons/Medium"
import High from "../icons/High"
import Urgent from "../icons/Urgent"

import DisplayCard from "./DisplayCard"

export default function Priority(){
    const[elements,setElements]=useState(0);
    const [user1,setUser1]=useState([])
    const [user2,setUser2]=useState([])
    const [user3,setUser3]=useState([])
    const [user4,setUser4]=useState([])
    const [user5,setUser5]=useState([])
    const [user,setUser]=useState([])

    const fetchData = (userId:any) => {
        fetch("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers")
          .then((response) => response.json())
          .then((json) => {
            const results = json.tickets.filter((obj:any) => {
              
                return userId==obj.userId
            });

            if(userId=='usr-1')
              setUser1(results)
            else if(userId=='usr-2')
              setUser2(results)
            else if(userId=='usr-3')
              setUser3(results)
            else if(userId=='usr-4')
              setUser4(results)
            else if(userId=='usr-5')
              setUser5(results)
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

      function getData(userId:any){
        useMemo(()=>{
          fetchData(userId)
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
            <div className="backlog my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px",marginLeft:"10px",width:"300px"}}>
                
               <div>
               <Ap/>
                 <span style={{marginLeft:"10px"}}>Anoop sharma</span> 
                <span className="number">3</span>
                </div>
                {/* <Plus/> */}
                {/* <Minus/> */}

                {getData('usr-1')}
                {setCount()}

               { 
                    user1.map((obj)=>{
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

            <div className="Todo my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px",marginRight:"25px"}}>
                <div >
               <Yogesh/>
                 <span style={{marginLeft:"10px"}}>Yogesh</span> 
                <span className="number">3</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('usr-2')}
                {setCount()}

               { 
                    user2.map((obj)=>{
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

            <div className="In-progress my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px", marginLeft:"20px"}}>
                <div >
               <Suresh/>
                 <span style={{marginLeft:"10px"}}>Suresh</span> 
                <span className="number">2</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('usr-5')}
                {setCount()}

               { 
                    user5.map((obj)=>{
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

            <div className="Done my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px", marginLeft:"50px"}}>
                 <div >
               <Shankar/>
                 <span style={{marginLeft:"10px"}}>Shankar Kumar</span> 
                <span className="number">1</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('usr-3')}
                {setCount()}

               { 
                    user3.map((obj)=>{
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
            <div className="Cancelled my" style={{display:"flex",justifyContent:"space-between",backgroundColor:"",flexGrow:"2",marginTop:"20px",fontSize:"18px", marginLeft:"-5px"}}>
                <div >
               <Ramesh/>
                 <span style={{marginLeft:"10px"}}>Ramesh</span> 
                <span className="number">1</span>
                </div>
                <Plus/>
                <Minus/>

                {getData('usr-4')}
                {setCount()}

               { 
                    user4.map((obj)=>{
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