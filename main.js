const container = document.querySelector('.container');
let rows = document.querySelector('.gridRow')
let cells = document.querySelector('.cell')


for (i=0; i<256; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    container.appendChild(gridDiv);

}

function grid() {
    makeRows();
    makeColumns();
}