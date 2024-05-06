// Created by: Diego
// Created on: april 2024
// This file contains the JS functions for index.html

//Elements
// Dropdown Menus
const sizesElement = document.getElementById('Sizes');
const flavorsElement = document.getElementById('flavors');

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
  let flavor = flavorsElement.value;

  if (size == "option1") {
    resultDiv.innerText = "Please Chose a Size!";
    return;
  }
  if (flavor == "option1") {
    resultDiv.innerText = "Please Chose a Flavor! Water is free.";
    return;
  }
  
  let sizeCost = sizeCosts[size];
  let flavorCost = 0;

  let subtotal = 0;
  subtotal += sizeCost;
  subtotal += flavorCost;

  if (extraBobaElement.checked) {
    subtotal += 1.00;
  }
  if (godlyAmountOfBobaElement.checked) {
    subtotal += 2.00;
  }
  if (leacheJellyElement.checked) {
    subtotal += 1.00;
  }
  if (coconutJellyElement.checked) {
    subtotal += 1.00;
  }
  if (magicalGummiesElement.checked) {
    subtotal += 1.00;
  }

  const HST = 0.13;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  resultDiv.innerHTML = 
    `You ordered a ${size} ${flavor} bubble tea! Thank you for ordering! <br>
    Subtotal : ${subtotal} <br>
    Tax : ${tax} <br>
    Total : ${total}`;
}