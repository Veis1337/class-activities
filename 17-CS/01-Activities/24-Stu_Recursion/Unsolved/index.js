// TODO: Add a comment describing what the `position` parameter means for this function.
// position is the position - starting from 0 the beginning - in the fibonacci sequence you want returned
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // return 0 or 1 because those are the same as the position
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // teh current value at this position is adding the sum of hte values of the two preceding positions
  // by calling itself, we form a loop
  // with each subsequent call smaller arguments are used until the base condition is reached
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
console.log(fibonacci(9));
