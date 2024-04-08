{
  const arr = [0, 123, -456 * 100];
  console.log(arr);

  const arr1 = [4, 5, 6];
  const arr2 = [1, 2, 3, ...arr1];
  console.log(arr2);

  const arr3 = [1, 10, 100];
  arr3.push(1000);
  console.log(arr3);

  // 3.5.6
  const arr4 = [1, 10, 100];
  for (const elm of arr4) {
    console.log(elm);
  }
}