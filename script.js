
//time
function updateTime() {
const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}${ampm}`;
document.getElementById('clock').textContent = timeString;
}
setInterval(updateTime, 1000);


//titleText
const textArray = ["Oh My GAWWDD", "a good bedrock server", "never trust anybody", "by Damian Kehnan"];
const displayText = document.getElementById('displayText');
document.getElementById('randomNav').addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * textArray.length);
  displayText.textContent = textArray[randomIndex];
});

//server status
async function getServerStatus() {
const response = await fetch("https://api.ismcserver.online/bedrock/slice.ix.tc:25100", {
headers: {
"Authorization": "fe2ab5ca-0df1-4a29-a445-490d8eee5a2c"
}
});
const data = await response.json();
const serverStatus = document.getElementById("server-status");

if (data.online) {
serverStatus.innerText = "- SERVER ONLINE";
serverStatus.style.color = "#a1ff96";
serverStatus.innerHTML += ` ${data.players.online}/99`;
} else {
serverStatus.innerText = "- SERVER OFFLINE!";
serverStatus.style.color = "#ff9696";
}
}


//formValue
function sendMail(){

let parms = {

name: document.getElementById("name").value,

gtag: document.getElementById("gtag").value,

message: document.getElementById("message").value,

team: document.getElementById("team").value,

}

emailjs.send("service_xytzudn","template_rp1ft7s", parms);

}

getServerStatus();


//form

(function(){
emailjs.init({
publicKey: "CsYC4wQCuJdc4YrUA",
});
})();
