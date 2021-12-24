$(document).ready(function () {
  new WOW().init();
});

/* Specification */

$('[data-fancybox]:not(.slick-cloned)').fancybox();
$('[data-fancybox]').fancybox({
  backFocus: false,
});

$('.input_tel').mask('+7(999) 999-99-99');

$('form').submit(function () {
  $('.overlay_dark').addClass('active');
  $('.modal_appointment').removeClass('active');
  $('.modal-success').addClass('active');
  $('input').val('');
  $('.check-box').prop('checked', false);
  return false;
});

$('form button.btn').click(function () {
  if ($(this).closest('form').find("input[type='checkbox']:checked").length == 0) {
  }
});

$('.your-class').slick({
  dots: true,
});

/* Header */

$('.menu li.menu__services .ref').hover(function () {
  $('.modal_menu').addClass('active');
});

$('.menu li.menu__services .ref').mouseleave(function () {
  $('.modal_menu').removeClass('active');
});

$('.modal_menu').hover(function () {
  $(this).addClass('active');
});

$('.modal_menu').mouseleave(function () {
  $(this).removeClass('active');
});

/* Section-main */

$('.main__slider').slick({
  asNavFor: '.main__gallery-slider',
  infinite: true,
  dots: true,
  arrows: true,
  autoplay: false,
  slidesToShow: 1,
  fade: true,
  prevArrow: '.section-main .controls .slick-prev',
  nextArrow: '.section-main .controls .slick-next',

  responsive: [
    {
      breakpoint: 991,
      settings: {
        adaptiveHeight: true,
      },
    },
  ],
});

$('.main__gallery-slider').slick({
  asNavFor: '.main__slider',
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: false,
  slidesToShow: 1,
  fade: false,
});

/* Section-patients */

$('.patients__slider').slick({
  infinite: true,
  dots: false,
  arrows: true,
  autoplay: false,
  slidesToShow: 4,
  prevArrow: '.patients .controls .slick-prev',
  nextArrow: '.patients .controls .slick-next',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});

/* Section-reviews */

$('.reviews__slider').slick({
  infinite: false,
  dots: true,
  arrows: false,
  autoplay: false,
  slidesToShow: 3,
  prevArrow: '.reviews .controls .slick-prev',
  nextArrow: '.reviews .controls .slick-next',

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true,
      },
    },
  ],
});
$('.reviews__slider_alt').slick({
  infinite: false,
  dots: true,
  arrows: false,
  autoplay: false,
  slidesToShow: 3,
  prevArrow: '.reviews .controls .slick-prev',
  nextArrow: '.reviews .controls .slick-next',

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true,
      },
    },
  ],
});

