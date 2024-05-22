$(function () {
  const $body = $('body');
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list>li');

  // 배경 이미지를 배열에 저장
  const imgArr = [
    'https://res.heraldm.com/content/image/2023/04/25/20230425000549_0.jpg',
    'https://image.musinsa.com/mfile_s01/2021/05/13/3fb5ed13afe8714a7e5d13ee506003dd120913.jpg',
    'https://img.wkorea.com/w/2021/11/style_6189ebb2d3726.jpg',
    'http://image.yes24.com/images/chyes24/froala/0/48248/58165.jpg',
  ];
  //javascript forEach():여러 대상에 동일한 동작을 적용하고자 할 때 사용
  // imgArr.forach(function (item, index) {
  //   console.log(item, index);
  // });
  // JQuery each()
  $selectVideo.each(function (index, item) {
    // console.log(index, item);
    console.log(index, item);
    $(item).css('background', `url(${imgArr[index]}) no-repeat 0 0 /cover`);
  });
  // console.log(imgArr[2], $selectVideo);
  // $body.css('background', `url(${imgArr[2]}) no-repeat 0 0 /cover`);

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

    // 선택한 놈의 인덱스를 구해서 변수에 저장:vedioIdx
    const videoIdx = $(this).index();
    //배경이미지 배열에서 해당 인덱스의 이미지를 가져와서:imgArr[인덱스]
    const imgLink = imgArr[videoIdx];
    //$body의 배경이미지로 지정:$body.css
    $body.css('background', `url(${imgLink}) no-repeat 0 0 /cover`);
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
