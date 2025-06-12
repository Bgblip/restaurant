
$(document).ready(function () {
    $('.reviewsComents').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        centerMode: true,
        variableWidth: true,
        arrows: false

    });
});



function showContent() { 

    closeTabs()

    let btn = event.target
    let dataContent = btn.getAttribute('data-content')
    let content = document.getElementById(dataContent)
    content.style.display = 'block' 
}

function closeTabs() {
    let contents = document.querySelectorAll('.content .categories')
    for (let i = 0; i < contents.length; i++) {
        let content = contents[i]
        content.style.display = 'none'
     }
}