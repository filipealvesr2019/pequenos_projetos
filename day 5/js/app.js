const img = ['img/img1.png','img/img2.png' ]

const firstI = [0];
const lastI = img.length -1;
let currentI = 0;
// 
const nextB = document.getElementById('setaE');
nextB.addEventListener('click',function(){

    const imagaT = document.getElementById('mg');
    currentI++;
    if(currentI >= lastI){
        currentI = 1;
    }
    imagaT.src = img[currentI];
    
});
//prev
const preB = document.getElementById('setaD');
preB.addEventListener('click', () =>{
    const imagaT = document.getElementById('mg');
    currentI--;
    if(currentI <= firstI){
        currentI = 0;
    }
    imagaT.src = img[currentI];
});