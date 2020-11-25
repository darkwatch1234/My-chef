const button = document.querySelector('#gat');
const container = document.querySelector('.container')
button.addEventListener('click', hide);
function hide(e) {

    container.style.display = 'none'
}

