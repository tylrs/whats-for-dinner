/*Grab DOM Elements*/
var foodTypeButton = document.querySelector('#food-type-button');
var cookPot = document.querySelector('#cook-pot');
var form = document.querySelector('form');
var radioButton = document.querySelectorAll('input[name="food"]');
var dishNameSection = document.querySelector('#dish-name-section');
var dishName = document.querySelector('#dish-name');
var seenBeforeMessage = document.querySelector('#seen-before');


/*Add event listeners*/
form.addEventListener('submit', showRandomDish);


/*Global Variables*/
var currentDish;
var oldSides = [];
var oldMainDishes = [];
var oldDesserts = [];
var newDish;


/*Add event handlers*/
function showRandomDish() {
  event.preventDefault();
  console.log(sides.length);
  generateRandomDish();
  console.log(currentDish);
  cookPot.classList.add('hidden');
  dishNameSection.classList.remove('hidden');
  dishName.innerText = `${currentDish}!`;
}

function generateRandomDish() {
  var mealType = chooseArray();
  if (mealType === "sides" && sides.length > 0) {
    newDish = sides.splice([getRandomIndex(sides)], 1);
    if (oldSides.includes(newDish)) {
      generateRandomDish();
    } else {
      seenBeforeMessage.classList.add('hidden');
      currentDish = newDish;
      oldSides.push(newDish);
    }
  } else if (mealType === "sides" && !sides.length) {
    seenBeforeMessage.classList.remove('hidden');
    var originalLength = oldSides.length;
    for (var i = 0; i < originalLength; i ++) {
      var resetDish = oldSides.pop();
      sides.push(resetDish);
    }
  } else if (mealType === "mainDishes" && mainDishes.length > 0) {
    newDish = mainDishes.splice([getRandomIndex(mainDishes)], 1);
    if (oldMainDishes.includes(newDish)) {
      generateRandomDish();
    } else {
      seenBeforeMessage.classList.add('hidden');
      currentDish = newDish;
      oldMainDishes.push(newDish);
    }
  } else if (mealType === "mainDishes" && !mainDishes.length) {
    seenBeforeMessage.classList.remove('hidden');
    var originalLength = oldMainDishes.length;
    for (var i = 0; i < originalLength; i ++) {
      var resetDish = oldMainDishes.pop();
      mainDishes.push(resetDish);
    }
  } else if (mealType === "desserts" && desserts.length > 0) {
    newDish = desserts.splice([getRandomIndex(desserts)], 1);
    if (oldDesserts.includes(newDish)) {
      generateRandomDish();
    } else {
      seenBeforeMessage.classList.add('hidden');
      currentDish = newDish;
      oldDesserts.push(newDish);
    }
  } else if (mealType === "desserts" && !desserts.length) {
    seenBeforeMessage.classList.remove('hidden');
    var originalLength = oldDesserts.length;
    for (var i = 0; i < originalLength; i ++) {
      var resetDish = oldDesserts.pop();
      desserts.push(resetDish);
    }
  }
}

function chooseArray() {
  for (var i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      return radioButton[i].value;
    }
  }
}

/*Other Functions*/
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

/*Data*/
var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];

var mainDishes = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
];
