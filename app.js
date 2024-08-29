// Infinite Scroller
// If user has set prefers-reduced-motion to true, we will use flex wrap. Else, we will apply this animation
function scroll() {
    const scrollers = document.querySelectorAll(".scroller");

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach(scroller => {
            scroller.setAttribute('data-animated', true);

            const scrollerInner = scroller.querySelector(".scroll-items");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        })
    }
}

scroll();

// Text Animation
const items = document.querySelectorAll('.hidden-text');
const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const run = () =>
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// Hamburger
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
hamburger.addEventListener('click', (e)=> {
    e.currentTarget.classList.toggle('cross');
    body.classList.toggle('no-scroll');
})


// features slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// form validation
// We will validate username is only numbers and a-z/A-Z
// For passwords, minimum characters should be 8
// For message, we will simply use alert

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    var allValid = true;
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if(!alphanumericRegex.test(usernameValue)) {
        console.log("Regex test: " +alphanumericRegex.test(usernameValue));
        allValid = false;
        alert("Username can only be alphanumeric value");
    } else {
        console.log("Regex test: " +alphanumericRegex.test(usernameValue));
    }

    if (passwordValue.length < 8 ) {
        allValid = false;
        alert('Password must be at least 8 character.')
    }

    if(allValid) {
        console.log("Form valid")
        form.reset();
    } else {
        console.log("Form not valid")
    }

    return allValid;

};
