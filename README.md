# FLAMES
This is a fun project based on FLAMES algorithm !!! 

## Table of contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

## Overview
FLAMES : It's game popular among teenagers to know about the relationship status.
There are two steps in this game:

- Take the two names.
- Remove the common characters with their respective common occurrences.
- Get the count of the characters that are left .
- Take FLAMES letters as [“F”, “L”, “A”, “M”, “E”, “S”]
- Start removing letter using the count we got.
- The letter which last the process is the result.


### Screenshot

![](./Flames_ss.png)

### Links

- Solution URL: [https://github.com/mansi05041/FLAMES]
- Live Site URL: [https://flames-pi.vercel.app/]

## My process

To make website i used Bootstrap for form input & apply the game algorithm to get result.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Mobile-first workflow
- Bootstrap

### What I learned

```js
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

```

### Continued development

Improvement in Responsive Area.

### Useful resources

- [w3schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) - This helped me for understanding the media querry.
- [MDN](https://developer.mozilla.org/en-US/) - This is helpful in implementation of javascript.
- [Bootstrap](https://getbootstrap.com/) - This helped in form input.

## Author

- Frontend Mentor - [@mansi05041](https://www.frontendmentor.io/profile/mansi05041)
- Linkedin - [mansi joshi](https://www.linkedin.com/in/mansi-joshi-663aa81a0/)
