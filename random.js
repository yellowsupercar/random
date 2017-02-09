var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
makeRect(0, 0, 200, 80, "cyan", 1)
makeRect(0, 80, 200, 50, "green", 1)
makeRect(50, 40, 15, 50, "brown", 1)
makeCircle(53, 40, 19, "green", 1)
makeCircle(65, 40, 13, "green", 1)
makeCircle(200, 10, 10, "yellow", 1)
makeRect(80, 40, 15, 50, "brown", 1)
makeRect(120, 40, 15, 50, "brown", 1)
makeRect(30, 40, 15, 50, "brown", 1)
makeCircle(73, 40, 19, "green", 1)
makeCircle(75, 40, 13, "green", 1)
makeCircle(100, 40, 19, "green", 1)
makeCircle(85, 40, 13, "green", 1)
makeCircle(33, 40, 19, "green", 1)
makeCircle(45, 40, 13, "green", 1)
makeCircle(130, 40, 19, "green", 1)
makeCircle(124, 40, 13, "green", 1)
makeCircle(149, 40, 19, "green", 1)
makeCircle(130, 40, 13, "green", 1)
makeRect(10, 40, 15, 50, "brown", 1)
makeRect(158, 40, 15, 50, "brown", 1)
makeCircle(160, 40, 19, "green", 1)
makeCircle(9, 40, 19, "green", 1)
makeRect(157, 40, 15, 50, "brown", 1)
makeRect(137, 35, 15, 50, "brown", 1)
makeCircle(137, 30, 19, "green", 1)
makeRect(100, 35, 15, 50, "brown", 1)
makeCircle(110, 30, 20, "green", 1)
makeCircle(20, 37, 20, "green", 1)
makeCircle(40, 30, 20, "green", 1)
makeCircle(160, 30, 20, "green", 1)
makeCircle(60, 30, 20, "green", 1)
makeCircle(76, 30, 20, "green", 1)
makeRect(186, 70, 4, 10, "brown", 1)
makeRect(180, 61, 15, 10, "brown", 1)
makeText("Forest", 180, 70, 6, "black", 1)
makeCircle(180, 35, 17, "green", 1)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0, 0, 200, 80, "blue", 1)
makeRect(0, 80, 200, 50, "orange", 1)
makeImage("http://il7.picdn.net/shutterstock/videos/9232466/thumb/1.jpg", 82, 27, 39, 29, 1)
makeImage("http://vignette4.wikia.nocookie.net/depth-game/images/6/6b/Depth-Bonus-BattleScarred-clean.png/revision/latest?cb=20141209232207", 140, 27, 40, 31, 1)
makeRect(120, 30, 3, 23, "grey", 1)
makeRect(110, 30, 3, 23, "grey", 1)
makeRect(100, 30, 3, 23, "grey", 1)
makeRect(90, 30, 3, 23, "grey", 1)
makeRect(80, 30, 3, 23, "grey", 1)
makeRect(80, 30, 43, 3, "grey", 1)
makeRect(80, 50, 43, 3, "grey", 1)
makeRect(100, 0, 3, 40, "grey", 1)






// Make a cage dude.






  
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
   makeRect(0, 0, 200, 80, "cyan", 1)
makeRect(0, 80, 200, 50, "orange", 1)
makeCircle(190, 10, 30, "yellow", 1)
makeRect(60, 40, 15, 50, "green", 1)
makeRect(74, 60, 15, 10, "green", 1)
makeRect(80, 55, 15, 10, "green", 1)
makeRect(55, 70, 15, 10, "green", 1)



}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var random= Math.random() 
    // If the number is less than 0.33, call the function to create your first scene.
    if(random<0.33) {
        createFirstScene()
    } else {
        if(random<0.67) {
            createSecondScene()
        }
         else createThirdScene()
            }
}
        
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
   
    
    // Else, call the function to create your third scene.
        




// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}