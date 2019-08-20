$(document).ready(function(){
  $(".formOne").submit(function(){
    event.preventDefault();
 var sentence = $("input#sentence").val();
 var sentenceString = sentence.split("");
 var vowels = ["a", "e", "i", "o", "u"];
 var newArray = [];

// console.log(sentenceString);
for (var i = 0; i < sentenceString.length; i++) {
  console.log(sentenceString[i]);
      if (vowels.includes(sentenceString[i])) {
        newArray.push("-");

      } else {
        newArray.push(sentenceString[i]);
        // console.log("working")
      }

    }
console.log(newArray);

  });
});
