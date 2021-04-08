/*Grab DOM Elements*/
var foodTypeButton = document.querySelector('#food-type-button');
var cookPot = document.querySelector('#cook-pot');
var form = document.querySelector('form');
var radioButton = document.querySelectorAll('input[name="food"]');
var dishNameSection = document.querySelector('#dish-name-section');
var dishName = document.querySelector('#dish-name');


/*Add event listeners*/
form.addEventListener('submit', showRandomDish);


/*Global Variables*/
var randomDish;


/*Add event handlers*/
function showRandomDish() {
  event.preventDefault();
  generateRandomDish();
  cookPot.classList.add('hidden');
  dishNameSection.classList.remove('hidden');
  dishName.innerText = `${randomDish}!`;
}

function generateRandomDish() {
  var mealType = chooseArray();
  if (mealType === "sides") {
    randomDish = sides[getRandomIndex(sides)];
    return randomDish
  } else if (mealType === "mainDishes") {
    randomDish = mainDishes[getRandomIndex(mainDishes)];
    console.log(randomDish);
  } else if (mealType === "desserts") {
    randomDish = desserts[getRandomIndex(desserts)];
    console.log(randomDish);
  } else {
    console.log("Hello");
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
