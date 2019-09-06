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
    $('#about').attr('class','');
    $('#skills').attr('class','inactive');
    $('#projects').attr('class','inactive');
});
document.getElementById('skills').addEventListener('click', function(){
    loadDoc('htmls/skills.txt', About);
    $('#skills').attr('class','');
    $('#about').attr('class','inactive');
    $('#projects').attr('class','inactive');
});
document.getElementById('projects').addEventListener('click', function(){
    loadDoc('htmls/projects.txt', About);
    $('#projects').attr('class','');
    $('#about').attr('class','inactive');
    $('#skills').attr('class','inactive');
});


function About(xhttp){
    document.getElementById('here').innerHTML = xhttp.responseText;
}

$(document).ready(function(){
    
    loadDoc('htmls/home.txt', About);
    $('#about').attr('class','inactive');
    $('#skills').attr('class','inactive');
    $('#projects').attr('class','inactive');
    if(window.innerWidth >= 768){
      $('.nav').show();
    }
});

var burger = 0;
$('.nav-burger').click(function(){
  burger++;
  if(burger > 1){
    $('.nav').hide();
    burger=0;
    return;
  }else{
  $('.nav').show();
}
});

$('.nav-min').click(function(){
  if(window.innerWidth >= 768){}else{
    $('.nav-burger').click();
  }
});

window.onresize  =  () => {
  if(window.innerWidth >= 768){
    $('.nav').show();
  }else{
    $('.nav').hide();
    burger = 0;
  }
}