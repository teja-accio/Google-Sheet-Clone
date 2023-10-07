const header=document.getElementById("header");
const body=document.getElementById("body");

//for creating header
for(let i=65;i<=90;i++){

    let char=String.fromCharCode(i);

    const bold=document.createElement("b");
    bold.innerText=char;

    header.appendChild(bold);
}

//function to create row
function  createRowElemnt(rowNo){
const row=document.createElement("div");
row.className="row";

for(let i=64;i<=90;i++){
    if(i===64){
        const bold=document.createElement("b");
        bold.innerText=rowNo;
        row.appendChild(bold);
    }
    else{
        const div=document.createElement("div");
        div.id=`${String.fromCharCode(i)}${rowNo}`;
        div.contentEditable="true";
        div.addEventListener("focus",onCellFocus)
        row.appendChild(div);
    }
}
body.appendChild(row);
}

//calling to create row
for(let i=1;i<=100;i++){
createRowElemnt(i);
}