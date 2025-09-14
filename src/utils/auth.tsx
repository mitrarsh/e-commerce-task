import { redirect } from "react-router-dom";

export type LoginPayload={
    username:string;
    password:string
}

export type LoginResponse= {
    token: string
}

export async function loginUser(payload:LoginPayload):Promise<LoginResponse>{
    const res = await fetch ("https://fakestoreapi.com/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload),
    })
    if(!res.ok){
        throw new Error("Invalid username or password");
    }
    return res.json();
}

export function checkAuthLoader(){
    const token = localStorage.getItem("token");
    if(!token){
        return redirect ('/login')
    }
}