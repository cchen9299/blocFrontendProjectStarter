var itemCount = 0;

var updateItemNumber = function(){
    itemCount ++;
    if(itemCount >= 1){
        $('.numberItems').replaceWith("<h6 class='numberItems'>" + itemCount + "</h6>")
        $('.numberItems').css('display','inherit');
    }
}

$(document).ready(function(){
    $('.toCartButton').click(updateItemNumber);
    $('.ion-ios-cart').click(cartDropIt);
});