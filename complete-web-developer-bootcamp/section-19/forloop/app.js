// console.log('hello');

for (let outer = 1; outer <= 5; outer++) {
  console.log(`outer is: ${outer}`);
  for (let inner = 1; inner <= 3; inner++) {
    console.log(`   inner is: ${inner}`);
  }
}
