;(function(){
  var link=document.getElementsByTagName("a")[0];
  link.onclick=function(){
    var xhr=new XMLHttpRequest();

    xhr.onreadystatechange=function(){
        if((xhr.readyState==4)&&(xhr.status==200 || xhr.status==304)){
          var body=document.getElementsByTagName("body")[0];
          var p=document.createElement("p");
          var pText=document.createTextNode(xhr.responseText);
          p.appendChild(pText);
          body.appendChild(p);
        }
    };

    xhr.open("GET","files/ajax.txt",true);
    xhr.send(null);

    return false;
  };
})();
