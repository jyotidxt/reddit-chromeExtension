import React from 'react';
import ReactDOM from 'react-dom/client';
import CredentialForm from '@/components/credentialForm';
import './style.css';
import {Toaster} from "react-hot-toast"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Toaster/>
    <CredentialForm/>
  </React.StrictMode>,
);
