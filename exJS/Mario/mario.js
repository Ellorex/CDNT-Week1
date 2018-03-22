$(document).ready(function() {
    $(document).keydown(function(key){ 
    console.log(key.which);
        switch(parseInt(key.which,10)) {
            case 39 :
                $('img').animate({left: '+=20px'}, 'fast');
                $('img').css({
                    transform: 'scaleX(+1)',
                    MozTransform: 'scaleX(+1)',
                    WebkitTransform: 'scaleX(+1)',
                    msTransform: 'scaleX(+1)'
                    });  
                break;
            case 37 :
            $('img').animate({left: '-=20px'}, 'fast');
            $('img').css({
                    transform: 'scaleX(-1)',
                    MozTransform: 'scaleX(-1)',
                    WebkitTransform: 'scaleX(-1)',
                    msTransform: 'scaleX(-1)'
                });  
            break; 
            case 38 : 
            $('img').animate({top: '-=20px'}, 'fast')
            break;   
            case 40 : 
            $('img').animate({top: '+=20px'}, 'fast')
            break; 
            case 32: 
            $('img').animate({top:["-=100", "swing"],},100);
            $('img').animate({left:["+=45", "swing"],},100);
            $('img').animate({top:["+=100", "swing"],},100);
            break;
        }
    });
});
// function playSound(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if(!audio) return;
//     audio.currentTime = 0;
//     audio.play();    
//     key.classList.add('playing');   
// }