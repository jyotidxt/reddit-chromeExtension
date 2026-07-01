import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { CreateContentElement } from "./content/common";
import PostModal from './content/posts';
import CommentModal from './content/comment';
import { useFormData } from "@/entrypoints/hooks/useFormData";
import "@/entrypoints/popup/style.css";
import { extractRedditCommentsFromDOM, extractRedditPostsFromDOM, IComment, IPost } from './content/scripts/scrap';

export default defineContentScript({
  matches: ['*://*.reddit.com/*'],
  cssInjectionMode: "ui",
  async main(ctx) {
    const createUi = (message: string) => {
      let root: ReactDOM.Root | null = null;

      const ModalWrapper = ({ onRemove }: { onRemove: () => void }) => {
        const { formData } = useFormData();
        // State define 
        const [posts, setPosts] = useState<IPost[]>([]); 
 const [comments, setComments] = useState<IComment[]>([]);
        useEffect(() => {
          const data = extractRedditPostsFromDOM();
          const commentData = extractRedditCommentsFromDOM()
          setPosts(data);
          setComments(commentData); // State update ki
        }, []);

        return message === "comment" ? (
          <CommentModal post={posts[0] || null} comments = {comments} onRemove={onRemove} />
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