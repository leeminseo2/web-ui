$(function () {
  // 대상을 변수에 저장
  const $btnMenu = $('.btn-menu');
  const $dim = $('.dim');
  const $menu = $('.menu-wrap');

  // 메뉴 버튼을 클릭했을때 메뉴창이 보이게
  $btnMenu.on('click', function () {
    $menu.toggleClass('active');
    $dim.fadeToggle();
    $btnMenu.toggleClass('on');
  });
});
