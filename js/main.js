$(document).ready(function(){
    var ai = document.getElementById('home-ai');
    var typewriter = new Typewriter(ai, {
        loop: true,
        delay: 75,
      });

      typewriter
      .typeString('Artificial Intelligence')
      .pauseFor(1000) 
      .deleteChars(24)
      .typeString("Automation")
      .pauseFor(1000) 
      .deleteChars(11)
      .typeString("Data Modernization")
      .pauseFor(1000) 
      .deleteChars(20)
      .start();
});

function openTab(btnName, seviceid){
    for(var i=1; i<=4; i++){
        var id = "s" + i;
        var service = document.getElementById(id);
        service.style.transform = "translateX(100%)";
        $("#btn-s" + i).removeClass("btn-tab")
    }
    var showSer = document.getElementById(seviceid);
    showSer.style.transform = "translateX(0)";
    var showBtn =document.getElementById(btnName);
    $("#"+btnName).addClass("btn-tab");
}