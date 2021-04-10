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
var sidesShown = [];
var mainDishesShown = [];
var dessertsShown = [];


/*Add event handlers*/
function showRandomDish() {
  event.preventDefault();
  generateRandomDish();
  console.log(currentDish);
  cookPot.classList.add('hidden');
  dishNameSection.classList.remove('hidden');
  dishName.innerText = `${currentDish}!`;
}

function generateRandomDish() {
  var recipeTypeName = chooseArray();
  var recipeType = window[recipeTypeName];
  var recipeTypeShown = window[`${recipeTypeName}Shown`];

  if (recipeType.length > 0) {
    currentDish = recipeType.splice([getRandomIndex(recipeType)], 1);
    seenBeforeMessage.classList.add('hidden');
    recipeTypeShown.push(currentDish);
  } else if (!recipeType.length) {
    seenBeforeMessage.classList.remove('hidden');
    var originalLength = recipeTypeShown.length;
    for (var i = 0; i < originalLength; i ++) {
      recipeType.push(recipeTypeShown.pop());
    };
  };
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
