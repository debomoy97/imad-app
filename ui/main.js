console.log('Loaded!');
var img = document.getElementById('pic'
    );
var marginTop = 0;
function moveRight(){
    marginTop = marginTop + 4;
    img.style.marginTop = marginTop + 'px';
}
img.onclick = function(){
     var interval = setInterval(moveRight,50); 
    };