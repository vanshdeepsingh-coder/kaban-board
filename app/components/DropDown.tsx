import "../globals.css"

export default function DropDown({setValue}:{setValue:any}){
    return (
        <div className="dropDown">
            <div className="d-name">
                <span>Grouping</span>
                <span>Ordering</span>
            </div>

            <div className="d-values">
                <select>
                    <option onClick={()=>setValue("Status")}>Status</option>
                    <option onClick={()=>setValue("Priority")}>Priority</option>
                    <option onClick={()=>setValue("Users")}>User</option>
                </select>

                <select>
                    <option>Priority</option>
                    <option>Title</option>
                </select>
            </div>
        </div>
    )
}