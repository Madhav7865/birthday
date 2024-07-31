import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import CountdownTimer from '../src/Countdowntimer'; // Adjust the import path as needed

function HomePage() {
  const [countdownFinished,setCountdownFinished] = useState(false);

  function handlecountdown () {
    setCountdownFinished(true);
  }
  
  useEffect(() => {
    $(window).on('load', function () {
      $('.loading').css('opacity', '0');
      $('.container').css('opacity', '1');
    });
    function animateButton(event) {
      var button = event.currentTarget; // Get the button that was clicked

      // Example animation effect
      button.classList.add('animate');

      // Remove the class after animation to allow repeated animations
      setTimeout(function () {
        button.classList.remove('animate');
      }, 1000); // Adjust timeout duration to match animation duration
    }

    var bubblyButtons = document.getElementsByClassName('bubbly-button');
    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);
    }
    $(function () {
      var vw;
      $(window).on(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10').stop();
        $('#b11').animate({ top: 240, left: vw - 350 }, 500);
        $('#b22').animate({ top: 240, left: vw - 250 }, 500);
        $('#b33').animate({ top: 240, left: vw - 150 }, 500);
        $('#b44').animate({ top: 240, left: vw - 50 }, 500);
        $('#b55').animate({ top: 240, left: vw + 50 }, 500);
        $('#b66').animate({ top: 240, left: vw + 150 }, 500);
        $('#b77').animate({ top: 240, left: vw + 250 }, 500);
        $('#b88').animate({ top: 240, left: vw + 300 }, 500);
        $('#b99').animate({ top: 240, left: vw + 350 }, 500);
        $('#b1010').animate({ top: 240, left: vw + 400 }, 500);
      });

      $('#turn_on').on('click', function () {
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange')
          .addClass('bulb-glow-yellow bulb-glow-red bulb-glow-blue bulb-glow-green bulb-glow-pink bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
          $('#play').fadeIn('slow');
        });
      });

      $('#play').on('click', function () {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange')
          .addClass('bulb-glow-yellow-after bulb-glow-red-after bulb-glow-blue-after bulb-glow-green-after bulb-glow-pink-after bulb-glow-orange-after');
        $('body').css('background-color', '#FFF').addClass('peach-after');
        $(this).fadeOut('slow').delay(8000).promise().done(function () {
          $('#bannar_coming').fadeIn('slow');
        });
      });

      $('#bannar_coming').on('click', function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(8000).promise().done(function () {
          $('#balloons_flying').fadeIn('slow');
        });
      });

      function loopAnimation(elementId) {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $(elementId).animate({ left: randleft, bottom: randtop }, 10000, function () {
          loopAnimation(elementId);
        });
      }

      $('#balloons_flying').on('click', function () {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1,#b4,#b5,#b7,#b9,#b2,#b3,#b6,#b8,#b10').addClass('balloons-rotate-behaviour-one');
        loopAnimation('#b1');
        loopAnimation('#b2');
        loopAnimation('#b3');
        loopAnimation('#b4');
        loopAnimation('#b5');
        loopAnimation('#b6');
        loopAnimation('#b7');
        loopAnimation('#b8');
        loopAnimation('#b9');
        loopAnimation('#b10');
        $(this).fadeOut('slow').delay(16000).promise().done(function () {
          $('#wish_message').fadeIn('slow');
        });
      });
      $('#cake_fadein').on('click', function () {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(4000).promise().done(function () {
          $('#story').fadeIn('fast');
        });
      });

      $('#wish_message').on('click', function () {
        vw = $(window).width() / 2;
        $('#b4,#b5,#b6,#b7,#b8,#b9,#b10').stop();
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        $('#b7').attr('id', 'b77');
        $('#b8').attr('id', 'b88');
        $('#b9').attr('id', 'b99');
        $('#b10').attr('id', 'b1010');
        $('#b44').animate({ top: 240, left: vw - 350 }, 500);
        $('#b55').animate({ top: 240, left: vw - 250 }, 500);
        $('#b66').animate({ top: 240, left: vw - 150 }, 500);
        $('#b77').animate({ top: 240, left: vw - 50 }, 500);
        $('#b88').animate({ top: 240, left: vw + 50 }, 500);
        $('#b99').animate({ top: 240, left: vw + 150 }, 500);
        $('#b1010').animate({ top: 240, left: vw + 250 }, 500);
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(4000);
        $(this).fadeOut('slow').delay(4000).promise().done(function () {
          $('#cake_fadein').fadeIn('slow');
        });
      });

    });
  },[countdownFinished]);

  return (
    <div>
       {!countdownFinished ? <CountdownTimer targetDate={"2024-08-01T00:00:00"} onFinish={handlecountdown}/> : ( 
        <div>
          <Helmet>
            <title>Happy Birthday Smradhi!!</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="Happy Birthday Sonangi" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="Birthday, Happy" />
            <meta property="og:type" content="E-Greeting" />
            <meta property="og:image" content="favicon.ico" />
            <meta property="og:description" content="Wish you a very Happy Birthday" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
            <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" type="text/css" href="index.css" />
          </Helmet>

          <div id="myAudio" className="loading"></div>
          <div className="balloons text-center" id="b1">
            <h2 className="yellow"></h2>
          </div>
          <div className="balloons text-center" id="b2">
            <h2 className="blue"></h2>
          </div>
          <div className="balloons text-center" id="b3">
            <h2 className="red"></h2>
          </div>
          <div className="balloons text-center" id="b4">
            <h2 className="green">S</h2>
          </div>
          <div className="balloons text-center" id="b5">
            <h2 className="purple">M</h2>
          </div>
          <div className="balloons text-center" id="b6">
            <h2 className="light-green">R</h2>
          </div>
          <div className="balloons text-center" id="b7">
            <h2 className="turquoise">A</h2>
          </div>
          <div className="balloons text-center" id="b8">
            <h2 className="red">D</h2>
          </div>
          <div className="balloons text-center" id="b9">
            <h2 className="yellow">H</h2>
          </div>
          <div className="balloons text-center" id="b10">
            <h2 className="blue">I</h2>
          </div>

          <img src="Balloon-Border.png" width="100%" className="balloon-border" alt="Balloon Border" />
          <div>
            <div className="row">
              <div className="col-md-2 col-xs-2 bulb-holder">
                <div className="bulb" id="bulb_yellow"></div>
              </div>
              <div className="col-md-2 col-xs-2 bulb-holder">
                <div className="bulb" id="bulb_red"></div>
              </div>
              <div className="col-md-2 col-xs-2 bulb-holder">
                <div className="bulb" id="bulb_blue"></div>
              </div>
              <div className="col-md-2 col-xs-2 bulb-holder">
                <div className="bulb" id="bulb_green"></div>
              </div>
              <div className="col-md-2 col-xs-2 bulb-holder">
                <div className="bulb" id="bulb_pink"></div>
              </div>
              <div className="col-md-2 col-xs-2 bulb-holder">
                <div className="bulb" id="bulb_orange"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="banner.png" className="bannar" alt="Banner" />
              </div>
            </div>
            <div className="row cake-cover">
              <div className="col-md-12 text-center">
                <img src="cake128.png" className="cake" />
              </div>
            </div>
            <div className="position-absolute bottom-0 w-100 message">
              <div className="d-flex justify-content-center">
                <p>Happy</p>
                <p>Birthday</p>
                <p>Smradhi!!!!</p>
              </div>
            </div>
          </div>

          <div className="position-absolute bottom-0 w-100">
            <div className="d-flex justify-content-center">
              <div className="text-center">
                <button className="m-4 bubbly-button" id="turn_on">
                  Turn On Lights
                </button>
                <button className="m-4 bubbly-button" id="play">
                  Special Music for You!! Let's play
                </button>
                <button className="m-4 bubbly-button" id="bannar_coming">
                  Let's do some decoration!!
                </button>
                <button className="m-4 bubbly-button" id="balloons_flying">
                  Some Balloons!!
                </button>
                <button className="m-4 bubbly-button" id="wish_message">
                  Happy Birthday Smradhi!!
                </button>
                <button className="m-4 bubbly-button" id="cake_fadein">
                  Special Cake for You
                </button>
                <Link to="/pic">
                  <button className="m-4 bubbly-button" id="story">
                    Note for you!!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
