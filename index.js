const divs = document.querySelectorAll('div');

function handleClick(e){
    console.log(this.classList.value);
}

divs.forEach((div) => {
    div.addEventListener('click', handleClick, {
        capture: true
    });
})