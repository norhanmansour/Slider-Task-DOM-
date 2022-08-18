var imgs = Array.from(document.querySelectorAll('.item-container .img-fluid'));
var lightBoxContainer = document.querySelector('.lightBoxContainer')
var closeSlide = document.getElementById('close');
var nextSlide = document.getElementById('next');
var prevSlide = document.getElementById('prev');
var sliderImg = document.querySelector('.lightBoxItem')
var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function(e) {
        currentIndex = imgs.indexOf(e.target)
        var currentSrc = e.target.src;
        sliderImg.style.backgroundImage = `url(${currentSrc})`
        lightBoxContainer.style.cssText = 'display:flex';
    })
}
closeSlide.addEventListener('click', closeSlider);

function closeSlider() {
    lightBoxContainer.style.cssText = 'display:none ';
}


nextSlide.addEventListener('click', nextSlider)

function nextSlider() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var currentSrc = imgs[currentIndex].src;
    sliderImg.style.backgroundImage = `url(${currentSrc})`
}

prevSlide.addEventListener('click', prevSlider)

function prevSlider() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var currentSrc = imgs[currentIndex].src;
    sliderImg.style.backgroundImage = `url(${currentSrc})`

}
document.addEventListener('keyup', function(e) {
    console.log(e)
    if (e.key == 'ArrowRight') {
        nextSlider()
    } else if (e.key == 'ArrowLeft') {
        prevSlider()
    } else if (e.key == 'Escape') {
        closeSlider()
    }
})

lightBoxContainer.addEventListener('click', function(e) {
    console.log(e);
})