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

useEffect(() => {

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

  return { formData, setFormData };
};