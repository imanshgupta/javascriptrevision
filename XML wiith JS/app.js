function load() {
    var pro = new XMLHttpRequest();
    pro.onreadystatechange = () => {
        //onsreadystatechange ---property
        if (this.readyState = 4 && this.status == 200) { //response is ready
            myfunction(this)
        }
    };
    pro.open("GET", "data.xml", true);
    pro.send();
}
function myfunction(xml) {
    let i;
    var xml = xml.responseXML;
    var table = "<tr><th>USN</th><th>USN</th></tr>"
    var x = xmlDoc.getElementsByTagName("student")
    x.forEach(element => {
    });

}