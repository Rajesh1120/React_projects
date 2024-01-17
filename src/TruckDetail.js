import React, { useState } from "react";


function TruckDetail({truckdetail,clicked}){
    const [invoice,setinvoice]=useState(false)
    const [displaydetails,setdisplaydetalis]=useState({
        truckno:truckdetail.truckNo,
        companyname:"",
        trailer:"",
        password:""
    })
    
    function handlechange(e){
        setdisplaydetalis({
            ...displaydetails,
            [e.target.name]:e.target.value
            })
    }
    function handleAllow(e){
        if (displaydetails.password==="1234" ){
            setinvoice(true)
            console.log(truckdetail)
            
        }
        
    }
    return(
    <>
    {clicked ?
    <div> Truck No:<input type="text" name="truckno" value={truckdetail.truckNo} onChange={handlechange} />
    Company name:<input type="text" name="companyname" onChange={handlechange}  />
    Trailer no: <input type="text" name='trailer' onChange={handlechange}  />
    <input type="password" className= "password" name="password" onChange={handlechange} />
     <button className="allow" onClick={(e) => handleAllow(e)}> Invioce</button> </div>: null}
    {invoice ? 
    <div>
        <h1>Invoice of Truck Cat scale:</h1>
        <p>Truck No:{truckdetail.truckNo}</p>
        <p>Company No:{displaydetails.companyname}</p>
        <p>Trailer No: { displaydetails.trailer}</p>
        <p>Steer Axile:{truckdetail.steerAxile}</p>
        <p>Driver Axile:{truckdetail.driverAxile}</p>
        <p>Trailer Axile:{truckdetail.trailerAxile}</p>
    </div>:null}
    </>

    )
}


export default TruckDetail;