/* Section-professionals */
$('.professionals__slider').slick({
  infinite: true,
  dots: false,
  arrows: true,
  autoplay: false,
  slidesToShow: 4,
  prevArrow: '.professionals .controls .slick-prev',
  nextArrow: '.professionals .controls .slick-next',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$('.section-professionals_min .professionals__slider').slick('unslick');

/* Section-comfort */

$('#section-comfort .comfort__slider').slick({
  infinite: false,
  dots: true,
  arrows: true,
  autoplay: false,
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  prevArrow: '#section-comfort .comfort .controls .slick-prev',
  nextArrow: '#section-comfort .comfort .controls .slick-next',

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
});

$('#section-cases .comfort__slider').slick({
  infinite: true,
  dots: true,
  arrows: true,
  autoplay: false,
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  prevArrow: '#section-cases .comfort .controls .slick-prev',
  nextArrow: '#section-cases .comfort .controls .slick-next',

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
});

$('#section-certificates .comfort__slider').slick({
  infinite: true,
  dots: true,
  arrows: true,
  autoplay: false,
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  prevArrow: '#section-certificates .comfort .controls .slick-prev',
  nextArrow: '#section-certificates .comfort .controls .slick-next',

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
});

/* Section-equipment */

$('.equipment__items').slick({
  infinite: false,
  dots: true,
  arrows: true,
  autoplay: false,
  slidesToShow: 7,
  slidesToScroll: 3,
  speed: 600,
  prevArrow: '.equipment .controls .slick-prev',
  nextArrow: '.equipment .controls .slick-next',

  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesTslidesToScroll: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesTslidesToScroll: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/* Section-best */

if ($(window).width() < 991) {
  $('.best__items').slick({
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.best .controls .slick-prev',
    nextArrow: '.best .controls .slick-next',

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          dots: true,
        },
      },
    ],
  });
}

/* Section-questions */

$('.question__main').click(function () {
  /*$(this).closest('.questions__items').find('.question').not(this).closest('.question').removeClass("active");*/
  $(this).closest('.question').toggleClass('active');
});

/* Section-pride */

$('.pride__slider').slick({
  infinite: true,
  dots: true,
  arrows: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.pride__media .controls .slick-prev',
  nextArrow: '.pride__media .controls .slick-next',

  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 2,
  //     },
  //   },
  // ],
});

/* Section-changes */

$('.changes__slider').slick({
  infinite: true,
  dots: true,
  arrows: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: '.changes__media .controls .slick-prev',
  nextArrow: '.changes__media .controls .slick-next',

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* Section-cost */

$('.select__main').click(function () {
  $(this).closest('.select').find('.select__list').toggleClass('active');
});

$('.select__list label').click(function () {
  $(this).closest('.select__list').removeClass('active');

  $(this).closest('.select__list').find('label').removeClass('active');
  $(this).addClass('active');
  $(this).closest('.select').find('.select__main span').removeClass('active');
  var selectcurrent = $(this).attr('data-target');
  $(this)
    .closest('.select')
    .find('.select__main span[data-target=' + selectcurrent + ']')
    .addClass('active');
});

$('.cost__main').click(function () {
  $(this).closest('.cost__item').toggleClass('active');
  $(this).find('.ref_more').toggleClass('active');
  $(this).find('.ref_more span').toggleClass('active');
});

/* Section-credit */

$(document).ready(function () {
  var block_pos_03 = $('.credit__image').offset().top;
  // определяем первоначальное положение блока
  var wrap_pos_03 = $('.credit').offset().top;
  // позиция контейнера
  var block_height_03 = $('.credit__image').outerHeight();
  // высота блока
  var wrap_height_03 = $('.credit').outerHeight();
  // высота контейнера
  var pos_absolute_03 = wrap_pos_03 + wrap_height_03 - block_height_03;

  $(window).scroll(function () {
    var wrap_height_03 = $('.credit').outerHeight();
    // высота контейнера
    var pos_absolute_03 = wrap_pos_03 + wrap_height_03 - block_height_03;

    if ($(window).scrollTop() > pos_absolute_03 - 0) {
      // Если страницу прокрутили дальше, чем высота родителя минус высота фикс. блока, то стопорим блок
      $('.credit__image').css({
        position: 'absolute',
        top: 'calc(100% + 25px)',
        transform: 'translateY(-100%)',
      });
    } else if ($(window).scrollTop() > block_pos_03 - 25) {
      // Если страницу прокрутили дальше, чем находится наш блок, то мы этот блок фиксируем и отображаем сверху
      $('.credit__image').css({
        position: 'fixed',
        top: '25px',
        transform: 'translateY(0%)',
      });
    } else {
      // Если же позиция скролла меньше (выше), чем наш блок, то возвращаем все назад
      $('.credit__image').css({
        position: 'absolute',
        top: '0px',
        transform: 'translateY(0%)',
      });
    }
  });
});

/* Section-advantages */

/* Section- */

/* Section- */

/* Footer */

/* Modals + Menu */

$('.overlay').click(function () {
  $(this).removeClass('active');
  $('.modal').removeClass('active');
  $('.body').removeClass('body-fixed');
});

$('.close').click(function () {
  $(this).find('.modal').removeClass('active');
  $('.overlay').removeClass('active');
  $('.modal').removeClass('active');
  $('.body').removeClass('body-fixed');
});
$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    $(this).find('.modal').removeClass('active');
    $('.overlay').removeClass('active');
    $('.modal').removeClass('active');
    $('.body').removeClass('body-fixed');
  }
});

// $('.burger').click(function () {
//   $(this).find('img').toggleClass('active');
//   $('.body').toggleClass('body-fixed');
//   $('.modal_mob-menu').toggleClass('active');
// });

