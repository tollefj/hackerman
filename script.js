$(document).ready(function() {
  myAudio = new Audio('hackerman.mp3'); 
  var currTime = 0;
  myAudio.addEventListener('ended', function() {
      currTime = 0;
      myAudio.play();
  }, false);
  myAudio.play();
  $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
      $.getJSON('https://json.geoiplookup.io/'+json.ip, function(data) {
        console.log(JSON.stringify(data, null, 2));
        $('#ip').html(JSON.stringify(data, null, 2));
        var ip = document.getElementById('ip');
        ip.setAttribute('data-text', JSON.stringify(data, null, 2))
      });
    }
  );
});
