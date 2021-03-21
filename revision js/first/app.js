var pgct = 1;
var conatiner = document.getElementById("ansh")
var btnn = document.getElementById("btn");
btnn.addEventListener("click", () => {
    var obj = new XMLHttpRequest();
    obj.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pgct + ".json", true)
    var data;
    obj.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(obj.responseText);
            addhtml(data);
        }
        else {
            alert("CONNECTION FAILURE")
        }
    }
    obj.send();
    pgct++
    if (pgct > 3) {
        btnn.classList.add("remove");
    }
});
function addhtml(data) {
    var i;
    var string1 = ""
    for (i = 0; i < data.length; i++) {
        string1 += "<p>" + "my name is   " + data[i].name + "  and i am a  " + data[i].species + "</p><br><br>"
    }
    console.log(string1)
    conatiner.insertAdjacentHTML("beforeend", string1)
}

