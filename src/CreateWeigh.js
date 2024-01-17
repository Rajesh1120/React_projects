import React ,{useState} from "react";
import TruckRecords from "./TruckRecords";

function CreateWeigh() {
        const [FormDataList, setFormDataList]=useState([])
        const [submitted,setsubmitted]=useState(false)
        const [FormData,setFormData]=useState({
            
            truckNo:"",
            steerAxile:"",
            driverAxile:"",
            trailerAxile:"",
            
        })
    function FormDataHandler(e){
        e.preventDefault();
        
        setFormData({
            ...FormData,
            [e.target.name]:e.target.value
        })
        
    }
    
    function formHandler(e){
        e.preventDefault();
        
        setFormDataList([...FormDataList,FormData]);
        setsubmitted(true)
    }
    return(
    <>
        
        {!submitted ? <div>
        <form onSubmit={(e)=>formHandler(e)}>
        <label>Truck Number:</label>
        <input type="text" name="truckNo" value={FormData.truckNo}required  onChange={(e)=> FormDataHandler(e)}placeholder="Enter Truck Number" />
        <label>Steer Axile:</label>
        <input type="number"name="steerAxile"value={FormData.steerAxile} required onChange={(e)=> FormDataHandler(e)}placeholder="Enter Steer Axile" />
        <label>Driver Axile:</label>
        <input type="number" name="driverAxile"value={FormData.driverAxile}required onChange={(e)=> FormDataHandler(e)}placeholder="Enter Driver Axile" />
        <label>Trailer Axile:</label>
        <input type="number"name="trailerAxile" value={FormData.trailerAxile}required onChange={(e)=> FormDataHandler(e)}placeholder="Enter Driver Axile" />
        <input type="submit" value = "submit"  />
        
     </form>
    
     </div>: <TruckRecords FormDataList={FormDataList}  />}
     {/* if we click on prtsc button , it must show the records of the truckNo */}
     
    </>
    )
    
    }

    export default CreateWeigh; 



