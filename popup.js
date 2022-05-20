{
    chrome.storage.onChanged.addListener(function(changes,string){
        document.getElementById("bCoins").innerHTML=changes.bounty.newValue.toString();
        chrome.action.setBadgeText({text:changes.bounty.newValue.toString()});
        document.getElementsByClassName("elapsed")[0].style.width=changes.tRem.newValue.toString()+"%";
    });

}
document.getElementsByClassName("logo")[0].addEventListener('click',powerup);
let i=1;
let a=1;
function powerup(){
    const power=["ON","none","OFF"];
    //alert("test");
   /* while(!chrome.tabs.create(
        {
            url: 'https://www.twitch.tv/drops/inventory',
            active: false,
            index: 0
        }));*/
        chrome.action.setBadgeText({text: power[a-i]}); //on-off notification on icon
        i=i*(-1);
chrome.action.setBadgeBackgroundColor({color: '#4688F1'});

    chrome.notifications.create('test',{
        type:'basic',
        iconUrl:'/logo/logo_48.png',
        title:'are you gay?',
        //contextMessage: 'none',
        message:'please confirm',
        buttons:[{title:'yes'},{title:'No'}],
        requireInteraction: true
    });
    
}

document.getElementById("settings").addEventListener("click",function(){
    chrome.tabs.create(
        {
            url: '/settings.html'
        }
    )
})
