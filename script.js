// Created by: Diego
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function ageLimit() {

  // get user input and declare it as a variable for their age
  let userAge = document.getElementById("age").value;

  // Check if user input is empty
  if(userAge === "") {
    document.getElementById("user-info").innerHTML = "Please enter your age.";
    return;
  }

  // if statement to see if user age is above certain age limits for different movie ratings
  if (userAge >= 100) {
    document.getElementById("user-info").innerHTML = "Damn,I hope this is not the last time you watch Deadpool.";
  } 
  else if (userAge >= 17) {
    document.getElementById("user-info").innerHTML = "You can see an R rated movie alone.Have Fun!";
  } 
  else if (userAge >= 13) {
    document.getElementById("user-info").innerHTML = "You can see a PG-13 rated movie alone.Soon you be able to see Deadpool";
  } 
  else if (userAge >= 5) {
    document.getElementById("user-info").innerHTML = "You can see a G or PG rated movie alone.Just pay your 18year old brother to wach Deadpool with you";
  } 

  else {
    document.getElementById("user-info").innerHTML = "You are so young that to watch a movie you need a pernet, might aswel watch Deadpool";
  }
 // adds another message at the end of each message.
 document.getElementById("user-info").innerHTML = document.getElementById("user-info").innerHTML + "<br><br>Thanks for verifying your age!";
}
