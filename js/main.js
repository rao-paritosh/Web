// Wait Until Website Loads

document.addEventListener("DOMContentLoaded", () => {

    console.log("StudyHub Loaded Successfully");

});

// Mobile Navigation

const menu = document.querySelector(".hamburger");

const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});
