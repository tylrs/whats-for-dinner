/*Grab DOM Elements*/
var foodTypeButton = document.querySelector('#food-type-button');
var cookPot = document.querySelector('section image');
var form = document.querySelector('form');
var radioButton = document.querySelectorAll('input[name="food"]');
console.log(radioButton[0].checked);


/*Add event listeners*/
form.addEventListener('submit', generateRandomDish);
//when button is clicked, iterate through data until you find button that
//has been checked

//retrieve that string value from that array index
//I have the name of the array I want to iterate through randomly
//I could put all of the food in an object, then it would be easy to use
//that string to select the array I want to iterate through

//you could also check the value of the string save it as a variable and
//if string === sides, then iterate through this array
//and so on for each array
//then return interpolated string with random food chosen



/*Add event handlers*/
function chooseArray() {
  for (var i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      return radioButton[i].value;
    }
  }
}

function showRandomDish() {
  // generateRandomDish();
  // displayRandomDish();
  
}

function generateRandomDish() {
  var mealType = chooseArray();
  if (mealType === "sides") {
    randomDish = sides[getRandomIndex(sides)];
    console.log(randomDish);
  } else if (mealType === "mainDishes") {
    randomDish = mainDishes[getRandomIndex(mainDishes)];
    console.log(randomDish);
  } else if (mealType === "desserts") {
    randomDish = desserts[getRandomIndex(desserts)];
    console.log(randomDish);
  } else {
    console.log("Hello");
  }
  event.preventDefault();
}

/*Global Variables*/
var randomDish;

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
