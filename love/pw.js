var photosDom = document.getElementById('photos'); var images = photosDom.getElementsByTagName('img'); var len = images.length; var deg = Math.floor(360 / len); for (var i = 0; i < len; i++) { images[i].style = 'transform : rotateY(' + deg * i + 'deg) translateZ(180px)'; } var x = 0; setInterval(function () { photosDom.style.transform = "rotateX(-10deg) rotateY(" + (x++) * 0.2 + "deg)"; }, 30);
// photosDom.style.display = "none";
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');
    var image5 = document.getElementById('image5');
    var image6 = document.getElementById('image6');
    var image7 = document.getElementById('image7');
    var image8 = document.getElementById('image8');
    var image9 = document.getElementById('image9');

    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    image7.style.display = "none";
    image8.style.display = "none";
    image9.style.display = "none";

    function image1fans(){
        image1.style.display = "block";
    }
    function image2fans(){
        image2.style.display = "block";
    }   
    function image3fans(){
        image3.style.display = "block";
    }
    function image4fans(){
        image4.style.display = "block";
    }
    function image5fans(){
        image5.style.display = "block";
    }
    function image6fans(){
        image6.style.display = "block";
    }
    function image7fans(){
        image7.style.display = "block";
    }
    function image8fans(){
        image8.style.display = "block";
    }
    function image9fans(){
        image9.style.display = "block";
    }

function imageShow() { 
    setTimeout("image9fans()", 1000);
    setTimeout("image7fans()", 3000);
    setTimeout("image5fans()", 5000);
    setTimeout("image3fans()", 7000);
    setTimeout("image1fans()", 9000);
    setTimeout("image8fans()", 11000);
    setTimeout("image6fans()", 13000);
    setTimeout("image4fans()", 15000);
    setTimeout("image2fans()", 17000);
}
document.getElementById("bgAudio").volume = 0.2;

