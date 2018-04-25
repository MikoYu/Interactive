$(document).ready(function(){
  // redrawDotNav();
  /* 绑定滚动事件 */
  $(window).bind('scroll',function(){
    parallaxScroll();
    // redrawDotNav();
  });

  function parallaxScroll(){ //
    var scrolled = $(window).scrollTop();
    // console.log(scrolled);

    $('#title-page').css('top',(0-(scrolled*.5))+'px');

    $('#flashback-1').css('left',(-4725+(scrolled*.75))+'px');
    $('#flashback-2').css('left',(8150-(scrolled*.75))+'px');
    $('#flashback-3').css('left',(-13550+(scrolled*.75))+'px');
    $('#flashback-3').css('top',(3780-(scrolled*.2))+'px');

    if (scrolled <= 2250) {
      // for flashback-1
      $('#black-block').css('top',(5000-(scrolled*1.2))+'px');
    } else if (scrolled > 2250 && scrolled <= 6500) {
      // for flashback-1
      $('#black-block').css('top',(50+(scrolled*1))+'px');
    } else if (scrolled > 6500 && scrolled <= 9000) {
      // for flashback-1
      $('#black-block').css('top',(50+(scrolled*1))+'px');
      $('#black-block').css('opacity',(5+(scrolled*-(1/1600))));
    } else if (scrolled > 9000 && scrolled <= 13000) {
      // for flashback-2
      $('#black-block').css('top',(50+(scrolled*1))+'px');
      $('#black-block').css('opacity',(-18+(scrolled*(1/500))));
    } else if (scrolled > 13000 && scrolled <= 15400) {
      // for flashback-2
      // actually: 13000 ~ 13500
      $('#black-block').css('top',(50+(scrolled*1))+'px');
      $('#black-block').css('opacity',(27-(scrolled*(1/500))));
    } else if (scrolled > 15400 && scrolled <= 19100) {
      // for flashback-3
      $('#black-block').css('top',(50+(scrolled*1))+'px');
      $('#black-block').css('opacity',(-30.6+(scrolled*(1/500))));
    }  else if (scrolled > 19100 && scrolled <= 20000) {
      // for flashback-3
      $('#black-block').css('top',(50+(scrolled*1))+'px');
      $('#black-block').css('opacity',(39.2-(scrolled*(1/500))));
    } else if (scrolled > 20900 && scrolled <= 21280) {
      // for flashback-chunk
      $('#black-block').css('opacity',1.0);
      $('#black-block').css('top',(46860-(scrolled*1.2))+'px');
    } else if (scrolled > 21280 && scrolled <= 23200) {
      // for flashback-chunk
      $('#black-block').css('top',(50+(scrolled*1))+'px');
    } else if (scrolled > 23200 && scrolled <= 40000) {
      // for flashback-chunk
      $('#black-block').css('top',(50+(scrolled*1))+'px');
      $('#black-block').css('width',(3000-(scrolled*(1/8))+'vw'));
      $('#black-block').css('height',(2700-(scrolled*(9/80))+'vh'));
    }

  };


  // var scrolled = $(this).scrollTop();
  //
  // // $("#title-page").css("transform", `translateX(${1 - $(window).scrollTop() / 700})`);
  //
  // // $(function() {
  //   $(window).scroll(function(){
  //     $('#parallax_area1').css('top',(0-(scrolled*.75))+'px');
  //     $('#parallax_area2').css('top',(0-(scrolled*.5))+'px');
  //     $('#parallax_area3').css('top',(0-(scrolled*.25))+'px');
  //   });
  // // });


});
