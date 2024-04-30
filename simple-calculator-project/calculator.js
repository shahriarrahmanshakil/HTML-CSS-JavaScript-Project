function calculateValue(NewValue){
    document.getElementById("calculate-result").value += NewValue;
}

function deleteValue(){
    document.getElementById('calculate-result').value = "";
}

function result(){
    var a = document.getElementById('calculate-result').value;
    var result = eval(a);
    document.getElementById('calculate-result').value = result;
}