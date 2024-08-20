function setup() {
    createCanvas(600, 600);
    background("white");
}


function drawn() { 

    strocke ("blue");
    Fill ("red");


    //console.log(mouseIspressed);

    if (mouseIspressed){
        Rect(mouseX, mouseY,20,35);
    }