function primeNumebr(num) {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return "It's Not Prime Number";
    }
  }

  return "It is a prime Number";
}

console.log(primeNumebr(11));
