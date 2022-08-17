function preload()
{
}

function setup()
{
    canvas = createCanvas(650,490);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    
    
}


function draw()
{   
   
    
    image(video , 0,0 , 650 ,490);
    
    ellipse(650,0,100,100);
    ellipse(10,0,100,100);
    ellipse(0,490,100,100);
    ellipse(650,490,100,100);
    
    
}
function take_snapshot()
{
    save('student_name.png');
}


