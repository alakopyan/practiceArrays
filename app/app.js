let e = document.getElementById('selectOption')

function btnFunction() {
    const val = document.getElementById('numb').value;
    let strUser = e.options[e.selectedIndex].text = val;
}

function myFunction() {
    const selOpt = document.getElementById("selectOption").value;
    document.getElementById("numb").value = selOpt;
}