import Two from 'two'

var slices = 1;
var w = document.documentElement.scrollWidth;;
var h = document.documentElement.scrollHeight;
var radius = w / 2 - w/9;
if (radius > h/2 - h/6) {
  radius = w/2 - 150;
}

// Make an instance of two and place it on the page.
var params = {
  width: w,
  height: h,
};
var elem = document.body;
var two = new Two(params).appendTo(elem);

var text = two.makeText(slices + ' Person', w/2, h/6);
text.size = 20;
text.fill = 'white';
text.alignment = 'center';

var x = two.width * 0.5;
var y = two.height * 0.5;
var circle = two.makeCircle(x, y, radius);

circle.fill = 'lightgreen';
// And accepts all valid CSS color:
circle.stroke = 'green';
circle.linewidth = 5;


// Don’t forget to tell two to draw everything to the screen
two.update();

document.querySelector("html").addEventListener("click", split_circle);

function split_circle() {
  slices++;
  circle = two.makeCircle(x, y, radius);

  circle.fill = 'lightgreen';
  // And accepts all valid CSS color:
  circle.stroke = 'green';
  circle.linewidth = 5;
  console.log(slices);
  for (let i = 0; i < slices; i++) {
      var x1 = radius * Math.cos(i * 2 * Math.PI / slices + Math.PI/2) + x;
      var y1 = radius * Math.sin(i * 2 * Math.PI / slices + Math.PI/2) + y;
      var line = two.makeLine(x, y, x1, y1);
      line.stroke = 'green';
      line.linewidth = 5;
  }
  
  text.value = slices + ' People';
  two.update();
}