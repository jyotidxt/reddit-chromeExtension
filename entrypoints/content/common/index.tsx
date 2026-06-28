import React from 'react';
import ReactDOM from 'react-dom/client';
import {Toaster} from "react-hot-toast";
export const CreateContentElement = (uiContainer: HTMLElement,
    shadowContainer: HTMLElement,
     message: string,
    callback: (root: ReactDOM.Root)=> React.ReactNode): ReactDOM.Root => { 
  const app = document.createElement("div");
  uiContainer.appendChild(app);
  const root = ReactDOM.createRoot(app);
  
  root.render(
    <React.StrictMode>
      <div style={{
        position: "fixed", top: 50, right: 10,
        backgroundColor: "rgba(73, 73, 73, 0.8)", 
        padding: "10px", color: 'white', zIndex: 9999
      }}>
        <Toaster/>
        {/* it will render the particular component */}
        {callback(root)}
      </div>
    </React.StrictMode>
  );
  return root; 
};