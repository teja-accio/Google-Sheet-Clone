//we manage selected options here 
const activeCellElement=document.getElementById("active-cell");

let activeCell=null;
const boldBut=document.getElementById("bold");
const italicBut=document.getElementById("italic");
const underLineBut=document.getElementById("underLined");
const fontSizeInput=document.getElementById("input"); 



const defaultOptionsState={
    fontFamily:"",
    isBoldSelected: false,
    isItalicSelected:false,
    isUnderLineSelected:false,
    textAlign:'left',
    textColor:'#000',
    backGroundColor:'#fff',
    fontSize:14
}
let activeOptionState;
function toggleStyle(button,isSelected){
    if(isSelected){
        button.classList.add("active-items")
    }
    else{
        button.classList.remove("active-items");
    }
}
function changeOnfocus(){
    toggleStyle(boldBut,activeOptionState.isBoldSelected);
    toggleStyle(italicBut,activeOptionState.isItalicSelected);
    toggleStyle(underLineBut,activeOptionState.isUnderLineSelected);

    highlightTextAlignBut(activeOptionState.textAlign);

}


//it is triggered when cell is focused;
function onCellFocus(e){
    if(activeCell && activeCell.id===e.target.id){
        return;
    }
    activeCell = e.target;
    activeCellElement.innerText=e.target.id;

    const computedStyle=getComputedStyle(activeCell);

    activeOptionState={
        fontFamily:computedStyle.fontFamily,
        isBoldSelected: computedStyle.fontWeight==="600",
        isItalicSelected:computedStyle.fontStyle==="italic",
        isUnderLineSelected:computedStyle.textDecoration.includes("underline"),
        textAlign:computedStyle.textAlign,
        textColor:computedStyle.color,
        backGroundColor:computedStyle.backgroundColor,
        fontSize:computedStyle.fontSize
    };

    changeOnfocus();
}

function onClickBold(boldButton) {
    
    boldButton.classList.toggle("active-items");
    if(activeCell){
       
       if(activeOptionState.isBoldSelected===false){
        activeCell.style.fontWeight="600"
       }
       else{
        activeCell.style.fontWeight="400";
       }
       activeOptionState.isBoldSelected=!activeOptionState.isBoldSelected;
    }
}

function onclickItalic(italicButton) {
    
    italicButton.classList.toggle("active-items");
    if(activeCell){
       if(activeOptionState.isItalicSelected){
        activeCell.style.fontStyle="normal";
       }
       else{
        activeCell.style.fontStyle="italic";
       }
       activeOptionState.isItalicSelected=!activeOptionState.isItalicSelected;
    }
}

function onclickUnderLined(underLineBut) {
    
    underLineBut.classList.toggle("active-items");
    if(activeCell){
       if(activeOptionState.isUnderLineSelected){
        activeCell.style.textDecoration="none";
       }
       else{
        activeCell.style.textDecoration="underline";
       }
       activeOptionState.isUnderLineSelected=!activeOptionState.isUnderLineSelected;
    }
}

function highlightTextAlignBut(textAlignValue){
    const textAlignEle=document.getElementsByClassName("align-items");

    for(let i=0;i<textAlignEle.length;i++){
        if(textAlignEle[i].getAttribute("data-value")===textAlignValue){
            textAlignEle[i].classList.add("active-items");
        }
        else{
            textAlignEle[i].classList.remove("active-items");
        }
    }
}

function textAlign(alignBut){
    let selectedButtonText=alignBut.getAttribute("data-value")
    highlightTextAlignBut(selectedButtonText);

    if(activeCell){
        activeCell.style.textAlign=selectedButtonText;
        activeOptionState.textAlign=selectedButtonText;
    }
}

function changeColor(colorInput){
    let selectedColor=colorInput.value;
    if(activeCell){
        activeCell.style.color=selectedColor;
        activeOptionState.color=selectedColor;
    }
}
function changeBgColor(colorInput){
    let selectedColor=colorInput.value;
    if(activeCell){
        activeCell.style.backgroundColor=selectedColor;
        activeOptionState.backGroundColor=selectedColor;
    }
}

fontSizeInput.addEventListener("input",changeSize);

function changeSize(){
    if(activeCell){
        activeCell.style.fontSize=fontSizeInput.value+"px";
        activeOptionState.fontSize=fontSizeInput.value;
    }
}
function changeFamily(fontValue){
    if(activeCell){
        activeCell.style.fontFamily=fontValue.value;
        activeOptionState.fontFamily=fontValue.value;
    }
}
  
    


