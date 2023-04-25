sketchpad = document.querySelector('#sketchpad');

MAX = 16*16;

for(i = 0; i < MAX; i++){
    div = document.createElement('div');

    i % 2 == 0 ? div.classList.add('sketch') : div.classList.add('sketch1');

    div.style.width = '10px';
    div.style.height = '10px';

    sketchpad.appendChild(div);
    console.log(i)
}