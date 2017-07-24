var SVGNS = 'http://www.w3.org/2000/svg';

export var createSvgElement = function (name, attrs) {
  var element = document.createElementNS(SVGNS, name);
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      element.setAttribute(attr, attrs[attr]);
    }
  }

  return element;
};

export var createLine = function (x1, y1, x2, y2, attrs) {
  var _attrs = attrs || {};
  _attrs.x1 = x1;
  _attrs.x2 = x2;
  _attrs.y1 = y1;
  _attrs.y2 = y2;

  return createSvgElement('line', _attrs);
};

export var createRect = function (x, y, width, height, attrs) {
  var _attrs = attrs || {};
  _attrs.x = x;
  _attrs.y = y;
  _attrs.width = width;
  _attrs.height = height;

  return createSvgElement('rect', _attrs);
};

export var createTspan = function (text, attrs) {
  var tspan = createSvgElement('tspan', attrs);
  tspan.textContent = text;

  return tspan;
};

export var createPath = function (path, attrs) {
  var _attrs = attrs || {};
  _attrs.d = path;

  return createSvgElement('path', attrs);
};

export var createCircle = function(cx, cy, r, attrs) {
  var _attrs = attrs || {};
  _attrs.cx = cx;
  _attrs.cy = cy;
  _attrs.r = r;
  return createSvgElement('circle', _attrs);
};

export var createEllipse = function(x, y, rx, ry, attrs) {
  var _attrs = attrs || {};
  _attrs.cx = x;
  _attrs.cy = y;
  _attrs.rx = rx;
  _attrs.ry = ry;
  return createSvgElement('ellipse', _attrs);
};