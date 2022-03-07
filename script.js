let pizzaBtnElement = document.getElementById("pizza-btn");
let saladsBtnElement = document.getElementById("salad-btn");
let starterBtnElement = document.getElementById("starter-btn");
//selecet the product1-ingredeients and product1-price
let product1NameElement = document.getElementById("product1-name");
let product1IngredeantsElement = document.getElementById(
  "product1-ingredients"
);
let product1PriceElement = document.getElementById("product1-price");

let product2NameElement = document.getElementById("product2-name");
let product2IngredeantsElement = document.getElementById(
  "product2-ingredients"
);
let product2PriceElement = document.getElementById("product2-price");

let product3NameElement = document.getElementById("product3-name");
let product4IngredeantsElement = document.getElementById(
  "product3-ingredients"
);
let product3PriceElement = document.getElementById("product3-price");
//select the other products

function onPizzaClick() {
  //Make the background of every button black
  pizzaBtnElement.style.backgroundColor = "black";
  saladsBtnElement.style.backgroundColor = "black";
  starterBtnElement.style.backgroundColor = "black";

  pizzaBtnElement.style.backgroundColor = "red";

  product1NameElement.innerText = "Margherita";
  product1IngredeantsElement.innerText =
    "Fresh tomatoes, fresh mozzarella, fresh basil";
  product1PriceElement.innerText = "12.50$";

  product2NameElement.innerText = "Formaggio";
  product2IngredeantsElement.innerText =
    "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)";
  product2PriceElement.innerText = "15.50$";

  product3NameElement.innerText = "Pineapple'o'clock";
  product3IngredeantsElement.innerText =
    "Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil";
  product3PriceElement.innerText = "16.50$";
}

function onSaladClick() {
  //Make the background of every button black
  pizzaBtnElement.style.backgroundColor = "black";
  saladsBtnElement.style.backgroundColor = "black";
  starterBtnElement.style.backgroundColor = "black";

  //Make the salad button red
  saladsBtnElement.style.backgroundColor = "red";
  //change the product1-ingredeient and product1-price
  product1NameElement.innerText = "Lasagna";
  product1IngredeantsElement.innerText =
    "Special sauce, mozzarella, parmesan, ground beef";
  product1PriceElement.innerText = "13.50$";

  product2NameElement.innerText = "Ravioli";
  product2IngredeantsElement.innerText = "Ravioli filled with cheese";
  product2PriceElement.innerText = "14.50$";

  product3NameElement.innerText = "Spaghetti Classica";
  product3IngredeantsElement.innerText = "Fresh tomatoes, onions, ground beef";
  product3PriceElement.innerText = "11.00$";
}

function onStarterClick() {
  //Make the background of every button black
  pizzaBtnElement.style.backgroundColor = "black";
  saladsBtnElement.style.backgroundColor = "black";
  starterBtnElement.style.backgroundColor = "black";

  starterBtnElement.style.backgroundColor = "red";

  product1NameElement.innerText = "Today's Soup ";
  product1IngredeantsElement.innerText = "Ask the waiter";
  product1PriceElement.innerText = "5.50$";

  product2NameElement.innerText = "Bruschetta";
  product2IngredeantsElement.innerText =
    "Bread with pesto, tomatoes, onion, garlic";
  product2PriceElement.innerText = "8.50$";

  product3NameElement.innerText = "Garlic bread";
  product3IngredeantsElement.innerText =
    "Grilled ciabatta, garlic butter, onions";
  product3PriceElement.innerText = "9.50$";
}
