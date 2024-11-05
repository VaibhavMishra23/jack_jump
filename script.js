console.log("2nd row 10th button from left to right");

var a;
let score=0;
let jumpedOver = false;
document.getElementById('ball').addEventListener('animationiteration', () => {
    score++;
});
function start(){
    score = 0;
    document.getElementById('ball').classList.add('ballthrow');
    a = setInterval(checkTime,100)
    document.addEventListener('keydown',(e)=>{
        if(e.key=="ArrowUp"){
            document.getElementById('jack').classList.add('jackjump');
            setTimeout(()=>{
            document.getElementById('jack').classList.remove('jackjump');
            },500)
        }
    })
}

function checkTime(){
        const jack = document.getElementById('jack').getBoundingClientRect();
        const ball = document.getElementById('ball').getBoundingClientRect();
    
        const isColliding = !(
            jack.right < ball.left || 
            jack.left > ball.right || 
            jack.bottom-8 < ball.top || 
            jack.top > ball.bottom
        );
    
        if (isColliding) {
            document.getElementById('jack').classList.remove('jackjump');
            document.getElementById('ball').classList.remove('ballthrow');
            clearInterval(a);
            alert(`Score : ${score}`);
        }
}