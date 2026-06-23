
export default defineContentScript({
  matches: ['*://*.reddit.com/*'],
  main() {
    console.log('Hello content.');

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log("Received msg in conttent script:", request);

      if (request.action === "post") {
        console.log("Post action received");
        // Perform action for post
        sendResponse({ status: "Post action handled" });
      } else if (request.action === "comment") {
        console.log("Comment action received");
        // Perform action for comment
        sendResponse({ status: "Comment action handled" });
      }
    });
    
  }
});