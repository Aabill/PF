function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }


document.getElementById('about').addEventListener('click', function(){
    loadDoc('htmls/about.txt', About);
    $('#about').attr('class','active');
});


function About(xhttp){
    document.getElementById('here').innerHTML = xhttp.responseText;
}

$(document).ready(function(){
    loadDoc('htmls/about.txt', About);
    $('#about').attr('class','active');
});