
function showtime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    if (h < 10){
        h = "0" + h;
    } 
    if (m < 10){
        m = "0" + m;
    } 
    if (s < 10){
        s = "0" + s;
    } 
        
    var time = h + ":" + m + ":" + s;

    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;
        
    setTimeout(showtime, 1000);
    
}

showtime();

function greetMe() {
    var date = new Date();
    var h = date.getHours();
    var greeting = null;
        if (h > 4 & h < 12) {
            greeting = "Good Morning!";
        } else if (h > 11 & h < 18) {
            greeting = "Good afternoon!";
        } else if (h > 17) {
            greeting = "Good evening!";
        } else if (h < 5) {
            greeting = "Good night!";
        }
    document.getElementById("Greeting").textContent = greeting + " We are from Ukraine!";

    setTimeout(greetMe, 1000);
}
greetMe();


var themes = [ 'theme1.jpg', 'theme2.jpg', 'theme3.jpg'];
index=0;
themes[0]= "<img src='theme1.jpg'>";
themes[1]= "<img src='theme2.jpg'>";
themes[2]= "<img src='theme3.jpg'>";
index = Math.floor(Math.random * themes.length);

$().ready(function(){
    var i = 0;
    
  //   Background Images
    var images = [
      'theme1.jpg',
      'theme2.jpg',
      'theme3.jpg'
    ]
    
  //   pick body element ID
    var image = $('#imageChange')
    
  //   set initial background-image
    image.css('background-image', 'url(theme3.jpg)')
    
  //   change image every after 5 seconds
    setInterval(function(){
      image.fadeOut(1000, function(){
        image.css('background-image', 'url(' + images [i++] +')')
        image.fadeIn(1000)
      })
      if(1 == images.length)
        i = 0
    }, 5000)
  })