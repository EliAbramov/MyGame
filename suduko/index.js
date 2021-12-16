
// three different boards
const db = [
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [1,1,1],
        [1,1,1],
        [1,1,1]
    ],
    [
        [5,5,5],
        [5,5,5],
        [5,5,5]
    ]
]
var saveBoard

function initSuduko(lv){

    // debugger
    rnd = getRandom()
    saveBoard = db[rnd]
    document.getElementById("message").innerHTML = "";

    for(let row = 0 ; row < saveBoard.length ; row++){
        for(let col = 0 ; col < saveBoard.length ; col++){
            let e = document.getElementById(`td${row}${col}`);
            e.value = saveBoard[row][col]
            e.disabled = true
            e.style.backgroundColor = "white"
        }
    }

    for(let i = 0 ; i < lv ; i++){
        rowRnd = getRandom()
        colRnd = getRandom()
        if(document.getElementById(`td${rowRnd}${colRnd}`).value != ''){
            document.getElementById(`td${rowRnd}${colRnd}`).value = ''
            document.getElementById(`td${rowRnd}${colRnd}`).disabled = false
        }
        else{
            i--
        }
    }

    document.getElementById('checkBtn').disabled = false

}

function check(){
    let flag = true;
    for(let row = 0 ; row < saveBoard.length ; row++){
        for(let col = 0 ; col < saveBoard.length ; col++){
            let e = document.getElementById(`td${row}${col}`);
            if(e.value != saveBoard[row][col]){
                e.style.backgroundColor = "red"
                flag = false;
            } else {
                e.style.backgroundColor = "white"
            }
        }
    }
    let e = document.getElementById("message");
    flag ? e.innerHTML = "GREAT, YOU WIN!" : e.innerHTML = "TRY AGAIN!"
}


function getRandom() {
    return Math.floor(Math.random()*3)
}