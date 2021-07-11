//hiding the result section
document.querySelector("#result").style.display="none";

//on clicking the button
function result(){
  var sentence = document.querySelector(".status");
  if ((document.querySelector(".name1").value === "")||(document.querySelector(".name2").value === "")){
    sentence.innerHTML = "Invalid Inputs!!!!";
  }
  else{
    //algorithm of game
    var arr = ["F","L","A","M","E","S"];
    const name1 = document.querySelector(".name1").value.toLowerCase().split("");
    const name2 = document.querySelector(".name2").value.toLowerCase().split("");
    //deleting common words
    for (var i = 0; i<name1.length; i++){
      for (var j = 0; j<name2.length; j++){
        if (name1[i]===name2[j]){
        name1.splice(i,1);
        name2.splice(j,1);
        }
      }
    }
    //removing extra spaces
    if (name1.includes(" ")===true){
      name1.splice(name1.indexOf(" "),1);
    }
    if (name2.includes(" ")===true){
      name2.splice(name2.indexOf(" "),1);
    }
    var total = name1.length + name2.length;
    var counter = 0;
    //getting status
    while(arr.length!==1){
      if (arr.length<total){
        var rem = total%arr.length;
        arr.splice(rem-1,1);
        counter=rem-1;
      }
      else if(arr.length===total){
        arr.pop();
        counter=0;
      }
      else{
        arr.splice(total-1,1);
        counter=total-1;
      }
      if (counter<0){
        counter=0;
      }
      if (counter!==0){
        const arr1 = arr.slice(0,counter);
        const arr2 = arr.slice(counter,arr.length);
        arr = arr2.concat(arr1);
      }
    }
    var status = arr.toString();
    if (status==="F"){
      sentence.innerHTML = "FRIENDS";
    }
    if (status==="L"){
      sentence.innerHTML = "LOVE";
    }
    else if (status==="A"){
      sentence.innerHTML = "AFFECTION";
    }
    else if (status==="M"){
      sentence.innerHTML = "MARRIAGE";
    }
    else if (status==="E"){
      sentence.innerHTML = "ENEMY";
    }
    else{
      sentence.innerHTML = "SIBLINGS";
    }
  }

  //display the result
  location.href = "#result";
  document.querySelector("#result").style.display="block";

  //clearing the input
  document.querySelector(".name1").value = "";
  document.querySelector(".name2").value = "";
}
