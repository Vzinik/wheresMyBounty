
function elementCheck(selector,timeout){
    return new Promise((resolve, reject) => {
        var timer=false;
        if(document.querySelectorAll(selector).length)  return resolve();
        const observer=new MutationObserver(()=>{
            if(document.querySelectorAll(selector).length){
                observer.disconnect();
                if(timer!==false) clearTimeout(timer);
                return resolve();
            }
        });
        observer.observe(document.body,{
            childList:true,
            subtree:true
        });
        if(timeout) timer=setTimeout(()=>{
            observer.disconnect();
            reject();
        },timeout)
    })
}

chrome.runtime.onMessage.addListener((message,sender,sendresponse)=>{
    sendresponse({name:"contentpage:query recieved"});
    if(chrome.runtime.id==sender.id){ console.log("id found");
        if(message.qrry=="isLive") { 
            console.log("query: isLive");
            elementCheck(".preview-card-image-link",3000).then(function(){
                var arr=document.getElementsByClassName("preview-card-image-link");
                let i=0;
                for(i=0;i<arr.length;i++){
                    if(arr[i].getAttribute("href")==message.arg){
                        console.log("channel gotcha");
                        chrome.runtime.sendMessage({channelVal:message.arg},(a)=>{
                            console.log("fav channel name sent");
                            console.log(a.res);
                        });
                        break;
                    }
                }
                if(i==arr.length){
                    chrome.runtime.sendMessage({channelVal:arr[0].getAttribute("href")},(a)=>{
                        console.log("not fav channel name sent");
                        console.log(a.res);
                    });
                    console.log("fav channel not found");
                }
            }).catch(()=>{
                alert("element didnt load on time");
            })
            
        }
        if(message.qrry=="isPaladins"){
            elementCheck(".deWlGg",3000).then(function(){
                if(document.querySelector('.deWlGg').innerHTML=='Paladins')
                    chrome.runtime.sendMessage({game:true},a=>{
                        console.log("paladins it is");
                        console.log(a.res);
                    })
                else
                    chrome.runtime.sendMessage({game:false},a=>{
                        console.log("not paladins");
                        console.log(a.res);
                    })
            }).catch(()=>{
                console.log("bad network");
            })
        }
    }
    else console.log("wrong id");
})



//const target=document.getElementsByTagName("body");
// setInterval(()=>{
//     let a=document.getElementsByClassName("preview-card-image-link");
//     a[0].getAttribute("href")
// },1000);

//streamObserver



///onsite-notifications__badge (notification badge)

// elementCheck(".ScCoreButtonPrimary-sc-1qn4ixc-1",1000).then(function(){
//     let a=document.getElementsByClassName("ScCoreButtonPrimary-sc-1qn4ixc-1");
//     for(let i=30;i<74;i++){setTimeout(function(){a[i].click();},500)}
// });