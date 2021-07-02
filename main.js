const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cell = document.querySelectorAll(".cell");
let reset = document.querySelector('.reset');





function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }



//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        row.addEventListener("mouseover", changeColor);
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

let n = 0; 

//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
    n++;
    console.log(n);
    
}



defaultGrid();




function removeDivs () {
    document.querySelectorAll('.cell').forEach(e => e.remove()); 
    document.querySelectorAll('.gridRow').forEach(e => e.remove()); 
    
}




function resetAll() {
    removeDivs();
    defaultGrid();

}



reset.addEventListener('click', resetAll);








