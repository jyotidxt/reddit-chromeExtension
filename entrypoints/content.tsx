// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import { CreateContentElement } from "./content/common";
// // import PostModal from './content/posts';
// // import CommentModal from './content/comment';
// // import './popup/style.css'
// // import background from './background';

// // export default defineContentScript({
// //   matches: ['*://*.reddit.com/*'],
// //   cssInjectionMode: "ui",
// //   async main(ctx) {

// //     const createUi = (message: string) => {
// //       let root: ReactDOM.Root | null = null;

// //       return createShadowRootUi(ctx, {
// //         name: `ui-${message}`,
// //         position: "inline",
// //         anchor: "body",
// //         onMount: (uiContainer, shadow, shadowContainer) => {
// //           Object.assign(shadowContainer.style, {
// //             position: "fixed",
// //             top: "0",
// //             right: "0",
// //             bottom: "0",
// //             left: "0",
// //             width: "100%",
// //             height: "100%",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             zIndex: "999999",
// //             // backgroundColor: "transparent",
// //             // transform: "translate(-50%, -50%)",

// //           });
// //           //  CreateContentElement ui rendering
// //           const onRemove = () => {
// //             root?.unmount();
// //             shadowContainer.style.display = "none";
// //           };
// //           root = CreateContentElement(uiContainer, shadowContainer, message, (root) => (

// // message === "comment" 
// //     ?  <CommentModal comments={[]} onRemove={onRemove} />
// //     : <PostModal posts={[]} onRemove={onRemove} />
// // /* <><PostModal posts={[]} onRemove={onRemove} />
// //                <CommentModal comments={[]} onRemove={onRemove} /></> */
            
// //           ));
// //         },
// //         onRemove: () => {
// //           root?.unmount();
// //         },
// //       });
// //     };

// //     chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// //       if (message.action === "post" || message.action === "comment") {
// //         createUi(message.action).then((ui) => {
// //           ui.mount();
// //           sendResponse({ status: "UI Mounted" });
// //         });
// //       }
// //       return true;
// //     });
// //   },
// // });


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { useState, useEffect } from 'react';
// import { CreateContentElement } from "./content/common";
// import PostModal from './content/posts';
// import CommentModal from './content/comment';
// import { useFormData } from "@/entrypoints/hooks/useFormData";
// import './popup/style.css'
// import { extractRedditPostsFromDOM } from './content/scripts/scrap';
// export default defineContentScript({
//   matches: ['*://*.reddit.com/*'],
//   cssInjectionMode: "ui",
//   async main(ctx) {
//     const createUi = (message: string) => {
//       let root: ReactDOM.Root | null = null;

//       const ModalWrapper = ({ onRemove }: { onRemove: () => void }) => {
//         const { formData } = useFormData();
//         useEffect(() => {
//         const posts = extractRedditPostsFromDOM();
//         console.log("Scraped Posts:", posts);
//     }, []);
//         // Debug: See if data arrives
//         console.log("Wrapper received formData:", formData);

//         return message === "comment" ? (
//           <CommentModal  formData={formData} onRemove={onRemove} />
//         ) : (
//           <PostModal posts={posts} formData={formData} onRemove={onRemove} />
//         );
//       };

//       return createShadowRootUi(ctx, {
//         name: `ui-${message}`,
//         position: "inline",
//         anchor: "body",
//         onMount: (uiContainer, shadow, shadowContainer) => {
//           Object.assign(shadowContainer.style, {
//             position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
//             display: "flex", alignItems: "center", justifyContent: "center", zIndex: "999999"
//           });

//           const onRemove = () => {
//             root?.unmount();
//             shadowContainer.remove();
//           };

//           root = CreateContentElement(uiContainer, shadowContainer, message, (root) => (
//             <ModalWrapper onRemove={onRemove} />
//           ));
//         },
//         onRemove: () => root?.unmount(),
//       });
//     };

//     chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//       if (message.action === "post" || message.action === "comment") {
//         createUi(message.action).then((ui) => {
//           ui.mount();
//           sendResponse({ status: "UI Mounted" });
//         });
//       }
//       return true;
//     });
//   },
// });


// new 

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { CreateContentElement } from "./content/common";
import PostModal from './content/posts';
import CommentModal from './content/comment';
import { useFormData } from "@/entrypoints/hooks/useFormData";
import './popup/style.css'
import { extractRedditPostsFromDOM, IPost } from './content/scripts/scrap';

export default defineContentScript({
  matches: ['*://*.reddit.com/*'],
  cssInjectionMode: "ui",
  async main(ctx) {
    const createUi = (message: string) => {
      let root: ReactDOM.Root | null = null;

      const ModalWrapper = ({ onRemove }: { onRemove: () => void }) => {
        const { formData } = useFormData();
        const [posts, setPosts] = useState<IPost[]>([]); // State define ki

        useEffect(() => {
          const data = extractRedditPostsFromDOM();
          setPosts(data); // State update ki
        }, []);

        return message === "comment" ? (
          <CommentModal formData={formData} onRemove={onRemove} />
        ) : (
          <PostModal posts={posts} formData={formData} onRemove={onRemove} />
        );
      };

      return createShadowRootUi(ctx, {
        name: `ui-${message}`,
        position: "inline",
        anchor: "body",
        onMount: (uiContainer, shadow, shadowContainer) => {
          Object.assign(shadowContainer.style, {
            position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: "999999"
          });

          const onRemove = () => {
            root?.unmount();
            shadowContainer.remove();
          };

          root = CreateContentElement(uiContainer, shadowContainer, message, (root) => (
            <ModalWrapper onRemove={onRemove} />
          ));
        },
        onRemove: () => root?.unmount(),
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