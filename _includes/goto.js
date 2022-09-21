document.getElementById("go-now").addEventListener("click", goToHymn);


function goToHymn() {
    var hymnNumber = document.getElementById("number").value;
    var link = "hymns/" + hymnNumber + ".html";
    window.location.href = link;
}