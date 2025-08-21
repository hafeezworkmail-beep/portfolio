const openBtns = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");

// loop through all buttons
openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modalOverlay.classList.add("active");

        // if each button should open a different video
        const videoSrc = btn.getAttribute("data-video"); // get video from data attr
        const video = modalOverlay.querySelector("video");
        if (videoSrc) {
            video.src = videoSrc;
            video.play();
        }
    });
});

closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");

    // stop video on close
    const video = modalOverlay.querySelector("video");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");

        // stop video on click outside
        const video = modalOverlay.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
});

// header sticky start
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// header sticky end

// toggle start

$(".navbar-toggle").click(function () {
    $(this).toggleClass("active");
    $(".main-menu").slideToggle();
})
//tabs

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = tab.dataset.tab;

        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        contents.forEach((content) => {
            content.classList.toggle("active", content.id === target);
        });
    });
});
//tabs

// contineus slider

document.querySelectorAll('.marquee').forEach((marquee) => {
    const root = document.documentElement;
    const displayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const content = marquee.querySelector(".marquee-content");

    root.style.setProperty("--marquee-elements", content.children.length);

    for (let i = 0; i < displayed; i++) {
        content.appendChild(content.children[i].cloneNode(true));
    }
});

// continues  slider

//letters changing


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

//letters changing

//loader-animation

$(window).on("load", function () {
    $(".loader").fadeOut("slow");
});

window.addEventListener('loader', function () {
    // Hide loader
    document.getElementById('loader').style.display = 'none';

    // Show content
    document.querySelector('.page-content').style.visibility = 'visible';

    // Enable scroll
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
});
//loader-animation

//counting-animation
const counterAnimation = (el, initialNum, finalNum) => {
    if (Number.isInteger(finalNum)) {
        let interval = setInterval(function () {
            el.innerHTML = initialNum;
            (initialNum >= finalNum) ? clearInterval(interval) : '';
            initialNum++;
        }, 150);
    }
    else {
        let intInitialNum = Math.floor(initialNum);
        let intFinalNum = Math.floor(finalNum);
        let interval = setInterval(function () {
            el.innerHTML = intInitialNum;
            if (intInitialNum >= intFinalNum) {
                clearInterval(interval);
                el.innerHTML = `${finalNum.toString().replace('.', ',')}`;
            }
            intInitialNum++;
        }, 50);
    }
}

counterAnimation(document.querySelector('#foo'), 0, 13);
counterAnimation(document.querySelector('#bar'), 0, 8);
counterAnimation(document.querySelector('#satisfied'), 0, 99);
//counting-animation

//mouse animation

const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        if (item.dataset.cursor === "pointer") {
            cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
            cursorBorder.style.setProperty("--size", "30px");
        }
        if (item.dataset.cursor === "pointer2") {
            cursorBorder.style.backgroundColor = "white";
            cursorBorder.style.mixBlendMode = "difference";
            cursorBorder.style.setProperty("--size", "80px");
        }
    });
    item.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
    });
});

// mouse  animation


// smooth scroller start

const lenis = new Lenis({
    duration: 1.7, // gives enough time to decelerate
    easing: (t) => 1 - Math.pow(1 - t, 4), // quartic ease-out, strong braking
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// smooth scroller end

// slick-slider start


$('.boxes').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }
    ]
});

// slick-slider start

//video pop up start

jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}


$(document).ready(function () {

    $(".video").css({
        "width": $("#player").css("width"),
        "height": $("#player").css("height")
    });

    $(".button").click(function () {
        $(".video-wrapper").fadeIn('fast', function () {
            $(".video").fadeIn();
            $(".video").center();
        });

    });

    $(".video-wrapper").click(function (e) {
        if ($(e.target).is(".video-wrapper")) {
            $(".video").fadeOut(function () {
                $(".video-wrapper").fadeOut(function () {
                    $(".video, .video-wrapper").css({ 'display': 'none' });
                    var src = $("#player").attr("src");
                    $("#player").attr("src", "");
                    $("#player").attr("src", src);
                });
            });
        }
    });
    $(".video-wrapper").fadeIn('fast', function () {
        $(".video").fadeIn();
        $(".video").center();
    });

    $(document).keyup(function (e) {
        var isShown = $(".video-wrapper").css("display");

        if (isShown !== "none" && e.which == 27) {
            $(".video-wrapper").click();
        }

    });

});

var splide = new Splide(".splide", {
    perPage: 3,
    gap: "2rem",
    breakpoints: {
        640: {
            perPage: 2,
            gap: ".7rem",
            height: "6rem"
        },
        480: {
            perPage: 1,
            gap: ".7rem",
            height: "6rem"
        }
    }
});

splide.mount();


// video pop up end

// scroll trigger start
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel");
    let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

    panels.forEach((panel) => {
        ScrollTrigger.create({
            trigger: panel,
            start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
            pin: true,
            pinSpacing: false
        });
    });

    ScrollTrigger.create({
        snap: {
            snapTo: (progress, self) => {
                let panelStarts = tops.map(st => st.start);
                let snapScroll = gsap.utils.snap(panelStarts, self.scroll());
                return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
            },
            duration: 0.5
        }
    });
});
// scroll trigger end