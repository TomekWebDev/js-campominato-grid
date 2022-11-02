

//variabile per collegare il contenitore principale
let gridContainer = document.getElementById("grid-container")
// gridContainer.innerHTML = "";

function createSquare(num){
    let cell = document.createElement("div")
        cell.classList.add("cell", "border", "border-1", "border-dark", "d-flex", "justify-content-center", "align-items-center", "p-0", 'text-lg')
        cell.innerText = num
        return cell;
}

for(i = 1; i <= 100; i++){
    let thisSquare = createSquare(i);
    thisSquare.addEventListener("click", function activateSquare(){
    console.log(this);
    this.classList.toggle("active")
    })

    console.log(thisSquare.innerText);

    gridContainer.append(thisSquare)
}