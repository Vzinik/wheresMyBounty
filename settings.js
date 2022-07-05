/**file:///D:/web%20dev/WheresMyBounty/settings.html**/


let accounts = document.getElementById("accounts");
let notifications = document.getElementById("notifications");
let channels = document.getElementById("channels");
let account_items = document.getElementsByClassName("account_items");
let notification_items = document.getElementsByClassName("notification_items");
let channel_items = document.getElementsByClassName("channel_items");
let paladins = document.getElementById("paladins");
let twitch = document.getElementById("twitch");
let hirez = document.getElementById("hirez");

let settings = {
    notiSound: true,
    popup: true,
    theme: "light",
    isOn: false,
    channel: ["paladinsgame"]
}

{ //menu bar*****************************************************************************
    let a = 0;
    let b = 1;
    let c = 0;
    notifications.style.backgroundColor = "#bbf1f7";

    //selection color when clicked on options
    accounts.addEventListener("click", () => {
        accounts.style.backgroundColor = "#bbf1f7";
        notifications.style.backgroundColor = "#e8fafa";
        channels.style.backgroundColor = "#e8fafa";

        account_items[0].style.display = "block";
        notification_items[0].style.display = "none";
        channel_items[0].style.display = "none";
        a = 1;
        b = 0;
        c = 0;
    });

    notifications.addEventListener("click", () => {
        notifications.style.backgroundColor = "#bbf1f7";
        accounts.style.backgroundColor = "#e8fafa";
        channels.style.backgroundColor = "#e8fafa";

        account_items[0].style.display = "none";
        notification_items[0].style.display = "block";
        channel_items[0].style.display = "none";
        b = 1;
        a = 0;
        c = 0;
    });

    channels.addEventListener("click", () => {
        channels.style.backgroundColor = "#bbf1f7";
        accounts.style.backgroundColor = "#e8fafa";
        notifications.style.backgroundColor = "#e8fafa";

        account_items[0].style.display = "none";
        notification_items[0].style.display = "none";
        channel_items[0].style.display = "block";
        c = 1;
        a = 0;
        b = 0;
    });


    //changes color when hovered over options
    accounts.addEventListener("mouseenter", () => {
        accounts.style.backgroundColor = "#bbf1f7";
    });
    accounts.addEventListener("mouseleave", () => {
        if (!a)
            accounts.style.backgroundColor = "#e8fafa";
    });

    notifications.addEventListener("mouseenter", () => {
        notifications.style.backgroundColor = "#bbf1f7";
    });
    notifications.addEventListener("mouseleave", () => {
        if (!b)
            notifications.style.backgroundColor = "#e8fafa";
    });

    channels.addEventListener("mouseenter", () => {
        channels.style.backgroundColor = "#bbf1f7";
    });
    channels.addEventListener("mouseleave", () => {
        if (!c)
            channels.style.backgroundColor = "#e8fafa";
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////

{ //accounts settings menu bar............................
    paladins.addEventListener("click", () => {
        paladins.style.borderBottom = "5px solid rgb(51, 216, 54)";
        twitch.style.borderBottom = "none";
        hirez.style.borderBottom = "none";

        paladins.style.color = "rgb(51, 216, 54)";
        twitch.style.color = "black";
        hirez.style.color = "black";
    })
    twitch.addEventListener("click", () => {
        paladins.style.borderBottom = "none";
        twitch.style.borderBottom = "5px solid rgb(51, 216, 54)";
        hirez.style.borderBottom = "none";

        paladins.style.color = "black";
        twitch.style.color = "rgb(51, 216, 54)";
        hirez.style.color = "black";
    })
    hirez.addEventListener("click", () => {
        paladins.style.borderBottom = "none";
        twitch.style.borderBottom = "none";
        hirez.style.borderBottom = "5px solid rgb(51, 216, 54)";

        paladins.style.color = "black";
        twitch.style.color = "black";
        hirez.style.color = "rgb(51, 216, 54)";
    })
}

//general settings..............................


//Channels*******************************************************************
chrome.storage.sync.get(['channels'],(data)=>{

    console.log(data.channels);
    const lst = document.createElement("li");
    lst.appendChild(document.createTextNode(data.channels));
     document.querySelector(".chList").appendChild(lst);

});

    
document.getElementById("ch1").addEventListener("keypress", (event)=>{
    if(event.key=="Enter"){
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});
document.getElementById("addButton").addEventListener("click",()=>{
    let inp = document.getElementById("ch1");
    let v=inp.value;

    if(v[0]=='');
    //writing the new channel names down on page 
    const lst = document.createElement("li");
    const child1=document.createElement("span");
    const child2=document.createElement("span");
    child1.appendChild(document.createTextNode(v));
    //child2.
    lst.appendChild(child1);
    document.querySelector(".chList").appendChild(lst);
    inp.value='';
    inp.focus();
    /*********************************************** */
    //storing the channel names
    /********************************************** */
    chrome.storage.sync.get(['channels'],(data)=>{
        let i=data.channels.length;
        let arr=data.channels;
        arr[i]=v;
        chrome.storage.sync.set({"channels":arr});
        //console.log(data);
    });
    chrome.storage.sync.get(['channels'],(n)=>{console.log(n.channels);});
});