const user = document.getElementById("users");
const price = document.getElementById("price");
const range = document.getElementById("range");

const defaultprice =4.99;
var users = user.value;


range.addEventListener('change',function(){
    var  price1 = defaultprice*range.value;
    var total = Math.round(price1 * 100 ) / 100;
    price.innerHTML=total;
    user.innerHTML=range.value


})


user.addEventListener("input",function(){

   var  price1 = defaultprice*user.value;
    var total = Math.round(price1 * 100 ) / 100;
    price.innerHTML=total;

})