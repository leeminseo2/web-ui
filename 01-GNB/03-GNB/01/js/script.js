//DOM구조가 파악되면 실행
$(function () {
  // alert('헤헷');
  // 대상을 변수에 저장
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb>li');
  const $submenu = $('.submenu');
  const duration = 300;

  //메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);
    // $submenu.slideDown();
    // stop (현재진행중인 애니메이션을 즉시 중지)

    // 활성화 ㅗ딘 메뉴 표시:on 클래스 부여
    $(this).addClass('on');
    $header.addClass('active');
  });
  //메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.slideUp(duration);
    $menu.removeClass('on');
  });
  $window.on('wheel', function (e) {
    // console.log(e);
    if (e.originalEvent.wheelDelta > 0) {
      $header.removeClass('hide');
    } else {
      $header.addClass('hide');
    }
  });
});
