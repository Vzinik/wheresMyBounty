{
    // chrome.storage.onChanged.addListener(function(changes,string){
    //     document.getElementById("bCoins").innerHTML=changes.bounty.newValue.toString();
    //     chrome.action.setBadgeText({text:changes.bounty.newValue.toString()});
    //     document.querySelector(".elapsed").style.width=changes.tRem.newValue.toString()+"%";
    // });

}
{
    var i=true;
    document.querySelector(".logo").addEventListener('click',()=>{
        chrome.storage.local.get(["button"],(data)=>{
            i=data.button;
            chrome.storage.local.set({"button": !i});
            console.log(i);
        })
        //chrome.tabs.create({
        //     url: 'https://www.twitch.tv/paladinsgame',
        //             active: false,
        //             index: 0
        // })
    });
}


    //alert("test");
    // while(!chrome.tabs.create(
    //     {
    //         url: 'https://www.twitch.tv/drops/inventory',
    //         active: false,
    //         index: 0
    //     }));
    
    


document.getElementById("settings").addEventListener("click",function(){
    chrome.tabs.create({url: '/settings.html'});
})
