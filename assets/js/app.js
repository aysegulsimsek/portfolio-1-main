// ====================SHOW SIDEBAR==============//

const navMenu = document.getElementById("sidebar"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
// ======== SIDEBAR SHOW==============//
/*Validate If Constant Exists*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-sidebar");
    });
}
// ======== SIDEBAR Hıdden==============//
/*Validate If Constant Exists*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-sidebar");
    });
}

// ======== skills tabs==============//
const tabs = document.querySelectorAll("[data-target"),
    tabContent = document.querySelectorAll("[data-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach((tabContents) => {
            tabContents.classList.remove("skills__active");
        });

        target.classList.add("skills__active");

        tabs.forEach((tab) => {
            tab.classList.remove("skills__active");
        });

        tab.classList.add("skills__active");
    });
});

// ======== Mıxıt up Filter Portfolıo==============//
let mixerPortfolio = mixitup(".work__container", {
    selectors: {
        target: ".work__card",
    },
    animation: {
        duration: 300,
    },
});
// ======== Link Active Work==============//
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
    linkWork.forEach((l) => l.classList.remove("active-work"));
    this.classList.add("active-work");
}
linkWork.forEach((l) => l.addEventListener("click", activeWork));
// ======== Work Popup==============//
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document
    .querySelector(".portfolio__popup-close")
    .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src =
        portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML =
        portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML =
        portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// ====================SERVİCES MODAL==============//
const modalViews = document.querySelectorAll(".services__modal"),
    modelBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");
let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener("click", () => {
        modal(i);
    });
});
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});
// ====================SWIPER TESTIMONIAL==============//
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});
//=======INPUT ANİMATION=======//
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

var menuItems = document.querySelectorAll('.nav__menu a[href^="#"]');

menuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        menuItems.forEach(function(item) {
            item.classList.remove("active-link");
        });
        this.classList.add("active-link");
        var targetId = this.getAttribute("href").slice(1);
        var targetSection = document.getElementById(targetId);
        var offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    });
});

window.addEventListener("scroll", function() {
    var scrollY = window.scrollY;
    menuItems.forEach(function(item) {
        var targetId = item.getAttribute("href").slice(1);
        var targetSection = document.getElementById(targetId);
        var sectionTop = targetSection.offsetTop;
        var sectionHeight = targetSection.offsetHeight;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuItems.forEach(function(item) {
                item.classList.remove("active-link");
            });
            item.classList.add("active-link");
        }
    });
});

// ====================Email service section==============//

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("J1qDxZzas-tKyWSfp"); // User ID

    var submitBtn = document.getElementById("submit-btn");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (submitBtn && username && email && message) {
        submitBtn.addEventListener("click", function(event) {
            event.preventDefault();

            var templateParams = {
                username: username.value,
                email: email.value,
                message: message.value,
            };

            emailjs.send("service_x3jt1ea", "template_x3uxr17", templateParams).then(
                function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Your message has been sent successfully!");

                    // clear the form elements
                    username.value = "";
                    email.value = "";
                    message.value = "";
                },
                function(error) {
                    console.log("FAILED...", error);
                    alert("Failed to send your message. Please try again later.");
                }
            );
        });
    } else {
        console.error("One or more form elements not found.");
    }
});