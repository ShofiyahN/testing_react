import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AppBarsLogin() {

    const dataUser =
        {
            email: 'admin@importir.com',
            password: 'admin'
        }
    

    const navigate = useNavigate()
    

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const user = {email:email, password:password}
    const handleLogin =()=> {
        
        console.log(user, 'ini user')
        if (dataUser.email === email && dataUser.password === password){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login berhasil',
                // confirmButtonText: '<a href="http://localhost:3000/home">Next</a>',
                timer: 1500
              })

              navigate('/home')

            
        } else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email atau Password salah',
              })
        }
    }


    return(
        <div style={{width:'30%', height: '65vh', margin: 'auto', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius:'1%', marginTop:'2%'}}>
            <form>
                <div style={{marginTop: '8%', display:"flex", flexDirection:"column", gap:"3%"}}>
                    <h1 style={{ textAlign: 'center'}}>Login</h1>
                    <p style={{ textAlign: 'center', color:"darkgrey"}}>Login to blablabla</p>
                </div>
                <div style={{marginTop: "5%"}}>
                    <input style={{backgroundColor:"#f9f6f2", padding:"1.5%", borderRadius: "2%", borderColor:"1px solid lightgrey", display:'flex', alignItems:'center', width:'70%', margin:'auto'}} type={'text'} onChange={(e)=> setEmail(e.target.value)} placeholder={'Email'}></input>
                </div>
                <div style={{marginTop: "5%"}}>
                    <input style={{backgroundColor:"#f9f6f2", padding:"1.5%", borderRadius: "2%", borderColor:"1px solid lightgrey", display:'flex', alignItems:'center', width:'70%', margin:'auto'}} type={'password'} onChange={(e)=> setPassword(e.target.value)} placeholder={'password'}></input>
                </div>
            </form>
                <button style={{width: "60%", height:"45px", margin:"auto", marginTop:"8%" , backgroundColor:"lightgrey", border: "1px solid lightgrey", borderRadius:"3%", display:"flex", alignItems:"center", textAlign:"center", justifyContent:"center" }} onClick={()=> handleLogin()}>Login</button>
        </div>
    )
}

export default AppBarsLogin