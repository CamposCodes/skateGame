let character = document.querySelector('#character');
let block = document.querySelector('#block');
let startButton = document.querySelector('.start');

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
    },500);
}
function start(){
    if(block.classList != 'animateStart'){
        block.classList.add('animateStart');
    }
}

function flip(){
    if(character.classList != 'animateFlip'){
        character.classList.add('animateFlip');
    }
    setTimeout(function(){
        character.classList.remove('animateFlip');
    },500);
}

function varial(){
    if(character.classList != 'animateVarial'){
        character.classList.add('animateVarial');
    }
    setTimeout(function(){
        character.classList.remove('animateVarial');
    },500);
}
function shoveit(){
    if(character.classList != 'animateShov'){
        character.classList.add('animateShov');
    }
    setTimeout(function(){
        character.classList.remove('animateShov');
    },500);
}



let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 200){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('LOSE!')
        location.reload();
    }
},10);


character.addEventListener('click', jump);
startButton.addEventListener('click', start);

let bgHome = document.querySelector('#home');
let bgCity = document.querySelector('#city');
let bgSkatepark = document.querySelector('#skatepark');
let game = document.querySelector('#game')

bgHome.addEventListener('click', ()=>{
    game.style.background = 'var(--bgcolorh)';
});
bgCity.addEventListener('click', ()=>{
    game.style.background = 'var(--color3)';
});
bgSkatepark.addEventListener('click', ()=>{
    game.style.background = 'var(--color4)';
});

// ESPAÇO PARA CHARACTER PULAR
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var ArrowDown = codigoTecla == 40;
    if (ArrowDown) {
        jump();
    }
  });
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var arrowUp = codigoTecla == 38;
    if (arrowUp) {
        flip();
    }
  });
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var ArrowRight = codigoTecla == 39;
    if (ArrowRight) {
        varial();
    }
  });
window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var ArrowLeft = codigoTecla == 37;
    if (ArrowLeft) {
        shoveit();
    }
  });