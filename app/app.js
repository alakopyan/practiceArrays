let select = document.getElementById('selectOption')

function btnFunction() {
    const val = document.getElementById('numb').value;
    select.options[select.selectedIndex].text = val;
}

function myFunction() {
    const selOpt = document.getElementById("selectOption").value;
    document.getElementById("numb").value = selOpt;
}
