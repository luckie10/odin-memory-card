function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function swapArrayElements(array, one, two) {
  const temp = array[one];
  array[one] = array[two];
  array[two] = temp;
  return array;
}

export function shuffleArray(array, swapIndex = array.length - 1) {
  if (swapIndex <= 0) return array;

  const target = getRandomInt(0, swapIndex);

  return shuffleArray(
    swapArrayElements(array, swapIndex, target),
    swapIndex - 1,
  );
}
