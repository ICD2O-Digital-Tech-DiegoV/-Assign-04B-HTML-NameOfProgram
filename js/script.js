// Created by: Diego
// Created on: april 2024
// This file contains the JS functions for index.html

//Elements
// Dropdown Menu
const sizesElement = document.getElementById('Sizes');

// Check box elemnts
const extraBobaElement = document.getElementById('Extra Boba');
const godlyAmountOfBobaElement = document.getElementById('Godly amount of Boba');
const leacheJellyElement = document.getElementById('Leache jelly');
const coconutJellyElement = document.getElementById('Coconut jelly');
const magicalGummiesElement = document.getElementById('Majical gummies');

//Result Display
const resultDiv = document.getElementById('results');


// Costs for sizes
let sizeCosts = {
  "Small": 6.00,
  "Medium": 8.00,
  "Large": 10.00,
  "Xlarge": 12.00
}

function order() {
  let size = sizesElement.value;
  let flavorInput = document.querySelector('input[name="options"]:checked')

  if (size == "option1") {
    resultDiv.innerText = "Please Chose a Size!";
    return;
  }
  if (flavorInput == null) {
    resultDiv.innerText = "Please Chose a Flavor!";
    return;
  }
  let flavor = flavorInput.value;
  
  
  let sizeCost = sizeCosts[size];
  let flavorCost = 0;

  let subtotal = 0;
  subtotal += sizeCost;
  subtotal += flavorCost;

  let extra_message = ""
  if (extraBobaElement.checked) {
    subtotal += 1.00;
    if (extra_message != "") {
      extra_message += ", "
    }
    extra_message += "Extra Boba"
  }
  if (godlyAmountOfBobaElement.checked) {
    subtotal += 2.00;
    if (extra_message != "") {
      extra_message += ", "
    }
    extra_message += "Godly Amount of Boba"
  }
  if (leacheJellyElement.checked) {
    subtotal += 1.00;
    if (extra_message != "") {
      extra_message += ", "
    }
    extra_message += "Lychee Jelly"
  }
  if (coconutJellyElement.checked) {
    subtotal += 1.00;
    if (extra_message != "") {
      extra_message += ", "
    }
    extra_message += "Coconut Jelly"
  }
  if (magicalGummiesElement.checked) {
    subtotal += 1.00;
    if (extra_message != "") {
      extra_message += ", "
    }
    extra_message += "Magical Gummies"
  }
  if (extra_message != "") {
    extra_message = "with " + extra_message;
  }

  const HST = 0.13;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  resultDiv.innerHTML = 
    `You ordered a ${size} ${flavor} bubble tea ${extra_message}! Thank you for ordering! <br>
    Subtotal : $${subtotal} <br>
    Tax : $${tax.toFixed(2)} <br>
    Total : $${total.toFixed(2)}`;
}