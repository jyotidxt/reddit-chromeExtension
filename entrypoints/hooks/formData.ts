import React from "react";
import { useState, useEffect } from "react";

export interface IFormData{
    apiKey: string;
    endpoint:string;
}

export const useFormData = () =>{
    const [formData, setFormData] = React.useState<IFormData>({
        apiKey:"",
        endpoint:"",
    });

    // useEffect(()=>{
    //     // to store form information in chrome extension storage and render if it already in it
    //     chrome.storage.local.get(["formData"],(result) =>{
    //         if(result.formData) {
    //          setFormData(result.formData);  
    //         }
    //     });
    // },[]);
    useEffect(() => {
    // Chrome Storage API का उपयोग
    chrome.storage.local.get(["formData"], (result: { formData?: IFormData }) => {
      if (result && result.formData) {
        setFormData(result.formData);
      }
    });
  }, []);

    return {formData , setFormData};
};