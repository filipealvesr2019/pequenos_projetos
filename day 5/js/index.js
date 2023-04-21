const images = ['img/image1.png','img/image2.png' ]

const firstImage = [0];
const lastImage = images.length -1;
let currentImage = 0;
// 
const nextBtn = document.getElementById('SE');
nextBtn.addEventListener('click',function(){

    const imagaTag = document.getElementById('image');
    currentImage++;
    if(currentImage >= lastImage){
        currentImage = 1;
    }
    imagaTag.src = images[currentImage];
    
});
//prev
const preBnt = document.getElementById('SD');
preBnt.addEventListener('click', () =>{
    const imagaTag = document.getElementById('image');
    currentImage--;
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    imagaTag.src = images[currentImage];
});