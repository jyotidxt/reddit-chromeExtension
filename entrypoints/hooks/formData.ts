import React from "react";
import { useState, useEffect } from "react";

export interface IFormData {
  apiKey: string;
  endpoint: string;
}

export const useFormData = () => {
  const [formData, setFormData] = React.useState<IFormData>({
    apiKey: "",
    endpoint: "",
  });

  // useEffect(() => {
  //   // to store form information in chrome extension storage and render if it already in it
  //   chrome.storage.local.get(["formData"], (result) => {
  //     if (result.formData) {
  //       setFormData(result.formData as IFormData);
  //     }
  //   });
  // }, []);

// useFormData.ts में ये बदलाव करें
useEffect(() => {
  // चेक करें कि क्या chrome API मौजूद है
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["formData" , "a"], (result) => {
      if (result && result.formData) {
        setFormData(result.formData as IFormData);
      }
    });
  } else {
    console.warn("Chrome Extension API not detected. Are you in a browser popup?");
  }
}, []);

  //    useEffect(() => {
  //   // Chrome Storage API का उपयोग
  //   chrome.storage.local.get(["formData"], (result: { formData?: IFormData }) => {
  //     if (result && result.formData) {
  //       setFormData(result.formData);
  //     }
  //   });
  // }, []);

  return { formData, setFormData };
};