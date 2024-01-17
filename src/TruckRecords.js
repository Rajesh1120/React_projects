import React, { useState } from "react";
import TruckDetail from "./TruckDetail";
function TruckRecords({FormDataList}){
    
    const [truckdetails,settruckdetails]=useState({
        id:'',
        truckNo:"",
        trailer:"",
        company:"",
        steerAxile:"",
            driverAxile:"",
            trailerAxile:"",
    })
    const [clicked,setclicked]=useState(false)
    function handleTruckdetails(value){
        settruckdetails({
            ...truckdetails,
            id:value,
            truckNo:FormDataList[value].truckNo,
            trailer:"",
            company:"",
            steerAxile:FormDataList[value].steerAxile,
            driverAxile:FormDataList[value].driverAxile,
            trailerAxile:FormDataList[value].trailerAxile,
        })
        setclicked(true)
        
    }
   
    return(
        <div className="form">
            <h2>List of Trucks</h2>
            {FormDataList.map((formdata,index) => 
            <ul className="Listoftrucks"key={index}>
                <li className="trucks"> <button  value={formdata.truckNo} onClick={()=>handleTruckdetails(index)} >{formdata.truckNo} </button></li>
            </ul>
            
            )}
            <TruckDetail truckdetail={truckdetails} FormDataList={FormDataList} clicked={clicked}/>
        </div>
    )
}


export default TruckRecords;