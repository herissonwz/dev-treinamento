
const burguer = document.querySelector('.burguer');
const nav = document.querySelector('header nav')
const menu = document.querySelectorAll(" .menu a")

function closemenu(){
    nav.classList.remove('active')
}

function toggle(event){
if(event.type === 'touchstart') event.preventDefault();
if(!nav.classList.contains('active')){
    nav.classList.add('active');
}else{
    closemenu();
}

}

burguer.addEventListener('click',toggle);
burguer.addEventListener('touchstart',toggle);


menu.forEach((menu) => menu.addEventListener('click', () => closemenu()));








var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

