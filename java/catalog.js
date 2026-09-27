const menuButton = document.getElementById("menuButton");

const nav = document.getElementById("nav1");

menuButton.onclick = function() {

    nav.classList.toggle("open");

};


const featuredContainer = document.querySelector(".featured-container");

const featuredLeft = document.getElementById("featuredLeft");

const featuredRight = document.getElementById("featuredRight");

const featuredScrollAmount = 420;


featuredLeft.addEventListener("click", () => {

    featuredContainer.scrollBy({

        left: -featuredScrollAmount,

        behavior: "smooth"

    });

});


featuredRight.addEventListener("click", () => {

    featuredContainer.scrollBy({

        left: featuredScrollAmount,

        behavior: "smooth"

    });

});
