/**file:///D:/web%20dev/WheresMyBounty/settings.html**/


let accounts=document.getElementById("accounts");
let notifications=document.getElementById("notifications");
let channels=document.getElementById("channels");
let a=0;
let b=0;
let c=0;


//selection color when clicked on options******************************
accounts.addEventListener("click",()=>{
    accounts.style.backgroundColor="#bbf1f7";
    notifications.style.backgroundColor="#e8fafa";
    channels.style.backgroundColor="#e8fafa";

    document.getElementsByClassName("account_items")[0].style.display="block";
    document.getElementsByClassName("notification_items")[0].style.display="none";
    document.getElementsByClassName("channel_items")[0].style.display="none";
    a=1;b=0;c=0;
});

notifications.addEventListener("click",()=>{
    notifications.style.backgroundColor="#bbf1f7";
    accounts.style.backgroundColor="#e8fafa";
    channels.style.backgroundColor="#e8fafa";

    document.getElementsByClassName("account_items")[0].style.display="none";
    document.getElementsByClassName("notification_items")[0].style.display="block";
    document.getElementsByClassName("channel_items")[0].style.display="none";
    b=1;a=0;c=0;
});

channels.addEventListener("click",()=>{
    channels.style.backgroundColor="#bbf1f7";
    accounts.style.backgroundColor="#e8fafa";
    notifications.style.backgroundColor="#e8fafa";

    document.getElementsByClassName("account_items")[0].style.display="none";
    document.getElementsByClassName("notification_items")[0].style.display="none";
    document.getElementsByClassName("channel_items")[0].style.display="block";
    c=1;a=0;b=0;
});


//changes color when hovered over options
accounts.addEventListener("mouseenter",()=>{
    accounts.style.backgroundColor="#bbf1f7";
});
accounts.addEventListener("mouseleave",()=>{
    if(!a)
        accounts.style.backgroundColor="#e8fafa";
});

notifications.addEventListener("mouseenter",()=>{
    notifications.style.backgroundColor="#bbf1f7";
});
notifications.addEventListener("mouseleave",()=>{
    if(!b)
        notifications.style.backgroundColor="#e8fafa";
});

channels.addEventListener("mouseenter",()=>{
    channels.style.backgroundColor="#bbf1f7";
});
channels.addEventListener("mouseleave",()=>{
    if(!c)
        channels.style.backgroundColor="#e8fafa";
});

//accounts settings............................
document.getElementById("paladins").addEventListener("click",()=>{
    document.getElementById("paladins").style.borderBottom="5px solid rgb(51, 216, 54)";
    document.getElementById("twitch").style.borderBottom="none";
    document.getElementById("hirez").style.borderBottom="none";

    document.getElementById("paladins").style.color="rgb(51, 216, 54)";
    document.getElementById("twitch").style.color="black";
    document.getElementById("hirez").style.color="black";
})
document.getElementById("twitch").addEventListener("click",()=>{
    document.getElementById("paladins").style.borderBottom="none";
    document.getElementById("twitch").style.borderBottom="5px solid rgb(51, 216, 54)";
    document.getElementById("hirez").style.borderBottom="none";

    document.getElementById("paladins").style.color="black";
    document.getElementById("twitch").style.color="rgb(51, 216, 54)";
    document.getElementById("hirez").style.color="black";
})
document.getElementById("hirez").addEventListener("click",()=>{
    document.getElementById("paladins").style.borderBottom="none";
    document.getElementById("twitch").style.borderBottom="none";
    document.getElementById("hirez").style.borderBottom="5px solid rgb(51, 216, 54)";

    document.getElementById("paladins").style.color="black";
    document.getElementById("twitch").style.color="black";
    document.getElementById("hirez").style.color="rgb(51, 216, 54)";
})

//general settings..............................


//Channels*******************************************************************
document.getElementById("addButton").addEventListener("click",()=>{
    let v=document.getElementById("ch1").value;

    //writing the new channel names down on page 
    const lst=document.createElement("li");
    lst.appendChild(document.createTextNode(v));
    document.getElementsByClassName("chList")[0].appendChild(lst);

    /*********************************************** */
    //code for storing the channel names will go here 
    /********************************************** */
    store('notMe ','alik',1);
    retrieve('notMe ');
    
});

//chrome storage function***************
function store(key,val,i){
    chrome.storage.local.set({key: val}, function(){
        console.log("value of "+key+" is "+val);
    })
};

function retrieve(key){
    chrome.storage.local.get(['key'],function(result){
        console.log("stored value is "+result.key);
    });
};


