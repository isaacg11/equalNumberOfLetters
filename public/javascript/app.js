
function XO (str) {
  var co = 0;
  var cx = 0;
  var x = str.split("");

  for(var i=0;i<x.length;i++){
    if (x[i]==='o'){
      co=co+1;
    }
    else if(x[i]==="x"){
      cx = cx+1;
    }
  }
  if(co===cx){
    return true;
  }
  else{
    return false;
  }
}
console.log(XO("xooo"));