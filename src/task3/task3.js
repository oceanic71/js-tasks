/**
 * Created by Vitaly Zorin on 7/23/2017.
 */
import './index.html'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './style.css';

const radius = 200;
const x0 = 250;
const y0 = 250;

let verticesControl = document.querySelector('#vertices');
let mControl = document.querySelector('#numberM');


let vertices = Number(verticesControl.value);
let m = Number(mControl.value); // https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0_(%D0%B3%D0%B5%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%8F)



let svgNode = document.querySelector('svg');
let canvasNode = document.getElementById('canvas-element');

import SvgStar from './svg-star';

let svgStar = new SvgStar(vertices, radius, m, x0, y0);
svgNode.appendChild(svgStar.node);

import CanvasStar from './canvas-star';
new CanvasStar(vertices, radius, m, x0, y0, canvasNode);


verticesControl.addEventListener('input', function() {
  svgNode.innerHTML = "";
  vertices = Number(verticesControl.value);

  let svgStar = new SvgStar(vertices, radius, m, x0, y0);
  svgNode.appendChild(svgStar.node);

  canvasNode.getContext('2d').clearRect(0, 0, +canvasNode.getAttribute('width'), +canvasNode.getAttribute('height'));
  new CanvasStar(vertices, radius, m, x0, y0, canvasNode);

  let newMaxM = Math.floor(Number(verticesControl.value)/2-1);
  mControl.setAttribute('max', newMaxM);
  mControl.setAttribute('placeholder', `1-${newMaxM}`);

  if (+mControl.value > newMaxM) {
    mControl.value = String(newMaxM);
  }
  mControl.dispatchEvent(new Event('input'));
});

mControl.addEventListener('input', function() {
  svgNode.innerHTML = "";
  m = Number(mControl.value);

  let svgStar = new SvgStar(vertices, radius, m, x0, y0);
  svgNode.appendChild(svgStar.node);

  canvasNode.getContext('2d').clearRect(0, 0, +canvasNode.getAttribute('width'), +canvasNode.getAttribute('height'));
  new CanvasStar(vertices, radius, m, x0, y0, canvasNode);
});




