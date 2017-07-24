/**
 * Created by Vitaly Zorin on 24.07.2017.
 */

export default class CanvasStar {

  constructor(numOfvertices, rad, m, x0, y0, node) {
    this.ctx = node.getContext('2d');
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

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgb(0, 0, 0)';
    this.ctx.arc(this.xc, this.yc, this.radius, 0, 2*Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();

    for (let i = 0; i <= this.numOfVertices - 1; i += 1) {

      if (i + this.m > this.numOfVertices - 1) {
        nextVertex = i + this.m - this.numOfVertices;
      } else {
        nextVertex = i + this.m;
      }

      this.ctx.strokeStyle = 'rgb(255, 0, 0)';
      this.ctx.beginPath();
      this.ctx.moveTo(this.coords[i].x, this.coords[i].y);
      this.ctx.lineTo(this.coords[nextVertex].x, this.coords[nextVertex].y);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  };

  getVerticesCoords() {

    this.coords = [];

    for (let i = 0; i <= this.numOfVertices - 1; i++) {
      this.coords[i] = {
        x: this.xc + this.radius * Math.cos(Math.PI * 2 * i / this.numOfVertices),
        y: this.yc + this.radius * Math.sin(Math.PI * 2 * i / this.numOfVertices),
      }
    }

  };

}
