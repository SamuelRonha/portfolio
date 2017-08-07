/**
 * Created by Samuel on 07/08/2017.
 */
$('.skillbar').skillBars({

    // number start
    from: 0,

    // number end
    to: false,

    // animation speed
    speed: 1000,

    // how often the element should be up<a href="http://www.jqueryscript.net/time-clock/">date</a>d
    interval: 100,

    // the number of decimal places to show
    decimals: 0,

    // callback method for every time the element is updated,
    onUpdate: null,

    // callback method for when the element finishes updating
    onComplete: null,

    // CSS classes
    classes: {
        skillBarBar: '.skillbar-bar',
        skillBarPercent: '.skill-bar-percent',
    }

});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html,body').animate({
        scrollTop: $(".navbar-static-top").offset().top
    });
}

function scrollContact() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top
    });
}
function scrollAbout() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top
    });
}
