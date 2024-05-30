$(function () {
  const $header = $('#header');
  const $btnTop = $('.btn-top');
  // 탑버튼이 처음에는 안보이게
  $btnTop.hide();
  // 탑버튼 클릭하면 탑으로
  $btnTop.on('click', function () {
    $.fn.fullpage.moveTo('section1');
  });
  $('#fullpage').fullpage({
    // 인딩케이터 커스텀
    // 사용할 요소의 이름을 설정
    menu: '.indicator',
    // 앵커의 이름 설정
    anchors: ['section1', 'section2', 'section3', 'section4'],

    // 실제 링크에 data-menuanchors 영역이름 적용

    // 섹션 영역의 센터
    scrollingSpeed: 1000,
    verticalCentered: false,

    // 슬라이더 관련
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    // 영역에 진입한후
    afterLoad: function (anchorLink, index) {
      console.log('영역을 진입');
      console.log(anchorLink, index);
      // 영역에 진입하면 탑버튼 보이게
      if (anchorLink === 'section4') {
        $btnTop.fadeIn();
      }
    },

    //  영역을 떠나갈 때

    onLeave: function (index, nextIndex, direction) {
      console.log('영역을 떠나갈때');
      console.log(index, nextIndex, direction);

      // 밑애 영역으로 이동하면 헤더에 hide클래스 부여
      if (direction === 'down') {
        $header.addClass('hide');
        $header.removeClass('hide');
      }
      if (index === 4 || direction === 'up') {
        $btnTop.fadeOut();
      }
    },
  });
});
// *섹션 영역의 콘텐츠 세로 정렬
