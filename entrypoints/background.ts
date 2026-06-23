export default defineBackground(() => {
  {
    chrome.runtime.onInstalled.addListener(()=>{
      // console.log("first Installed");

      // on right click menu extension will show  two menu for comments for posts 

      chrome.contextMenus.create({
        id:"post",
        title:"Post Insights",
        contexts:["all"]
      });
        chrome.contextMenus.create({
        id:"comment",
        title:"Comment Insights",
        contexts:["all"]
      });

    });

    // handling when the submenu clicked what will happen
    
    chrome.contextMenus.onClicked.addListener(async (info, tab) =>{
      
      if (info.menuItemId=== "post"){
          // to send message to any tab
        chrome.tabs.sendMessage(
          tab?.id!,
          {action:"post"},
       function(response)   {
            console.info("response" , response);
          }
        );
      }

        if (info.menuItemId=== "comment"){
          // to send message to any tab
        chrome.tabs.sendMessage(
          tab?.id!,
          {action:"comment"},
       function(response) {
            console.info("response" , response);
          }
        );
      }
    })
  }
});
