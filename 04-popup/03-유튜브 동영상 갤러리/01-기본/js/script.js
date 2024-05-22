$(function () {
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list>li');

  $selectVideo.on('click', function () {
    //
    let videoLink = $(this).data('link');
    console.log(videoLink);
    // *viseoLink=videoLink+'?autoplay=1'
    videoLink += '?autoplay=1';
    //src값으로설정
    $video.attr('src', videoLink);
    // 텍스트 변수에 저장
    const videoText = $(this).text();
    // 캡션에 세팅
    $('.caption').text(videoText);
    // 딤 보이게
    $dim.fadeIn();

    $videoWrap.addClass('active');
  });
  // 닫기버튼을 클릭했을 때
  $btnClose.on('click', function () {
    // dim,video-wrap안보이게
    $dim.fadeOut();
    $videoWrap.removeClass('active');
    // vedio의 src값을 뺴자>동영상 삭제
    $video.attr('src', '');
  });
});
