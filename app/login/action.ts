"use server";

export async function handleForm(prevState:any, formData : FormData){
    console.log(prevState);
    return {
        errors:["wrong password","pass word too short",],
    };
  }