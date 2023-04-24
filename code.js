sketchpad = document.querySelector('#sketchpad');

MAX = 10;

for(i = 0; i < MAX; i++){
    div = document.createElement('div');
    div.classList.add('sketch');
    div.style.width = '10px';
    div.style.height = '10px';
    div.textContent = 'O';

    sketchpad.appendChild(div);
    console.log(i)
}