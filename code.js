sketchpad = document.querySelector('#sketchpad');

side = 16;

for(i = 0; i < side**2; i++){
    div = document.createElement('div');

    i % 2 == 0 ? div.classList.add('sketch') : div.classList.add('sketch1');

    size = (400/side).toString() + 'px'

    div.style.width = size;
    div.style.height = size;

    sketchpad.appendChild(div);
    console.log(i)
}