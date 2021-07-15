//hiding the result section
document.querySelector("#result").style.display = "none";

//on clicking the button
function result() {
  if ((document.querySelector(".name1").value === "") || (document.querySelector(".name2").value === "")) {
    alert("Invalid inputs!!!");
  }

  //algorithm of game
  else {
    const name1 = document.querySelector(".name1").value.toLowerCase().split("");
    const name2 = document.querySelector(".name2").value.toLowerCase().split("");

    //deleting common words
    for (var i = 0; i < name1.length; i++) {
      for (var j = 0; j < name2.length; j++) {
        if (name1[i] === name2[j]) {
          name1.splice(i, 1, "$");
          name2.splice(j, 1, "$");
        }
      }
    }

    //removing extra spaces
    var name = name1.concat(name2);
    for (i = 0; i < name.length; i++) {
      if (name1[i] === " ") {
        name.splice(i, 1);
      }
    }

    //counting total words in both names
    var total = 0;
    for (i = 0; i < name.length; i++) {
      if (name[i] !== '$') {
        total += 1;
      }
    }

    //function for get_concat
    function get_concat(a,c){
      var a1=a.slice(0,counter);
      var a2=a.slice(counter,a.length);
      return(a2.concat(a1));
    }

    //getting status
    var arr = ["F","L","A","M","E","S"];
    var counter =0;
    var place ="X"; // counter index value
    while (arr.length!==1){
      if (counter!==0){
        arr= get_concat(arr,counter);
        counter=0;
      }
      if (total===arr.length){
        arr.splice(arr.length-1,1," ");
        counter =0;
      }
      if (total<arr.length){
        var s = total-1;
        while(s<arr.length){
          counter = s+1;
          arr.splice(s,1," ");
          s+=total;
        }
        if (counter>=arr.length){
          counter=0;
        }
      }
      if (total>arr.length){
        var r = total%arr.length;
        if (r===0){
          arr.splice(arr.length-1,1," ");
          counter=0;
        }
        else{
          counter = r;
          arr.splice(r-1,1," ");
        }
      }
      place = arr[counter];

      //remove spaces
      for (i=0; i<arr.length; i++){
        if (arr[i]===" "){
          arr.splice(i,1);
        }
      }

      //counter update
      counter = arr.indexOf(place);
    }

    //getting message
    var status = arr.toString();
    var message = " ";
    switch (status) {
      case "F":
        message = "Friends";
        break;
      case "L":
        message = "In Love";
        break;
      case "A":
        message = "Attracted to each other";
        break;
      case "M":
        message = "Married";
        break;
      case "E":
        message = "Enemies";
        break;
      case "S":
        message = "Siblings";
        break;
      default:
        message = "In No Relationship";
    }

    //display the proper message
    document.querySelector(".person1").innerHTML = document.querySelector(".name1").value;
    document.querySelector(".person2").innerHTML = document.querySelector(".name2").value;
    document.querySelector(".status").innerHTML = message;

    //display the result section
    location.href = "#result";
    document.querySelector("#result").style.display = "block";
  }

  //clearing the input
  document.querySelector(".name1").value = "";
  document.querySelector(".name2").value = "";
}
