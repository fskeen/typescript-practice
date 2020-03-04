/**
 * We're going to annotate a single function!
 * syntax is like this:
 * (arg: type): return type
 *
 * ALWAYS define return type; never just rely on type inference for returns
 */

const add = (a: number, b: number): number => {
  // annotated type of each argument and return type in-line
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

// void = when your function intentionally returns nothing
const logger = (message: string): void => {
  console.log(message);
};

// never = when your function will never complete
const throwErr = (message: string): never => {
  throw new Error(message);
};

// turn this into the more common:

const throwErr2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
