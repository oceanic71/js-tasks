/**
 * Created by Vitaly Zorin on 24.07.2017.
 */

import * as svg from './svg-factory';

export default class SvgStar {

  constructor(numOfvertices, rad, m, x0, y0) {
    this.numOfVertices = numOfvertices;
    this.radius = rad;
    this.m = m;
    this.xc = x0;
    this.yc = y0;
    this.createStar();
  }


  createStar() {
    this.getVerticesCoords();

    let nextVertex;

    let node = this.node = svg.createSvgElement('g',
      {
        transform:  `translate(${this.xc}, ${this.yc})`
      });

    let circle = svg.createCircle(0, 0, this.radius, {
      stroke: 'black',
      fill: 'none'
    });
    node.appendChild(circle);

    for (let i = 0; i <= this.numOfVertices - 1; i += 1) {

      if (i + this.m > this.numOfVertices - 1) {
        nextVertex = i + this.m - this.numOfVertices;
      } else {
        nextVertex = i + this.m;
      }

      let line = svg.createLine(this.coords[i].x, this.coords[i].y, this.coords[nextVertex].x, this.coords[nextVertex].y, {
        stroke: 'red'
      });
      node.appendChild(line);
    }
  };

  getVerticesCoords() {

    this.coords = [];

    for (let i = 0; i <= this.numOfVertices - 1; i++) {
      this.coords[i] = {
        x: this.radius * Math.cos(Math.PI * 2 * i / this.numOfVertices),
        y: this.radius * Math.sin(Math.PI * 2 * i / this.numOfVertices),
      }
    }

  };

}
