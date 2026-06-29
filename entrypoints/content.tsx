import React from 'react';
import ReactDOM from 'react-dom/client';
import { CreateContentElement } from "./content/common";
import PostModal from './content/posts';
import CommentModal from './content/comment';
// import background from './background';

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
          Object.assign(shadowContainer.style, {
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "999999",
            // backgroundColor: "transparent",
            // transform: "translate(-50%, -50%)",

          });
          //  CreateContentElement ui rendering
          const onRemove = () => {
            root?.unmount();
            shadowContainer.style.display = "none";
          };
          root = CreateContentElement(uiContainer, shadowContainer, message, (root) => (

message === "comment" 
    ?  <CommentModal comments={[]} onRemove={onRemove} />
    : <PostModal posts={[]} onRemove={onRemove} />
/* <><PostModal posts={[]} onRemove={onRemove} />
               <CommentModal comments={[]} onRemove={onRemove} /></> */
            
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