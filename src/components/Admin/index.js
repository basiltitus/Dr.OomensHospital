import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import './index.css'

export default function AdminHome(){
    const [isAuth,setIsAuth]=React.useState(false);
    return(<>
        {!isAuth&&
        <Login AuthenticationSuccessfull={()=>{setIsAuth(true)}} />}
{isAuth&&<Dashboard logout={()=>setIsAuth(false)} />}
        </>
    );
}
