var sentence = prompt("Write a sentence:");
var string = function(sentence){
  var first = sentence.charAt(0).toUpperCase();
  var last = sentence.charAt(sentence.length-1).toUpperCase();
  return first + last;
}

var reverse = function(sentence){
  var first = sentence.charAt(0).toUpperCase();
  var last = sentence.charAt(sentence.length-1).toUpperCase();
  return   last + first;
}
//alert(reverse(sentence));

var newSentence = function (sentence){

  return sentence + reverse(sentence);
}

var fourthFunction = function(sentense) {
  var length = sentence.length/2;
  var letter = sentence.charAt(length-1);
  return letter;

}

var final  = fourthFunction(sentence) + sentence + reverse(sentence);

function reverseString(final) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
alert(reverseStrings(final));
