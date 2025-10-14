import { $fetch } from "../fetch";

export async function userSignin(payload: {}){
    try{
        const response = await $fetch.post("/auth/email-sign-in", payload);
        return response 
    }catch(err){
        console.log(err);
        throw err
    }
}

export async function verifyWithOtp(payload: {}){
    try{
        const response = await $fetch.post("/auth/email-sign-in/verify", payload);
        return response
    }catch(err){
        throw err
    }
}