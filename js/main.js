;(function(){
  var link=document.getElementsByTagName("a")[0];
  link.onclick=function(){

    Tutsplus.ajax('files/ajax.txt',{
      method:"GET",
      complete:function(response){
        alert(response);
      }
    });

    return false;
  };
})();
