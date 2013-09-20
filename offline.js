

var online = true;
document.addEventListener("offline", gotoffline, false);
function gotoffline(){
navigator.notification.alert("Sie sind jetzt offline und Ihnen stehen nicht mehr alle Funktionen zur Verfügung!");
online = false;
}

document.addEventListener("online", gotonline, false);

function gotonline(){
// navigator.notification.alert("Sie sind jetzt wieder online und Ihnen stehen nun wieder alle Funktionen zur Verfügung!");


for(var i=0; i< window.localStorage.length; i++)
{

	var keyname = window.localStorage.key(i);
	var pair = window.localStorage.getItem(keyname);
	if(pair.key.indexOf("photo_") != -1)
	{
		Upload(pair.value);
		window.localStorage.removeItem(keyname);
	}

}

}

