console.log('Loaded!');
var img = document.getElementById('pic'
    );
var marginBottom = 0;
function moveRight(){
    marginBottom = marginBottom + 4;
    img.style.marginBottom = marginBottom + 'px';
}
img.onclick = function(){
     var interval = setInterval(moveRight,50); 
    };