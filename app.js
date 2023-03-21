const simple = document.querySelector('.simple');
const hex = document.querySelector('.hex');
const text = document.querySelector('.box').getElementsByTagName('h2')[0];

const hexx = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];


simple.addEventListener('click',()=>{
    const btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        var color_1 = Math.floor(Math.random()*255);
        var color_2 = Math.floor(Math.random()*255);
        var color_3 = Math.floor(Math.random()*255);

        var color = `rgb(${color_1},${color_2},${color_3})`;
        text.textContent = color;



        document.body.style.backgroundColor = color;

    });
})

hex.addEventListener('click',()=>{
    const btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{

        var color = '#';
        for(var i =0;i<6;i++){
            color += hexx[Math.floor(Math.random()*11)]
        }
        text.textContent = color;



        document.body.style.backgroundColor = color;

    });
})