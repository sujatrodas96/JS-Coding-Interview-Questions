//Q11. Remove White Spaces From String

function removewhitespace(str){

  let removewhitespacestr = str.split(' ').join('');
  return removewhitespacestr;
}

console.log(removewhitespace(" Interview "));