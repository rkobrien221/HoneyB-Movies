var curSlide = 0; //tracks the current slide

//Array of images that pass through the slideshow
var slideImages = ["images/army_of_darkness/scene.jpg",
                   "images/beneath_the_sea/scene.jpg",
                   "images/mantis/scene.jpg",
                   "images/buried/scene.jpg",
                   "images/tuckeranddale/scene.jpg"];

var slideTitles = ["Army of Darkness",
                   "It Came From Beneath the Sea",
                   "The Deadly Mantis",
                   "Buried",
                   "Tucker and Dale vs Evil"]

function changeSlide() {
    if (curSlide < 5) {
        document.images[1].src = slideImages[curSlide];
        document.getElementById('slidetitle').innerHTML = slideTitles[curSlide];
        ++curSlide;
    }
    
    
    if (curSlide == 5) {
        curSlide = 0;
    }
}

var scenes =[null,
             "images/clerks/scene.jpg",
             "images/lebowski/scene.jpg",
             "images/buried/scene.jpg",
             "images/tuckeranddale/scene.jpg",
             "images/beneath_the_sea/scene.jpg",
             "images/army_of_darkness/scene.jpg",
             "images/piranha/scene.jpg",
             "images/mantis/scene.jpg",
             "images/bloodsport/scene.jpg",
             "images/cyborgcop/scene.jpg",
             "images/enter_the_ninja/scene.jpg",
             "images/machete/scene.jpg"];

var posters = [null,
               "images/clerks/poster.jpg",
                "images/lebowski/poster.jpg",
                "images/buried/poster.jpg",
                "images/tuckeranddale/poster.jpg",
                "images/beneath_the_sea/poster.jpg",
                "images/army_of_darkness/poster.jpg",
                "images/piranha/poster.jpg",
                "images/mantis/poster.jpg",
                "images/bloodsport/poster.jpg",
                "images/cyborgcop/poster.jpg",
                "images/enter_the_ninja/poster.jpg",
                "images/machete/poster.jpg"];


function newImage(position){
    document.images[position].src = scenes[position];
}

function oldImage(position){
    document.images[position].src = posters[position];
}

function thankyou(){
    window.open("thanks.html")
}
