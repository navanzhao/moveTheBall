let field = document.querySelector('.field');
let showPosition = document.querySelector('.showPosition');
let ball = document.querySelector('.football');
field.addEventListener('click', (e)=>{
    
    let top = e.offsetY - 30;
    let left = e.offsetX - 30;
    if(top < 0 ){
        top = 0;
    } 
    if(top > 240){
        top = 240;
    }
    if(left < 0){
        left = 0;
    }
    if(left > 340){
        left = 340;
    }
    
    showPosition.textContent = `
    offsetX: ${e.offsetX}
    offsetY: ${e.offsetY}
    top: ${top}
    left: ${left}`;
    moveTheBall(left, top);



    
    // console.log(ball.style);
})

//calculate the ball's position
//球的半径是30px
//一开始球的位置是0，0  
// top = offsetY - 30px
// left = offsetX - 30px 
// if(top<0 || left<0) top = 0 left =0
// if(top>340 || left>240) top = 340 left = 240 

function moveTheBall(x, y){
    ball.style.transform = `translate(${x}px, ${y}px)`;
}
