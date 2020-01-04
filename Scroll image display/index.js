function debounce(func, wait = 20, immediate = true){
    var timeOut;
    return function(){
        var context = this, args=arguments;
        var later = function(){
            timeOut = null;
            if(!immediate){
                func.apply(context, args);
            }
        }
        var callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}

const sliderImages = document.querySelectorAll('.slider-in');

function checkSlide(e){
    sliderImages.forEach((sliderImage) => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = imageBottom > window.scrollY;)
        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide, 0));