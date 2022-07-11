$(document).ready(function(){
      // $("#photo-carousel").owlCarousel({
      //     items:1,
      //     loop:true,
      //     nav:true,
      //     navText:["next&#x27","prev&#x27"],
      //     // navText:[&#x27;next&#x27;,&#x27;prev&#x27;],


      // });
    // находим элемент в котором будет инициализированна курусель (записана в переменную)
    const photoCarousel = $("#photo-carousel");
    // console.log(photoCarousel)
  //   // создаём карусель в элементе #photo-carousel
    photoCarousel.owlCarousel ({
      // items: 1,
      loop:true,
      // nav:true,
      navText:false,
      responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          dots:false,
          autoplay:true,
        },
        // breakpoint from 480 up
        900 : {
          items: 1,
          // nav:true,
          // navText:["Prev","Next"],
        },
        // breakpoint from 768 up
        768 : {
          items: 1,
          // dots:false
        }
    }
    });

  // // // находим кнопки назад и вперед
    var btnPrev = $(".nav-btn-left");
    var btnNext = $(".nav-btn-right");
  // console.log(btnPrev)
  // console.log(btnNext)
    btnPrev.click(function() {
    photoCarousel.trigger('prev.owl.carousel')
    });
  
    btnNext.click(function () {
        photoCarousel.trigger('next.owl.carousel');
      });

})

// ВТОРАЯ КАРУСЕЛЬ
$(document).ready(function(){
  // $("#photo-carousel").owlCarousel({
  //     items:1,
  //     loop:true,
  //     nav:true,
  //     navText:["next&#x27","prev&#x27"],
  //     // navText:[&#x27;next&#x27;,&#x27;prev&#x27;],


  // });
// находим элемент в котором будет инициализированна курусель (записана в переменную)
const photoCarousel = $("#pruduct-carousel");
// console.log(photoCarousel)
//   // создаём карусель в элементе #photo-carousel
photoCarousel.owlCarousel ({
  // items: 1,
  loop:true,
  // nav:true,
  navText:false,
  responsive : {
    // breakpoint from 0 up
    0 : {
      items: 1,
      dots:true
    },
    // breakpoint from 480 up
    594 : {
      items: 2,
      dots:false,
      // nav:true,
      // navText:["Prev","Next"],
    },
    // breakpoint from 768 up
    900 : {
      items: 4,
      // dots:false
    }
}
});

// // // находим кнопки назад и вперед
var btnPrev = $(".products-card-btn-left");
var btnNext = $(".products-card-btn-right");
// console.log(btnPrev)
// console.log(btnNext)
btnPrev.click(function() {
photoCarousel.trigger('prev.owl.carousel')
});

btnNext.click(function () {
    photoCarousel.trigger('next.owl.carousel');
  });

})

  // ПОКАЗАТЬ ЕЩЕ КНОПКА

//     var more = document.getElementById("more");
//     console.log(more);
//     var btn = document.getElementById("show-more");
//     console.log(btn);
// btn.onclick = function(){
//   more.classList.toggle("none");
//   btn.classList.toggle("")
// };

// АККОРДЕОН
document.querySelectorAll(`.accordeon`).forEach((el) => {
  el.addEventListener(`click`, () => {
    let content = el.nextElementSibling;
    if(content.style.maxHeight){
document.querySelectorAll(`content`).forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll(`content`).forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + `px`
    }
  })
});

  // КНОПКА НАЛИЧИЕ
  document.querySelectorAll(`.availability__btn`).forEach((el) => {
    el.addEventListener(`click`, () => {
      let availabilityContent = el.nextElementSibling;
      if(availabilityContent.style.maxHeight){
  document.querySelectorAll(`availability__content`).forEach((el) => el.style.maxHeight = null)
      } else {
        document.querySelectorAll(`availability__content`).forEach((el) => el.style.maxHeight = null)
        availabilityContent.style.maxHeight = availabilityContent.scrollHeight + `px`
      }
    })
  });


    // ПОКАЗАТЬ ЕЩЕ КНОПКА В ФИЛЬТРЕ

    let hiddenFilters = document.querySelectorAll(".hidden-filters");
    console.log(hiddenFilters);
    let moreBtn = document.querySelectorAll(".more-btn");
    console.log(moreBtn);
    moreBtn.onclick=function () {
      hiddenFilters.classList.toggle("none");
      hiddenFilters.classList.toggle("");
    };

// КНОПКА МЕНЮ НАВИГАЦИИ
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});











    


