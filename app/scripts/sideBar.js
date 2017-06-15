/*----------- Side Bar ------------*/
var sideBarToggle = 0;
var sideBarSlide = function(){
    if(sideBarToggle === 0){
        $('#sideBar').css('left','00px');
        sideBarToggle = 1;
    }
    else{
        $('#sideBar').css('left','-200px');
        sideBarToggle = 0;
    }
}
var sideBarSlide2 = function(){
    if(sideBarToggle === 1){
        $('#sideBar').css('left','00px');
        sideBarToggle = 0;
    }
}
$(document).ready(function(){
    $('.ion-navicon').click(sideBarSlide);
    $('.body').click(sideBarSlide2);
});