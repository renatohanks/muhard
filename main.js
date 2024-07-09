function download(){
    window.location.href = "https://www.mediafire.com/file/bn0ftr6vkf5igah/MU-Hard.apk/file";
}
function whats(){
    window.location.href = "https://chat.whatsapp.com/Civyzd86ZmP3rhsuF5JEgt";
}
function insta(){
    window.location.href = "https://www.instagram.com/mu_hard?igsh=ZW40eDd1a3oydG54";
}
function face(){
    window.location.href = "https://www.facebook.com/share/LX1kfpv9t4XLCmmv/?mibextid=qi2Omg";
}
function youtube(){
    window.location.href = "https://www.youtube.com/channel/UCjeCWLiYkpi9OyY3ROcApog";
}


function openPage(x, y){
    var indice = x;
    var target = y;
    var url = "https://renatohanks.github.io/muhard/content/content" + indice + ".html";
    var xml = new XMLHttpRequest();
    

    xml.onreadystatechange = function(){
        if (xml.readyState == 4 && xml.status == 200){
            
            document.getElementById(target).innerHTML = xml.responseText;

        }
    }
    xml.open("GET", url, true);
    xml.send();
};

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;
function carrossel(){
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 1050}px)`;
}
setInterval(carrossel, 3000)

var backgroundAudio = document.getElementById('background-audio');
var playBtn = document.getElementById('background-play');
var pauseBtn = document.getElementById('background-pause');

var playShow = function() {
  backgroundAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

var pauseShow = function() {
  backgroundAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};

let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count > 12) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}