$('.mob-menu ul li').click(function () {
  $('.mob-menu ul li').not(this).removeClass('active');
  $(this).toggleClass('active');
});

$('.modal-call').click(function () {
  $('.overlay_dark').addClass('active');
  $('.modal').removeClass('active');
  $('.body').addClass('body-fixed');
});

$('.modal-call_appointment').click(function () {
  $('.modal_appointment').addClass('active');
});

/* Section-delete */

$(document).ready(function () {
  var block_pos = $('.delete__fixed').offset().top;
  // определяем первоначальное положение блока
  var wrap_pos = $('.delete').offset().top;
  // позиция контейнера
  var block_height = $('.delete__fixed').outerHeight();
  // высота блока
  var wrap_height = $('.delete').outerHeight();
  // высота контейнера
  var block_width = $('.delete').outerWidth();
  var pos_absolute = wrap_pos + wrap_height - block_height;

  function deletefixed() {
    if ($(window).scrollTop() > pos_absolute) {
      // Если страницу прокрутили дальше, чем высота родителя минус высота фикс. блока, то стопорим блок
      $('.delete__fixed').css({
        position: 'absolute',
        top: 'calc(100% + 25px)',
        transform: 'translateY(-100%)',
      });
    } else if ($(window).scrollTop() > block_pos - 25) {
      // Если страницу прокрутили дальше, чем находится наш блок, то мы этот блок фиксируем и отображаем сверху
      $('.delete__fixed').css({
        position: 'fixed',
        top: '25px',
        transform: 'translateY(0%)',
      });
    } else {
      // Если же позиция скролла меньше (выше), чем наш блок, то возвращаем все назад
      $('.delete__fixed').css({
        position: 'absolute',
        top: '0px',
        transform: 'translateY(0%)',
      });
    }
  }

  $(window).scroll(function () {
    deletefixed();
  });
});

/* Section-doctor */

$(document).ready(function () {
  var block_pos_02 = $('.doctor__card').offset().top;
  // определяем первоначальное положение блока
  var wrap_pos_02 = $('.doctor').offset().top;
  // позиция контейнера
  var block_height_02 = $('.doctor__card').outerHeight();
  // высота блока
  var wrap_height_02 = $('.doctor').outerHeight();
  // высота контейнера
  var pos_absolute_02 = wrap_pos_02 + wrap_height_02 - block_height_02;

  $(window).scroll(function () {
    var wrap_height_02 = $('.doctor').outerHeight();
    // высота контейнера
    var pos_absolute_02 = wrap_pos_02 + wrap_height_02 - block_height_02;

    if ($(window).scrollTop() > pos_absolute_02 - 25) {
      // Если страницу прокрутили дальше, чем высота родителя минус высота фикс. блока, то стопорим блок
      $('.doctor__card').css({
        position: 'absolute',
        top: 'calc(100% + 0px)',
        transform: 'translateY(-100%)',
      });
    } else if ($(window).scrollTop() > block_pos_02 - 25) {
      // Если страницу прокрутили дальше, чем находится наш блок, то мы этот блок фиксируем и отображаем сверху
      $('.doctor__card').css({
        position: 'fixed',
        top: '25px',
        transform: 'translateY(0%)',
      });
    } else {
      // Если же позиция скролла меньше (выше), чем наш блок, то возвращаем все назад
      $('.doctor__card').css({
        position: 'absolute',
        top: '0px',
        transform: 'translateY(0%)',
      });
    }
  });

  $('.doctor__education .ref_dashed').click(function () {
    $(this).toggleClass('active');
    $(this).find('span').toggleClass('active');
    $(this)
      .closest('.doctor__education')
      .find('.doctor__education-items_more')
      .toggleClass('active');
    if ($(window).scrollTop() > pos_absolute_02 - 25) {
      // Если страницу прокрутили дальше, чем высота родителя минус высота фикс. блока, то стопорим блок
      $('.doctor__card').css({
        position: 'absolute',
        top: 'calc(100% + 0px)',
        transform: 'translateY(-100%)',
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  new Mmenu(
    '#menu',
    {
      navbar: {
        title: 'Меню',
      },
    },
    {
      language: 'ru',
    },
  );
});
