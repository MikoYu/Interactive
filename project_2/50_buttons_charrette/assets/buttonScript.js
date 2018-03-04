$(document).ready(function(){
  /*---------1---------*/
  $("#hi").hide();
  $("#button-1").click(function(){
    $("#hi").toggle();
  });

  /*---------2---------*/
  var b = false;
  $("#button-2").click(function(){
    if (b==true) {
      $(this).css("background-color", "#000000");
      $("#button-2 > .num").css("color", "#ffffff");
      b=false;
    }
    else {
      $(this).css("background-color", "#ffffff");
      $("#button-2 > .num").css("color", "#000000");
      b=true;
    }
  });

  /*---------3---------*/

  /*---------4---------*/
  var d = false;
  $("#button-4").click(function(){

    if (d==true) {
      $("#square-4").css("width", "100%");
      $("#square-4").css("height", "100%");
      $("#square-4").css("border-radius", "0px");
      d=false;
    }
    else {
      $("#square-4").css("width", "100px");
      $("#square-4").css("height", "100px");
      $("#square-4").css("border-radius", "50%");
      d=true;
    }
  });


  /*---------5---------*/
  var e = true;
  $("#button-5").click(function(){

    if (e ==true) {
      $( "#slide" ).animate({top:"80%"}, 1000);
      e =false;
    }
    else {
      $( "#slide" ).animate({top:"0%"}, 1000);
      e =true;
    }
  });

  /*---------6---------*/
  var f = true;
  $("#button-6").click(function(){
    if (f ==true) {
      $( "body" ).css("-webkit-filter", "hue-rotate(180deg)");
      $( "body" ).css("filter", "hue-rotate(180deg)");
      $( "body" ).css("background-color", "black");
      $( "#button-6" ).css("-webkit-filter", "hue-rotate(180deg)");
      $( "#button-6" ).css("filter", "hue-rotate(180deg)");
      f =false;
    }

    else {
      $( "body" ).css("-webkit-filter", "hue-rotate(0)");
      $( "body" ).css("filter", "hue-rotate(0)");
      $( "body" ).css("background-color", "white");
      $( "#button-6" ).css("-webkit-filter", "hue-rotate(0)");
      $( "#button-6" ).css("filter", "hue-rotate(0)");
      f =true;
    }

  });

  /*---------7---------*/
  var g = true;
  $("#button-7").click(function(){
    if (g ==true) {
      $( "body" ).css("-webkit-filter", "grayscale(80%)");
      $( "body" ).css("filter", "grayscale(80%)");
      $( "body" ).css("background-color", "black");
      $( "#button-6" ).css("-webkit-filter", "grayscale(80%)");
      $( "#button-6" ).css("filter", "grayscale(80%)");
      g =false;
    }

    else {
      $( "body" ).css("-webkit-filter", "grayscale(0)");
      $( "body" ).css("filter", "grayscale(0)");
      $( "body" ).css("background-color", "white");
      $( "#button-6" ).css("-webkit-filter", "grayscale(0)");
      $( "#button-6" ).css("filter", "grayscale(0)");
      g =true;
    }

  });

  /*---------8---------*/
  var h = 0;
  $("#button-8").click(function(){
    var h = Math.floor(Math.random() * 6) + 1;
    $("#dice").html(h);
  });

  /*---------9---------*/

  /*---------10---------*/

  /*---------11---------*/
  $("#button-11").click(function(){
    alert("OUCH");
  });

  /*---------12---------*/
  // $("#button-12").click(function(){
  //   window.top.close();
  // });

  // function closeMe(){
  //   var win = window.open(“”,”_self”); /* url = “” or “about:blank”; target=”_self” */
  //   win.close();
  // });

  /*---------13---------*/

  /*---------14---------*/
  var n = true;

  $("#button-14").click(function(){
    if (n ==true) {
      $( "#bounce" ).css("left","0");
      $( "#bounce" ).css("background-color","red");
      $( "#bounce1" ).css("left","100%");
      $( "#bounce1" ).css("background-color","blue");

      n =false;
    }
    else {
      $( "#bounce" ).css("left","100%");
      $( "#bounce" ).css("background-color","blue");
      $( "#bounce1" ).css("left","0");
      $( "#bounce1" ).css("background-color","red");

      n =true;
    }
  });

  /*---------15---------*/
  $("#button-15").click(function(){
    var top = randomPosition();
    var left = randomPosition();
    function randomPosition(){
      return Math.floor(Math.random() * 100 + 1);
    }

    $( "#moving" ).delay(1000).animate({"left": left + 10 + "%"},10);
    $( "#moving" ).delay(1000).animate({"top": top + 10 + "%"},10);
    $( "#moving" ).delay(1010).animate({"left": left - 10 + "%"},10);
    $( "#moving" ).delay(1010).animate({"top": top - 10 + "%"},10);
    $( "#moving" ).delay(1020).animate({"left": left + 5 + "%"},10);
    $( "#moving" ).delay(1020).animate({"top": top + 5 + "%"},10);
    $( "#moving" ).delay(1030).animate({"left": left - 5 + "%"},10);
    $( "#moving" ).delay(1030).animate({"top": top - 1 + "%"},10);
    $( "#moving" ).delay(1040).animate({"left": left + "%"},10);
    $( "#moving" ).delay(1040).animate({"top": top + "%"},10);
  });

  /*---------16---------*/
  $('#button-16').click(function (ev) {
    var r16 = Math.round(Math.random() * 255);
    var g16 = Math.round(Math.random() * 255);
    var b16 = Math.round(Math.random() * 255);

    $("body").append(
      $('<div></div>').css({
        position: 'absolute',
        top: ev.pageY + 'px',
        left: ev.pageX + 'px',
        width: '10px',
        height: '10px',
        background: "RGB(" + r16 + "," + g16 + "," + b16 + ")"
      })
    );

    $("#button-16 >.num").css("color", "RGB(" + r16 + "," + g16 + "," + b16 + ")" )
  });



  /*---------17---------*/

  /*---------18---------*/
  var r = 0;
  // var emojis = ["🤣","😜"‍];
  // // ,🙄,😘,🧚‍,💅🏻,👀,🐣,🌚,🔥,💊,🥦,🥟,🧟

  $("#button-18").click(function(){
    // var emoji = emojis[Math.floor(Math.random()*emojis.length)];
    // console.log(emoji);
    $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + r +"\">🤣</marquee>");
    r++;

  });

  // https://getemoji.com/

  /*---------19---------*/
  var s = false;
  $("#button-19").click(function(){
    if (s==true) {
      $("#moon").html('🙄');
      s = false;
    }
    else {
      $("#moon").html('🌝');
      s = true;
    }
  });

  /*---------20---------*/
  var t = true;
  $("#button-20").click(function(){
    if (t == true) {
      $(".num").css('left','90%');
      t = false;
    }
    else {
      $(".num").css('left','30px');
      t = true;
    }
  });

  /*---------21---------*/

  /*---------22---------*/
  // $("#button-22").click(function(event){
  //   var cursorX = event.clientX;
  //   var cursorY = event.clientY;
  //   $("button-22 > .circle").css('transform', 'translate(cursorX/width, cursorY/height)')
  //
  // });

  /*---------23---------*/
  var y = true;
  $("#button-23").click(function(){
    if (y == true) {
      $(".num").css('display','none');
      $("#naughtyNum").css('display','inline');
      y = false;
    }
    else {
      $(".num").css('display','inline');
      $("#naughtyNum").css('display','none');
      y = true;
    }
  });

  /*---------24---------*/
  var z = true;
  $("#button-24").click(function(){
    if (z == true) {
      $("#naughtyNum2").html('1234567890');
      z = false;
    }
    else {
      $("#naughtyNum2").html('24');
      z = true;
    }
  });


  /*---------25---------*/
  var aa = true;
  $("#button-25").click(function(){
    var helpWidth = 100/(Math.floor(Math.random() * 6) + 1);
    $( ".cell" ).animate({"width":"0"},800);
    $( ".cell" ).delay(1200).animate({"width":helpWidth+"%"},800);
  });

  /*---------26---------*/
  $("#button-26").click(function(){
    var person = prompt("Please enter your name", "hmmm");
    $( '#screenX').html( "for " + person );

  });

  /*---------27---------*/
  var ac = true
  $("#button-27").click(function(){
    if (ac == true) {
      var bgColor = prompt("Please enter a color", "lightblue");
      $("#button-27>div").css('background-color', "str.valueOf(bgColor)");
      $("#button-27>div").css('animation-play-state', 'paused');
      ac == false;
    }
    else {
      ac == true;
      $("#button-27>div").css('animation-play-state', 'running');
    }

  });

  /*---------28---------*/

  //   $("#button-28").click(function(){
  //     $( "#vibr" ).delay(0).animate({"left":"51%"},10);
  //     $( "#vibr" ).delay(20).animate({"left":"49%"},10);
  //     $( "#vibr" ).delay(30).animate({"left":"51%"},10);
  //     $( "#vibr" ).delay(40).animate({"left":"49%"},10);
  //     $( "#vibr" ).delay(50).animate({"left":"50%"},10);
  //
  // });


  /*---------29---------*/

  /*---------30---------*/

  /*---------31---------*/
  var ag = true;
  $("#button-31").click(function(){
    if (ag==true) {
      $( "#jeellyFish" ).css( "display", "inherit");
      $( "#exit" ).html( "&#9746");
      $( "#exit" ).addClass( "exit");
      $( "#exit" ).addClass( "exit");

      ag = false;
    }
    else {
      $( "#jeellyFish" ).css( "display", "none");
      $( "#exit" ).removeClass( "exit");
      $( "#exit" ).html( "50");
      ag = true;
    }
  });

  /*---------32---------*/

  /*---------33---------*/

  /*---------34---------*/

  /*---------35---------*/

  /*---------36---------*/

  /*---------37---------*/

  /*---------38---------*/

  /*---------39---------*/

  /*---------40---------*/

  /*---------41---------*/

  /*---------42---------*/

  /*---------43---------*/

  // make some waves.
  var ocean = document.getElementById("ocean"),
  waveWidth = 10,
  waveCount = Math.floor(window.innerWidth/waveWidth),
  docFrag = document.createDocumentFragment();

  $("#button-43").click(function(){
    for(var i = 0; i < waveCount; i++){
      var wave = document.createElement("div");
      wave.className += " wave";
      docFrag.appendChild(wave);
      wave.style.left = i * waveWidth + "px";
      wave.style.webkitAnimationDelay = (i/100) + "s";
    }

    ocean.appendChild(docFrag);
  });

  /*---------44---------*/
  var btn44 = true;
  var image = document.getElementById("likes");
  $("#button-44").click(function(){
    if (btn44==true) {
      image.classList.add('pause');
      this.value = 'play';
      btn44 = false;
    } else {
      image.classList.remove('pause');
      this.value = 'pause';
      btn44 = true;
    }
  });



  /*---------45---------*/

  /*---------46---------*/

  /*---------47---------*/

  /*---------48---------*/

  /*---------49---------*/
  var classes = ["light", "", "heavy", "extraheavy"];
  var i = 1;
  $("#toggleweight").click(function () {
    $(".btn").removeClass(classes[i]);
    i++;
    if (i >= classes.length) {
      i = 0;
    }
    $(".btn").addClass(classes[i]);
  });

  /*---------50---------*/






});
