console.log('Loaded!');
var my = document.getElementById('my'
    );
var img = document.getElementById('pic'
    );
var marginBottom = 0;
function moveRight(){
    marginBottom = marginBottom + 4;
    img.style.marginBottom = marginBottom + 'px';
}
my.onclick = function(){
     var interval = setInterval(moveRight,50); 
    };