$(document).ready(function(){

  // set interval
  var interval = Math.round(Math.random() * 4000 + 1000);
  var tid = setInterval(newSpot, interval);

  //add a new spot to the div "spots" after a random interval
  function newSpot() {

    // calculate the position and size of the new spot
    var posX = Math.round(Math.random() * (screen.width - 100));
    var posY = Math.round(Math.random() * (screen.height - 100));
    var size = Math.round(Math.random() * 50 + 20);

    // add the new spot and show it on the screen; and duplicate it
    $('#spots, #spots2').append(
      $('<div class="spot"></div>').css({
        top: posY + 'px',
        left: posX + 'px',
        width: size + 'px',
        height: size + 'px',
      })
    );

    console.log('new spot added');

    // this failed qvq
    // duplicate the spots (at same positions) for their disappearing animation
    // var existingContents = $("#spots").html();
    // $("#spots2").append(existingContents);
  }


  // clear all the spots on the screen when the mouse moves
  var mousemove_timeout = null;

  $(document).mousemove(function() {
    if (mousemove_timeout == null) {
      mousemove_timeout = window.setTimeout(clearSpots, 1000);
    }
  });

  function clearSpots() {

    $('body').css("background", "#ffffff");

    $('#spots > .spot').animate({
      top: '-=10px',
      left: '-=10px', //moves up left
      backgroundColor: '#ff0000',
    });

    $('#spots2 > .spot').animate({
      top: '+=10px',
      left: '+=10px', //moves down right
      backgroundColor: '#ffff00'
    });

    $('#text1 > p').animate({
      marginTop: '-=10px',
      marginLeft: '-=10px', //moves up left
      color: '#ff0000',
    });

    $('#text2 > p').animate({
      marginTop: '+=10px',
      marginLeft: '+=10px', //moves up left
      color: '#ffff00',
    });

    $('#spots, #spots2, #text1, #text2').children().fadeOut(500, function() {
      $('#spots, #spots2, #text1, #text2').empty();
    });

    delay = 1000;
    setTimeout(function(){
      $('body').css("background", "#000000");
      $('#text1, #text2').append('<p>WAIT</p>');
      $('p').css({
        'color': '#ffffff',
        'marginTop': '0',
        'marginLeft': '0'
      });

    }, delay);

    console.log('mouse moving, spots removed');

    window.clearTimeout(mousemove_timeout);
    mousemove_timeout = null;

  };


});




//hitory version, without really listening for mousemove
// $(document).on('mousemove', function() {
//   clearTimeout(timeout);
//
//   for (var time = 0; time < 5; time++ ){
//
//     timeout = setTimeout(function() {
//       var posX = Math.round(Math.random() * (screen.width - 100));
//       var posY = Math.round(Math.random() * (screen.height - 100));
//       var size = Math.round(Math.random() * 50 + 20);
//
//       $("body").append(
//         $('<div class = "spot"></div>').css({
//           top: posY + 'px',
//           left: posX + 'px',
//           width: size + 'px',
//           height: size + 'px',
//         })
//       );
//       console.log('Mouse idle for' + time/1000 + 'sec');
//     }, 3000);
//   }
// });
