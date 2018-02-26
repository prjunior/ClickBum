function addBall(){
    //creates element on screen
    var ball = document.createElement("div");
    //set attributes for the element
    ball.setAttribute("class", "ball");
    
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    ball.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    
    ball.setAttribute("onclick", "bum(this)");
    
    document.body.appendChild(ball);
}
function bum(element){
    document.body.removeChild(element);
}
function start(){
    setInterval(addBall,1000);
}