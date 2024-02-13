function calculatePentagonArea(){
    const perimeter = getInputValueId('pentagon-perimeter');
    const apothem = getInputValueId('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    console.log(area);

    setInnerTextById('pentagon-area', area)
}

function getInputValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = inputValueText;
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}