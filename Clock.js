

const showtime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds(); 
    //let d = date.getDay();
    //let m = date.getMonth();
    //let y = date.getFullYear();
 
    let greeting = '';
    
    document.querySelector('select').value != null ? 
        (gtm = document.querySelector('select').value - 3, h+=gtm) : ''; 

    h>23 ? h-=24 : '';
    h<0 ? h+=24 : ''; 

    h > 4 && h < 12 ? greeting = "Good Morning" : '';
    h > 11 && h < 18 ? greeting = "Good afternoon" : '';
    h > 17 ? greeting = "Good evening" : ''; 
    h < 5 ? greeting = "Good night" : '';     
    
    h < 10 ? h = "0" + h : '';  
    m < 10 ? m = "0" + m : ''; 
    s < 10 ? s = "0" + s  : ''; 
  
    let time = h + ":" + m + ":" + s;
    
    document.querySelector('#MyClock').innerHTML = time;
    document.querySelector("#Greeting").innerHTML = greeting + " from Ukraine!";
    
    setTimeout(showtime, 1000);
};


showtime();



/*function greetme() {
    var date = new Date();
    var h = date.getHours();
    var greeting = null;
    if (h > 4 & h < 12) {
        greeting = "Good Morning";
    } else if (h > 11 & h < 18) {
        greeting = "Good afternoon";
    } else if (h > 17) {
        greeting = "Good evening";
    } else if (h < 5) {
        greeting = "Good night";
    }
    

    //document.getElementById("Greeting").innerText = greeting + " from Ukraine!";
    document.getElementById("Greeting").textContent = greeting + " from Ukraine!";

    setTimeout(greetme, 1000);
}*/




window.addEventListener('load', () => {
    let i=0;
    const images = ["url('Images/theme1.jpg')", "url('Images/theme2.jpg')", "url('Images/theme3.jpg')", "url('Images/theme4.jpg')", 
    "url('Images/theme5.jpg')", "url('Images/theme6.jpg')", "url('Images/theme7.jpg')"];
    const image = document.querySelector('#background');

    image.style.backgroundImage = images[Math.floor(Math.random() * images.length)];

    setInterval( () => {
        image.style.backgroundImage = images[Math.floor(Math.random() * images.length)];
        images.length == 1 ? i = 0: '';
    }, 5000);


})




/*$().ready(function(){
    var i = 0;
    var images = ['Images/theme1.jpg','Images/theme2.jpg', 'Images/theme3.jpg', 'Images/theme4.jpg',
    'Images/theme5.jpg', 'Images/theme6.jpg', 'Images/theme7.jpg','Images/theme8.jpg']
    var image = $('#background')
    
    image.css('background-image', 'url(Images/theme8.jpg)')
    
    setInterval(function(){
      image.css('background-image', 'url(' + images[Math.floor(Math.random() * images.length)] +')')
      if(1 == images.length) i = 0
    }, 5000)
}) */
