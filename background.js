chrome.tabs.query({ currentWindow: true }, (tabsArray) => {

    if (tabsArray.length === 1) return;
    setInterval(()=>{
        const nextTab = tabsArray[Math.floor(Math.random()*tabsArray.length)];
        
        chrome.tabs.update(nextTab.id, { active: true });
        chrome.tabs.reload(nextTab.id)
    },12000)
    
});