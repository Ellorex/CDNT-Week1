$(document).ready(function() {
    var flaggif = true;
    $(document).keydown(function(key){ 
    console.log(key.which);
        switch(parseInt(key.which,10)) {
            case 39 :
            if(flaggif == true) {
                $('.mario').attr('src', 'mario/img/mario.gif');
                flaggif = false;
            }
                $('.mario').css({left: '+=20px'}, 'fast');
                $('.mario').css({
                    transform: 'scaleX(+1)',
                    MozTransform: 'scaleX(+1)',
                    WebkitTransform: 'scaleX(+1)',
                    msTransform: 'scaleX(+1)'
                    });  
                break;
            case 37 :
            if(flaggif == true) {
                $('.mario').attr('src', 'mario/img/mario.gif');
            }
            $('.mario').css({left: '-=20px'}, 'fast');
            $('.mario').css({
                    transform: 'scaleX(-1)',
                    MozTransform: 'scaleX(-1)',
                    WebkitTransform: 'scaleX(-1)',
                    msTransform: 'scaleX(-1)'
                }); 
            break; 
            case 32: 
            $('.mario').attr('src', 'mario/img/mario_jump.png');
            $('.mario').animate({top:["-=120", "swing"],left:["+=60", "swing"]},100);
            $('.mario').animate({top:["+=120", "swing"],},100);
            $('.mario').attr('src', 'mario/img/mario.gif');
            const saut = document.querySelector('#saut');
            saut.currentTime = 0;
            saut.play();
            break;
        }
    });
    $(document).keyup(function(key){
        switch(parseInt(key.which,10)) {
            case 39 :
            $('.mario').attr('src', 'mario/img/marios.png');
            flaggif = true;
           
            break;
            case 37 :
            $('.mario').attr('src', 'mario/img/marios.png');
            flaggif = true;
            break;

            case 32 :
            $('.mario').attr('src', 'mario/img/marios.png');
            break;
        }
        key.stopPropagation();
    });
});  

//Keydown
// case 38 : 
// $('img').attr('src', 'mario/img/mario.gif');
// $('img').css({top: '-=20px'}, 'fast');
// break;   
// case 40 : 
// $('img').attr('src', 'mario/img/mario.gif');
// $('img').css({top: '+=20px'}, 'fast');
// $('img').attr('src', 'mario/img/marios.png');
// break;   
            
            
//Keyup        
// case 38 :
// $('img').attr('src', 'mario/img/marios.png');
// break;
// case 40 :
// $('img').attr('src', 'mario/img/marios.png');
// break;