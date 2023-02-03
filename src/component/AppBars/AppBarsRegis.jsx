import React, { useState } from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import moment from "moment/moment"; 
import Swal from "sweetalert2";


 
function AppBarsRegis() {

    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [birthday,setBirthday]= useState('')
    const user = {name:name, email:email, birthday:birthday}

    const handleRegis=()=> {
        const formattedDate = moment(user.birthday).format("YYYYMMDD")
        const userAge = moment(formattedDate,"YYYYMDD").fromNow()
        // Swal.fire(`${userAge.slice(0,2)} tahun`)
        Swal.fire({
            title: (`Halo ${name} !`),
            text: (`usia kamu sekarang ${userAge.slice(0,2)} tahun`),
            width: 600,
            padding: '3em',
            color: '#716add',
            confirmButtonText: '<a href="http://localhost:3000/login">Next</a>',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
  

    

    

    
    return (
        <div style={{width:'30%', height: '65vh', margin: 'auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius:'1%', marginTop:'2%' }}>
            <div style={{marginTop: '8%', display:"flex", flexDirection:"column", gap:"3%"}}>
                <h3 style={{ textAlign: 'center'}}>Regis dulu bos</h3>
            </div>
            <div style={{marginTop: "5%"}}>
                <input style={{backgroundColor:"#f9f6f2", padding:"1.5%", borderRadius: "2%", borderColor:"1px solid lightgrey", display:'flex', alignItems:'center', width:'70%', margin:'auto'}} type={'text'} onChange={(e)=> setName(e.target.value)} placeholder={'Nama'}></input>
            </div >
            <div style={{marginTop: "5%"}}>
                <input style={{backgroundColor:"#f9f6f2", padding:"1.5%", borderRadius: "2%", borderColor:"1px solid lightgrey", display:'flex', alignItems:'center', width:'70%', margin:'auto'}} type={'text'} onChange={(e)=> setEmail(e.target.value)} placeholder={'Email'}></input>
            </div>
            <div style={{marginTop: "5%"}}>
                <input style={{backgroundColor:"#f9f6f2", padding:"1.5%", borderRadius: "2%", borderColor:"1px solid lightgrey", display:'flex', alignItems:'center', width:'70%', margin:'auto'}} type={'date'} onChange={(e)=> setBirthday(e.target.value)} placeholder={'Birthday'}></input>
            </div>
            

            <button style={{width: "60%", height:"45px", margin:"auto", marginTop:"8%" , backgroundColor:"#716add", border: "1px solid lightgrey", borderRadius:"3%", display:"flex", alignItems:"center", textAlign:"center", justifyContent:"center" }} onClick={()=> handleRegis()}>Submit</button>
        </div>

    )

}

export default AppBarsRegis