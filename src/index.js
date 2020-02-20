exports.min = function min (array) {
  if (array.length == 0 && !array) {
    return 0;
  }  else {
    var minValue = array[0];
    for (let i = 1 ; i < array.length ; i++) {
      if (minValue > array[i]) {
        minValue = array[i];
      }
    }
    return minValue;
  }
}

exports.max = function max (array) {
  if (array === undefined) {
    return 0;
  }  else {
    var maxValue = array[0];
    for (let i = 1 ; i < array.length ; i++) {
      if (maxValue < array[i]) {
        maxValue = array[i];
      }
    }
    return maxValue;
  }
}

exports.avg = function avg (array) {
  if (array == undefined) {
    return 0;
  }  else {
    var sum = 0;
    var averageValue;
    for (let i = 0 ; i < array.length ; i++) {
    sum += array[i];
    averageValue = sum / array.length;
    }
    return averageValue;
  }
}
