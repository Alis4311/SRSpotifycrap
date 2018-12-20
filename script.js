const app = {}; 

app.init = function(){
  console.log("jQuery working");  
};


function getStationInfo(id, csong, psong){
  $.ajax({
    url: "http://api.sr.se/api/v2/playlists/rightnow?channelid=" + id + "&format=json",
  }).then((...results) => {
        results = results[0].playlist;
      var prevSongTitle = results.previoussong.title; 
        var prevArtist = results.previoussong.artist;
        if(typeof results.song !== "undefined"){
            var currentArtist = results.song.artist;
            var currentSong = results.song.title;
            $(csong).text("CurrentSong: " + currentSong + " - " + currentArtist);
            console.log("current song: " + currentSong + " - " + currentArtist);
        } else {
            $(csong).text("Current Song: Not Available" )
        }
        $(psong).text("Previous Song: " + prevSongTitle + " - " + prevArtist);
        console.log(prevSongTitle + " - " + prevArtist);
  })
};


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
