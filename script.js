function processArray(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 1000); 
  })
    .then((arr) => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      document.getElementById('output').textContent = evenNumbers.join(',');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(evenNumbers);
        }, 2000);
      });
    })
    .then((evenArr) => {
      const multipliedNumbers = evenArr.map(num => num * 2);
      document.getElementById('output').textContent = multipliedNumbers.join(',');
    });
}

processArray([1, 2, 3, 4]);