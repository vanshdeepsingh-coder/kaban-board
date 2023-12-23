import 'bootstrap/dist/css/bootstrap.css'

export default function DisplayCard({id,title,count,icons,name}:{id:any,title:any,count:any,icons:any,name:any}){
    return (
        <div className="card" style={{width:"18rem",position:"absolute",marginTop:`${count}px`, backgroundColor:"white"}}>
            <div className="card-body">
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <h5 className="card-title">{id}</h5>
                    {name}
                </div>

                <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
                    
                
                <p className="card-text"></p>
                <a href="#" className="card-link">{icons}</a>
                <a href="#" className="card-link"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" style={{color: "gray"}} className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                Feature Request</a>
            </div>
        </div>
    );
}