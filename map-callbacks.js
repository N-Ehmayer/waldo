var words = ["ground", "control", "to", "major", "tom"];

function map(list, mapper) {
  var output = [];
  list.forEach(function(item) {
     return output.push(mapper(item));
    //return output;
  });
  console.log(output);
}









map(words, function(word) {
  return word.length;
});


map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
