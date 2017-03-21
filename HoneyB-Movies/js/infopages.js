/*
callMovieX() functions open information pages for each of the moveis listed on movies.html
*/

function callMovie1(){
    window.open("infopages/clerks.html", "", "width=1400px, height=750px");
}

function callMovie2(){
    window.open("infopages/lebowski.html", "", "width=1400px, height=750px");
}

function callMovie3(){
    window.open("infopages/buried.html", "", "width=1400px, height=750px");
}

function callMovie4(){
    window.open("infopages/tuckeranddale.html", "", "width=1400px, height=750px");
}

function callMovie5(){
    window.open("infopages/beneath_the_sea.html", "", "width=1400px, height=750px");
}

function callMovie6(){
    window.open("infopages/army_of_darkness.html", "", "width=1400px, height=750px");
}

function callMovie7(){
    window.open("infopages/piranha.html", "", "width=1400px, height=750px");
}

function callMovie8(){
    window.open("infopages/mantis.html", "", "width=1400px, height=750px");
}

function callMovie9(){
    window.open("infopages/bloodsport.html", "", "width=1400px, height=750px");
}

function callMovie10(){
    window.open("infopages/cyborgcop.html", "", "width=1400px, height=750px");
}

function callMovie11(){
    window.open("infopages/enter_the_ninja.html", "", "width=1400px, height=750px");
}

function callMovie12(){
    window.open("infopages/machete.html", "", "width=1400px, height=750px");
}

function openInParent(url){
    /*Opens rentform.html in parent window and closes popup*/
    window.opener.location.href=url;
    window.close();
}
