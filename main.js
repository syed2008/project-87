var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
superhero_image_width = 30;
superhero_image_height = 30;
var superhero = "";
var superhero_image = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        superhero_object = Img;
        superhero.scaleToWidth(150);
        superhero.scaleToHeight(140);
        superhero.set({
            top: player_y,
            left:player_x
        });
        canvas.add(superhero);

    
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        superhero_image = Img;
        superhero_image.scaleToWidth(superhero_image_width);
        superhero_image.scaleToHeight(superhero_image_height);
        superhero_image.set({
            top: player_y,
            left:player_x
        });
        canvas.add(superhero_image);

    
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        superhero_image_width = superhero_image_width + 10;
        superhero_image_height = superhero_image_height + 10;
        document.getElementById("current_width").innerHTML = superhero_image_width;
        document.getElementById("current_height").innerHTML = superhero_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        superhero_image_width = superhero_image_width - 10;
        superhero_image_height = superhero_image_height - 10;
        document.getElementById("current_width").innerHTML = superhero_image_width;
        document.getElementById("current_height").innerHTML = superhero_image_height;
    }
    if(keyPressed == '38'){
        //up();
         console.log("up");
     }
     if(keyPressed == '40'){
         //down();
        console.log("down");
    }
    if(keyPressed == '37'){
       //left();
        console.log("left");
    }
    if(keyPressed == '39'){
       //right();
        console.log("right");
    }
    if (keyPressed == '73'){
        new_image('https://pngimg.com/uploads/ironman/ironman_PNG13.png');
        console.log("i");
    }
    if (keyPressed == '83'){
        new_image('spiderman_body.png');
        console.log("s");
    }
    if (keyPressed == '72'){
        new_image('hulk_legs.png');
        console.log("h");
    }
    if (keyPressed == '67'){
        new_image('captain_america_left_hand.png');
        console.log("c");
    }
    if (keyPressed == '84'){
        new_image('thor_right_hand.png');
        console.log("t");
    }
}