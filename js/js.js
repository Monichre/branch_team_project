//business
var cost = 10;
var totalCost = 0;
var myPizza = {
  topping: [],
  crust: [],
  sauce: [],
  amount: [],
}
var options = {
  toppings: ["pepperoni", "chicken", "bacon", "mushrooms", "olives", "onions", "peppers", "soylentGreen"],
  crusts: ["regular", "thin", "deep", "squarePan"],
  sauces: ["pizzaSauce", "garlicWhite", "bbq", "marinara"],
  amounts: ["small", "medium", "large", "absurd"],
}
function pizzaValidate(){
  if((myPizza.crust.length === 0)||(myPizza.sauce.length === 0)||(myPizza.amount.length === 0)){
    return alert("Please select your desired crust, size, and sauce before proceeding.");
  }
  else {
    pizzaPay();
  }
}

function pizzaPay(){
  console.log(cost);
  cost = cost + (myPizza.topping.length);
  console.log(cost);
  if(myPizza.crust !== options.crusts[0]){
    cost = cost + 2;
  }console.log(cost);
  if(myPizza.amount[0] === options.amounts[0]){
    cost = cost;
  }console.log(cost);
  if(myPizza.amount[0] === options.amounts[1]){
    cost = cost + 3;
  }console.log(cost);
  if(myPizza.amount[0] === options.amounts[2]){
    cost = cost + 6;
  }console.log(cost);
  if(myPizza.amount[0] === options.amounts[3]){
    cost = cost * 2;
  }console.log(cost);
  totalCost = cost;
}

//user
$(document).ready(function(){

  var sizeSelector = 0;
  var toppingSelector = 0;
  var sauceSelector = 0;
  var crustSelector = 0;

  $('div.pizzaButton').click(function(event){
    $(this).addClass('selected');
  });

  $('div.premadeCrustSelector').click(function(event){
    crustSelector = parseInt($(this).attr('value'));
    console.log("crustSelector: " + crustSelector);
    (myPizza.crust).push(options.crusts[crustSelector]);
    console.log(myPizza)
  });
  $('div.premadeSauceSelector').click(function(event){
    sauceSelector = parseInt($(this).attr('value'));
    console.log("sauceSelector: " + sauceSelector);
    (myPizza.sauce).push(options.sauces[sauceSelector]);
    console.log(myPizza);
  });
  $('div.premadeToppingSelector').click(function(event){
    toppingSelector = parseInt($(this).attr('value'));
    console.log("toppingSelector: " + toppingSelector);
    (myPizza.topping).push(options.toppings[toppingSelector]);
    console.log(myPizza);
  });
  $('div.premadeSizeSelector').click(function(event){
    sizeSelector = parseInt($(this).attr('value'));
    console.log("sizeSelector: " + sizeSelector);
    (myPizza.amount).push(options.amounts[sizeSelector]);
    console.log(myPizza);
  });
  $('button#checkout').click(function(event){
    console.log(totalCost);
    pizzaValidate();
    console.log(totalCost);
    $('span#finalCost').text("$" + totalCost + ".00");
    myPizza = {topping: [], crust: [], sauce: [], amount: []}
    cost = 20;
    totalCost = 0;
  });
  $('button#reset').click(function(event){
    $('div#pizzaButton').removeClass('selected');
    myPizza = {topping: [], crust: [], sauce: [], amount: []}
    cost = 20;
    totalCost = 0;
  });

});
