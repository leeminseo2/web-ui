$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li'); // gnb 클래스의 하위 li 요소 선택
  const $submenu = $('.submenu');
  const duration = 300;

  // 메뉴에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    // 활성화된 메뉴 표시 : on 클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  // 마우스 휠을 조작할 때
  $window.on('wheel', function (e) {
    // console.log(e);

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올렸을 때
      $header.removeClass('hide');
    } else {
      // 휠을 내렸을 때
      $header.addClass('hide');
    }
  });

  // onAir slider
  const onairSlider = new Swiper('.onair-slider', {
    // Optional parameters

    autoplay: {
      delay: 1000,
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    /* // 반응형 분기설정
    breakpoints: {
      768: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
 */
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    //특정화면 크기에서 동작하지 않게

    // Navigation arrows
  });
});
