// extract permissions to control album cover
var btn = document.getElementsByClassName("play")[0];

// extract permissions to control mp3
var myMusic = document.getElementById("myMusic");

// extract permissions to control lrc
var txt = document.getElementById("txt");

// extract permissions to control lrc content
var con = document.getElementsByClassName("content")[0];

// mark if the music playing =
var mark = true;

// function when the album cover is clicked
btn.onclick = function(){
    if(mark){
        this.className += " rotate"; // first time click, the album cover will rotate
        myMusic.play(); // play the music
        mark = false;
    }
    else{
        this.className = "play"; // second click, the album cover will return to the inital position
        myMusic.pause(); // pause the music
        mark = true;
    }
}

var lrc = txt.value;
var lrcArr = lrc.split("[");
var html = "" 
for(var i = 0; i < lrcArr.length; ++i){
    var arr = lrcArr[i].split("]");
    var time = arr[0].split(".");
    var timer = time[0].split(":");
    var ms = timer[0] * 60 + timer[1] * 1;  // use current time as id
    var text = arr[1];                      // lrc part
    if(text){
        html += "<p id = " + ms + ">" + text + "</p>";
    }

    con.innerHTML = html;
}
console.log("huameng");
var num = 0;
var oP = con.getElementsByTagName("p");

// add a function for the time update event of the music
myMusic.addEventListener("timeupdate", function(){

  var curTime = parseInt(this.currentTime);
  if(document.getElementById(curTime)){
      for(var i = 0; i < oP.length; ++i){
          oP[i].style.cssText = "font-size: 15px;";
      }
      
      document.getElementById(curTime).style.cssText = "background: linear-gradient(-3deg,#eebd89 0%,#d13abd 100%); -webkit-background-clip: text; color:transparent;font-size: 20px";
      if(oP[7 + num].id == curTime){
          con.style.top = -20 * num + "px";
          ++num;
      }
  }
});