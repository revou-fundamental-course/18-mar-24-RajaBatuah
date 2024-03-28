var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
     showDivs((slideIndex += n))
}

function showDivs(n) {
     var i;
     var imgList = document.getElementsByClassName("img-slideshow");
     if (n > imgList. length) slideIndex=1
     else if (n < 1) slideIndex = imgList. length
     for(i = 0; i < imgList. length; i++) {
          imgList[i].style.display = "none"
     }
     imgList[slideIndex - 1].style.display ="block"
 }
 setInterval(() => {
     plusDivs(1);
 }, 3000);



function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction() {
     // Get the value of the input field with id="numb"
     let x = document.getElementById("numb").value;
     // If x is Not a Number or less than one or greater than 10
     let text;
     if (isNaN(x) || x < 18 || x > 100) {
       text = "Input not valid";
     } else {
       text = "Input OK";
     }
     document.getElementById("demo").innerHTML = text;
   }

