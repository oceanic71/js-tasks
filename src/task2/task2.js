/**
 * Created by Vitaly Zorin on 7/23/2017.
 */
import './index.html'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './style.css';

import ProgressBar from './progressBar';

let nodeBar = document.querySelector('.progress-bar-striped');
let nodeLabel = document.querySelector('.progress-bar-striped div');

let pBar = new ProgressBar(nodeBar, nodeLabel, 0);

let timer = setInterval(function() {
  pBar.value += 2;
}, 100);