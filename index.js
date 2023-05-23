const modal = document.querySelector(".modall");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modall .close-btn");
const discountBtn = document.querySelector(".modall .discount-btn");

const createCookie = () => {
  let maxAge = ";max-age=10";
  let path = ";path=/";
  document.cookie = "live-blogger-popup=displayed" + maxAge + path;
};

const displayModal = () => {
  if (document.cookie.indexOf("live-blogger-popup") == -1) {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
    createCookie();
  }
};

setTimeout(() => {
  displayModal();
}, 2000);

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

discountBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

$(document).ready(function(){
    $('.con-btn').click(function(){ 
      var popupBlock = $('#'+$(this).data('popup'));
      popupBlock.addClass('active')
        .find('.fade-out').click(function(){
          popupBlock.css('opacity','0').find('.popup-content').css('margin-top','350px');        
          setTimeout(function(){
            $('.popup').removeClass('active');
            popupBlock.css('opacity','').find('.popup-content').css('margin-top','');
          }, 600);
        });
   });
  });


$(".place-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
  });