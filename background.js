var tabId;
var tabUrl="";
var channel="";
var dirTab;
var dirUrl="";
var noti;
var text;

chrome.runtime.onInstalled.addListener((details) => {
	if(details.reason=='install'){
		chrome.storage.local.set({"button":false});
  		chrome.action.setIcon({path:'/logo/logoGrey_128.png'});
  		chrome.storage.sync.set({"channels":'/paladinsgame'});
	}
	else if(details.reason=='update'){
		chrome.storage.local.set({"button":false});
  		chrome.action.setIcon({path:'/logo/logoGrey_128.png'});
  		chrome.storage.sync.set({"channels":'/paladinsgame'});
	}
});

chrome.storage.onChanged.addListener((changes,local)=>{
	if(changes.button.newValue){
	  	chrome.action.setIcon({path:'/logo/logo_128.png'});
	  	chrome.tabs.query({url:"https://www.twitch.tv/*"},(tab)=>{
			tab.forEach(element => {
				ask(element.id,"isPaladins",'?',res=>{
					//console.log(res);
				})
			});
	  	})
		console.log('switch');
	  	createTab();
  	}
	else  if(!changes.button.newValue){
	  	chrome.action.setIcon({path:'/logo/logoGrey_128.png'});
	  
  	}

})

function createTab() {
	chrome.storage.sync.get(["channels"],(data)=>{
		channel=data.channels;
		chrome.tabs.create({url:'https://www.twitch.tv/directory/game/Paladins', active:false},(tab)=>{
		dirTab=tab.id;
		dirUrl="https://www.twitch.tv/directory/game/Paladins";
		//console.log("paladins game directory created");
		});
		
	})
}


chrome.runtime.onMessage.addListener((a,b,c)=>{
	//console.log("found name"+a.channelVal);
	c({res:"background:success"});
	if(a.channelVal){
		//chrome.tabs.remove(dirTab);
		console.log(b);
		chrome.tabs.create({url:"https://www.twitch.tv"+a.channelVal,active:false},(tab)=>{
			tabId=tab.id;
			tabUrl=tab.url;
			//console.log("channel created"); 
	})}
	if(a.game){
		
	}
})

function ask(id,qrry,name,callback) { 
	//console.log("query sent");
	chrome.tabs.sendMessage(id,{'qrry':qrry,'arg':name},(res)=>{
		console.log(res.name);
		if(typeof callback=="function")
			callback(text);
	})
}

console.log('background?');
//bounty coins-- id-bounty
//remaining time---id-tRem



//tabObserver
	chrome.tabs.onUpdated.addListener((id,info,old)=>{
		if(id==dirTab)console.log(info);
		if(id==dirTab&&info.status=='complete'){
			//console.log("isdirectoryComplete? "+info.status);
			ask(id,"isLive",channel,(name)=>{
				//console.log("check the channel: "+channel);
			})
		}
		if(id==tabId){
			if(info.discarded){	chrome.tabs.reload(id).then((result) => {
					console.log(result);			
				}).catch((err) => {
					console.log("error "+err);//ERROR MESSAGE
				});console.log("discarded");}
			if(info.url){ 
				console.log("website changed : "+info.url);
				if(info.url=="https://www.twitch.tv/*"){
					//console.log("it is twitch!");
					ask(id,"isPaladins",'?',(val)=>{
						if(val)	console.log("true");//continue
						else	console.log("false");	//stop
					})
				}
				else{
					chrome.notifications.create(
						'stopping notification',
						{
							buttons:[{title:"Yes"},{title:"No"}],
							message:"WheresMyBounty has stoppped",
							contextMessage:"Do you want to turn it on?",
							type:"basic",
							title:"WheresMyBounty",
							requireInteraction: true,
							silent : true,
							iconUrl:"/logo/logo_128.png"
						}
					)
				}
			}
			
		}
	});
	chrome.tabs.onRemoved.addListener((id,info)=>{
		if(id==tabId){
			if(info.isWindowClosing);	//stop
			else ;						//stop && tabs.querry 
		}
	});
	


