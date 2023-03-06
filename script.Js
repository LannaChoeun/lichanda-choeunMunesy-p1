window.onload = function(){
var user = 'Lanna';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the top 5 best songs of March 2023.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;



}