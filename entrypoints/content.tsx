import React from 'react';
import ReactDOM from 'react-dom/client';
import { CreateContentElement } from "./content/common";
import PostModal from './content/posts';

export default defineContentScript({
  matches: ['*://*.reddit.com/*'],
  cssInjectionMode: "ui",
  async main(ctx) {
 
    const createUi = (message: string) => {
      let root: ReactDOM.Root | null = null; 

      return createShadowRootUi(ctx, {
        name: `ui-${message}`,
        position: "inline",
        anchor: "body",
        onMount: (uiContainer, shadow, shadowContainer) => {
          //  CreateContentElement ui rendering
           const onRemove = () => {
              root?.unmount();
              shadowContainer.style.visibility="hidden";
            };
          root = CreateContentElement(uiContainer, shadowContainer, message, (root) => (

           
            
            <PostModal posts={[]}  onRemove={onRemove}/>
          ));
        },
        onRemove: () => {
          root?.unmount();
        },
      });
    };

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === "post" || message.action === "comment") {
        createUi(message.action).then((ui) => {
          ui.mount();
          sendResponse({ status: "UI Mounted" });
        });
      }
      return true;
    });
  },
});