
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
const textArray = ["Oh My GAWWDD", "a good bedrock server", "aarrrgggg", "by Damian Kehnan"];
const displayText = document.getElementById('displayText');
document.getElementById('randomNav').addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * textArray.length);
  displayText.textContent = textArray[randomIndex];
});


//formValue
function sendMail(){

let parms = {

email: document.getElementById("email").value,

gtag: document.getElementById("gtag").value,

message: document.getElementById("message").value,

team: document.getElementById("team").value,

}

emailjs.send("service_xytzudn", "template_rp1ft7s", parms);

}

getServerStatus();


//form


//server status
async function getServerStatus() {
fetch('https://api.mcsrvstat.us/bedrock/3/slice.ix.tc:25100')
.then(response => response.json())
.then(data => {
const onlineStatusElement = document.getElementById('online');
if (data.online) {
serverstat.innerHTML = "SERVER ON! <br>" + data.players.online + "/" + data.players.max + "<br>min ver: " + data.protocol.name;
serverstat.style.color = "#42ecf5";
serverstat.style.marginLeft = "21px";
serverstat.style.fontSize = "20px";
} else {
console.log("ulol2")
}
})
.catch(error => {1
console.error('Error fetching server status:', error);
});

}




