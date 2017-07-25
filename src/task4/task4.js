/**
 * Created by Vitaly Zorin on 7/23/2017.
 */
import './index.html'

import './mp4_big_size_1470874518_big.mp4'

import 'bootstrap/dist/css/bootstrap.css';

import Player from './player'

document.addEventListener('DOMContentLoaded', function() {
  let videoNode = document.querySelector('video');
  let player = new Player(videoNode);
});



