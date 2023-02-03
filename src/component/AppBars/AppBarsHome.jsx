import React, { useState } from "react";
import Swal from "sweetalert2";

function AppBarsHome() {

    const [name,setName]= useState('')
    const user = {name:name}

    const handleGreet =()=> {
        Swal.fire(`Have a nice day ${name} !`)
    }


    return(
        <div style={{width:'60%', height: '30vh', margin: 'auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius:'1%', marginTop:'2%', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop: '15%'}}>
            <div style={{display:"flex", flexDirection:"column", gap:"3%"}}>
                    <h1 style={{ textAlign: 'center'}}>Input Your Name</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap:'5%', width:'80%'}}>
                <input style={{backgroundColor:"#f9f6f2", padding:"1.5%", borderRadius: "2%", borderColor:"1px solid lightgrey", display:'flex', alignItems:'center', width:'70%', margin:'auto', marginTop:'1%'}} type={'text'} onChange={(e)=> setName(e.target.value)} placeholder={'Input Name...'}></input>
                <button style={{width: "50%", height:"40px", margin:"auto", marginTop:"1%" , backgroundColor:"lightgrey", border: "1px solid lightgrey", borderRadius:"3%", display:"flex", alignItems:"center", textAlign:"center", justifyContent:"center" }} onClick={()=> handleGreet()}>Submit</button>
            </div>
        </div>
    )
}

export default AppBarsHome