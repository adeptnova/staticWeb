$(document).ready(function(){
   
});

function openTab(btnName, seviceid){
    for(var i=1; i<=2; i++){
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