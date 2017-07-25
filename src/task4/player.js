/**
 * Created by Vitaly Zorin on 25.07.2017.
 */
import './style.css'

export default class Player {
  constructor(videoNode) {
    this.video = videoNode;
    this.createMenu();
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  seekAhead() {
    this.video.currentTime+= 1;
  }

  seekBack() {
    this.video.currentTime-= 1;
  }

  createMenu() {

    let $seekBackBttn = $('<button class="menu-button"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></button>');
    let $playPauseBttn = $('<button class="menu-button"><span class="glyphicon glyphicon-pause" aria-hidden="true"></span></button>');
    let $seekAheadBttn = $('<button class="menu-button"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></button>');


    let $buttonsWrapper = $('<div class="wrapper"></div>').append($seekBackBttn, $playPauseBttn, $seekAheadBttn);
    let $menu = $('<div class="menu"></div>').append($buttonsWrapper);

    $playPauseBttn.on('click', function() {
      if (this.video.paused) {
        this.play();
        $playPauseBttn.html('<span class="glyphicon glyphicon-pause" aria-hidden="true"></span>')
      } else {
        this.pause();
        $playPauseBttn.html('<span class="glyphicon glyphicon-play" aria-hidden="true"></span>')
      }
    }.bind(this));

    $seekAheadBttn.on('click', this.seekAhead.bind(this));
    $seekBackBttn.on('click', this.seekBack.bind(this));

    $menu.on('mouseover', function() {
        $buttonsWrapper.css('top', '0px');
    });

    $menu.on('mouseleave', function() {
        $buttonsWrapper.css('top', '50px');
    });

    setTimeout(function() {
      $buttonsWrapper.css('top', '50px');
    }, 1000);

    this.video.parentElement.appendChild($menu[0]);

  };
}