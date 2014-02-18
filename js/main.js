;(function(){
  var link=document.getElementsByTagName("a")[0];
  link.onclick=function(){
    var xhr=new XMLHttpRequest();

    xhr.onreadystatechange=function(){
        if((xhr.readyState==4)&&(xhr.status==200 || xhr.status==304)){
          var body=document.getElementsByTagName("body")[0];
          var heading=xhr.responseXML.getElementsByTagName("heading")[0].firstChild.nodeValue;
          var h2=document.createElement("h2");
          var h2Text=document.createTextNode(heading);
          h2.appendChild(h2Text);

          var list=document.createElement("ul");
          var items=xhr.responseXML.getElementsByTagName("items")[0];

          items=items.getElementsByTagName("item");
          for(var i=0;i<items.length;i++){
            var item=items[i].firstChild.nodeValue;
            var li=document.createElement("li");
            var liText=document.createTextNode(item);
            li.appendChild(liText);
            list.appendChild(li);
          }

          body.appendChild(h2);
          body.appendChild(list);

          body.removeChild(link);
        }
    };

    xhr.open("GET","files/ajax.xml",true);
    xhr.send(null);

    return false;
  };
})();
