const box = document.getElementById('modal');
const item = document.querySelector('.menu-modal')

box.addEventListener('click', () =>{
    item.classList.toggle('active')
})
