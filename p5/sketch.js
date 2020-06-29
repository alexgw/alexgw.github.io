function setup() {
  vals = new Values();
  let gui = new dat.GUI();



  gui.add(vals, 'spacing', 3, 300);
  gui.add(vals, 'stroke_Weight', 0.01, 100);
  gui.add(vals, 'chance', 0, 1);

  var f1 = gui.addFolder('colours');
  f1.addColor(vals, 'bg_colour');
  f1.addColor(vals, 'stroke_colour');
  f1.addColor(vals, 'shape_fill');

  gui.add(vals, 'shape1',{ forward_slash: 0, vertical_line: 1, circle: 2, square: 3, dot: 4})
  gui.add(vals, 'shape2',{ backward_slash: 0, horizontal_line: 1, circle: 2, square: 3, dot: 4 })
 
  var f2 = gui.addFolder('styling');
  f2.add(vals, 'stroke_caps',{ Round: 0, Square: 1, Project: 2 })
  f2.add(vals, 'shapes_filled');
  f2.add(vals, 'shape_stroke_off');

  var f3 = gui.addFolder('randomise! - here be dragons');
  f3.add(vals, 'randomise_spacing_per_shape');
  f3.add(vals, 'random_spacing_per_shape_range', 1, 200);
  f3.add(vals, 'randomise_weight_per_shape');
  f3.add(vals, 'random_stroke_per_shape_range', 1, 200);
  f3.add(vals, 'randomise_spacing_per_row');
  f3.add(vals, 'random_spacing_per_row_range', 1, 200);



  createCanvas(600, 600)
 
  button = createButton('Run!');
  button.position(610, 20);
  button.style('font-size', '30px');
  let col = color('#eb2fc8')
  button.style('background-color', col);
    
}

//the draw function runs every frame, 60 times a second
function draw() {
  //ten_print(spacing)
noLoop();
 button.mousePressed(loop);
  
  Ten_print(
    vals.x,
    vals.y,
    vals.spacing,
    vals.stroke_Weight,
    vals.bg_colour,
    vals.stroke_colour,
    vals.shape_fill,
    vals.shapes_filled,
    vals.stroke_caps,
    vals.chance,
    vals.shape1,
    vals.shape2,
    vals.shape_stroke_off,
    vals.randomise_spacing_per_shape,
    vals.random_spacing_per_shape_range,
    vals.randomise_weight_per_shape,
    vals.random_stroke_per_shape_range,
    vals.randomise_spacing_per_row,
    vals.random_spacing_per_row_range
    )
}

function Values(){

  this.x = 0
  this.y = 0


  this.spacing = 30
  this.stroke_Weight = 5

  this.bg_colour = "#FFFFFF"; // CSS string
  this.stroke_colour = "#000000" // RGB array
  this.shape_fill = "#ffae23" // RGB with alpha


  this.shapes_filled = false;

  this.stroke_caps = 2;
  
  this.chance = 0.5

  this.shape1 = 0

  this.shape2 = 0

  this.shape_stroke_off = false

  this.randomise_spacing_per_shape = false

  this.random_spacing_per_shape_range = 50

  this.randomise_weight_per_shape = false

  this.random_stroke_per_shape_range = 10

  this.randomise_spacing_per_row = false

  this.random_spacing_per_row_range = 50
}


function Ten_print(x,y,spacing,stroke_Weight,bg_colour,stroke_colour,shape_fill,shapes_filled,stroke_caps,chance, shape1, shape2,stroke_off, randomise_spacing_per_shape,random_spacing_per_shape_range,randomise_weight_per_shape,random_stroke_per_shape_range,randomise_spacing_per_row,random_spacing_per_row_range){

  clear()

  background(bg_colour)

  strokeWeight(stroke_Weight)

  if(stroke_caps ==0){
  strokeCap(ROUND)
  } else if(stroke_caps == 1){
  strokeCap(SQUARE)
  } else if(stroke_caps == 2){
  strokeCap(PROJECT)
  }

  if(shapes_filled){fill(shape_fill)
  } else {
    noFill()
  }

    
  
  if(stroke_off){noStroke()}
    else{
      stroke(stroke_colour);
    }

  


  for(var i = 0; y < height; i++){
    
    if (random(1) < chance) { //this is option 1
      
      if(shape1 == 0){
        stroke(stroke_colour);
        line(x, y, x + spacing, y + spacing)
      } else if(shape1 == 1){
        stroke(stroke_colour);
        line(x + spacing/2,y,x + spacing/2, y+spacing);
      } else if(shape1 == 2){
        if(stroke_off){noStroke()}
        else{
        stroke(stroke_colour);
        }
        circle(x+spacing/2,y+spacing/2,spacing)
      } else if(shape1 == 3){
        if(stroke_off){noStroke()}
        else{
        stroke(stroke_colour);
        }
        rect(x,y,spacing,spacing)
      } else if(shape1 == 4){
        stroke(stroke_colour);
        point(x + spacing/2,y+spacing/2)
      }
      
    } else { //this is option 2
      if(shape2 == 0){
        stroke(stroke_colour);
        line(x, y + spacing, x + spacing, y)
      } else if(shape2 == 1){
        stroke(stroke_colour);
        line(x,y + spacing/2,x + spacing, y+spacing/2);
      } else if(shape2 == 2){
        if(stroke_off){noStroke()}
        else{
        stroke(stroke_colour);
        }
        circle(x+spacing/2,y+spacing/2,spacing)
      } else if(shape2 == 3){
        if(stroke_off){noStroke()}
        else{
        stroke(stroke_colour);
        }
        rect(x,y,spacing,spacing)
      } else if(shape2 == 4){
        stroke(stroke_colour);
        point(x + spacing/2,y+spacing/2)
      }
  
    }
    
    //move over by the spacing amount before drawing the next line
    x = x + spacing;

  
    if(randomise_spacing_per_shape){
    spacing = random(random_spacing_per_shape_range)
    }

    if(randomise_weight_per_shape){
    strokeWeight(random(random_stroke_per_shape_range))
    }
    

    
    if (x > width) {
      x = 0;
      y = y + spacing;
      if(randomise_spacing_per_row){
      spacing = random(random_spacing_per_row_range)+10
      }
    }

 
  }
  

}