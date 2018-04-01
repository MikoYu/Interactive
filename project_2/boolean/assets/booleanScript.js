$(document).ready(function(){

  // set interval
  var interval = Math.round(Math.random() * 4000 + 1000);
  var tid = setInterval(newSpot, interval);

  //add a new spot to the div 'spots' after a random interval
  function newSpot() {

    // calculate the position and size of the new spot
    var posX = Math.round(Math.random() * ((screen.width + screen.height)/2));
    var posY = Math.round(Math.random() * ((screen.width + screen.height)/2));
    var size = Math.round(Math.random() * 50 + 20);

    // add the new spot and show it on the screen; and duplicate it
    $('#spots1, #spots2').append(
      $("<div class='spot'></div>").css({
        top: posY + 'px',
        left: posX + 'px',
        width: size + 'px',
        height: size + 'px',
      })
    );

    console.log('new spot added');
  }

  // clear all the spots on the screen when the mouse moves
  // also, detect mouse movement, map the movement of the spots to the mouse's
  var timeout_rotate = window.setTimeout(spinning, 30000);
  var last_position = {};
  var deltaX = 0;
  var deltaY = 0;

  $(document).mousemove( $.throttle(2000, true, function(event) {
    // stop rotating, restore timer
    $('#spots1, #spots2').css('animation-play-state', 'paused');
    timeout_rotate = window.setTimeout(spinning, 30000);

    // move with the mouse
    if (typeof(last_position.x) != 'undefined') {
      //get the change from last position to this position
      deltaX = last_position.x - event.clientX;
      deltaY = last_position.y - event.clientY;
    }

    last_position = {
      x : event.clientX,
      y : event.clientY
    };

    clearSpots(deltaX, deltaY);

  }));

  function spinning(){
    console.log('spinning');
    $('#spots1, #spots2').css('animation-play-state', 'running');
  };

  function clearSpots(xMovement, yMovement) {
    console.log('clearSpots');
    // change colors, split, etc.
    $('body').css('background', '#ffffff');

    // var xMovement = Math.pow(x, 1/3);
    // var yMovement = Math.pow(y, 1/3);

    $('#spots1 > .spot').animate({
      marginTop: '-=' + yMovement,
      marginLeft: '-=' + xMovement,
      backgroundColor: '#ff0000',
    });

    $('#spots2 > .spot').animate({
      marginTop: '+=' + yMovement,
      marginLeft: '+=' + xMovement,
      backgroundColor: '#ffff00'
    });

    $('#text1 > p').animate({
      marginTop: '-=' + yMovement,
      marginLeft: '-=' + xMovement,
      color: '#ff0000',
    });

    $('#text2 > p').animate({
      marginTop: '+=' + yMovement,
      marginLeft: '+=' + xMovement,
      color: '#ffff00',
    });

    // clear spots and text
    $('#spots1, #spots2, #text1, #text2').children().fadeOut(500, function() {
      $('#spots1, #spots2, #text1, #text2').empty();
    });

    console.log('mouse moving, spots removed');

    // add background and text as it was at the beginning
    delayRestore = 1000;
    setTimeout(function(){
      $('body').css('background', '#000000');
      $('#text1, #text2').append('<p>WAIT</p>');
      $('p').css({
        'color': '#ffffff',
        'marginTop': '0',
        'marginLeft': '0'
      });
    }, delayRestore);

  };

});
