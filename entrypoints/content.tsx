
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// export default defineContentScript({
// matches: ['*://*/*'],
//   cssInjectionMode: "ui",
//   async main(ctx) {
//     chrome.runtime.onMessage.addListener((message, sender, sendResponse ,) => {
//      switch(message.action){
//       case "post":
// const ui = await CreateUi(ctx , "post");
// ui.mount();
// break;
     
// case "comment":
//   const commentUi = await CreateUi(ctx , "comment");
// commentUi.mount();
// break ;

// default:
//   break;
      

//      }
//   }
// ) 
// }

// const CreateUi = async (ctx: any , message:string) =>{
//  let root: ReactDOM.Root | null = null;

//     return  createShadowRootUi(ctx, {
//       name: "post-element",
//       position: "inline",
//       anchor: "body",
//       onMount: (uiContainer, shadow, shadowContainer) => {
       
//         const app = document.createElement("div");
//         uiContainer.appendChild(app);

//         root = ReactDOM.createRoot(app);
//         root.render(
//           <React.StrictMode>
//             <div style={{
//               position: "fixed",
//               top: 0, left: 0, right: 0, bottom: 0,
//               backgroundColor: "rgba(0,0,0,0.5)",
//               zIndex: 9999,
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center"
//             }}>
//               <h1 style={{color: 'white'}}>Hello World! {message}</h1>
//             </div>
//           </React.StrictMode>
//         );
//       },
//       onRemove: () => {
//         root?.unmount();
//       },
//     });


// }})
 
  
import React from 'react';
import ReactDOM from 'react-dom/client';

export default defineContentScript({
  matches: ['*://*.reddit.com/*'],
  cssInjectionMode: "ui",
  async main(ctx) {
    
    // UI बनाने वाला फंक्शन main के अंदर रखें ताकि ctx का एक्सेस मिले
    const createUi = async (message: string) => {
      let root: ReactDOM.Root | null = null;
      
      return await createShadowRootUi(ctx, {
        name: `ui-${message}`,
        position: "inline",
        anchor: "body",
        onMount: (uiContainer) => {
          const app = document.createElement("div");
          uiContainer.appendChild(app);
          root = ReactDOM.createRoot(app);
          root.render(
            <React.StrictMode>
              <div style={{
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999,
                display: "flex", justifyContent: "center", alignItems: "center"
              }}>
                <h1 style={{ color: 'white' }}>Insight: {message}</h1>
              </div>
            </React.StrictMode>
          );
        },
        onRemove: () => {
          root?.unmount();
        },
      });
    };

    // Message Listener (Async)
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === "post" || message.action === "comment") {
        createUi(message.action).then((ui) => {
          ui.mount();
          sendResponse({ status: "UI Mounted for " + message.action });
        });
      }
      return true; // Async response के लिए अनिवार्य
    });
  },
});