const array_chunk = (arr, size) => {
  var i,j = arr.length,
  tempArray = [];
  
  for (i=0; i<j; i+=size) {
      tempArray.push(arr.slice(i,i+size));
  }
  
  return tempArray
}

export default array_chunk