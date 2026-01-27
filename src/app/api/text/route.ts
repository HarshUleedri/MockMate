// export const runtime = 'nodejs';
// import { Level } from '@/generated/prisma/enums';
// import prisma from '@/lib/prisma';

// const javascriptQuestions: {
//   question: string;
//   referenceAnswer: string;
//   level: Level;
//   tags: string[];
// }[] = [
//   // 🟢 EASY (1–17)
//   {
//     question: 'What is JavaScript?',
//     referenceAnswer:
//       'JavaScript is a dynamically typed scripting language used to create interactive and dynamic web applications.',
//     level: Level.EASY,
//     tags: ['javascript', 'basics'],
//   },
//   {
//     question: 'What are JavaScript data types?',
//     referenceAnswer:
//       'JavaScript has primitive types like string, number, boolean, null, undefined, symbol, bigint, and non-primitive type object.',
//     level: Level.EASY,
//     tags: ['javascript', 'datatypes'],
//   },
//   {
//     question: 'Difference between let, var and const?',
//     referenceAnswer:
//       'var is function scoped, let and const are block scoped. const cannot be reassigned.',
//     level: Level.EASY,
//     tags: ['javascript', 'variables'],
//   },
//   {
//     question: 'What is == vs ===?',
//     referenceAnswer:
//       '== compares values with type coercion, === compares value and type strictly.',
//     level: Level.EASY,
//     tags: ['javascript', 'operators'],
//   },
//   {
//     question: 'What is hoisting?',
//     referenceAnswer:
//       'Hoisting moves variable and function declarations to the top of their scope during compilation.',
//     level: Level.EASY,
//     tags: ['javascript', 'hoisting'],
//   },
//   {
//     question: 'What is a closure?',
//     referenceAnswer:
//       'A closure allows a function to access variables from its outer scope even after that scope has closed.',
//     level: Level.EASY,
//     tags: ['javascript', 'closures'],
//   },
//   {
//     question: 'What is NaN?',
//     referenceAnswer:
//       'NaN means Not-a-Number and represents an invalid numeric value.',
//     level: Level.EASY,
//     tags: ['javascript', 'numbers'],
//   },
//   {
//     question: 'What is the spread operator?',
//     referenceAnswer:
//       'The spread operator expands iterable values into individual elements.',
//     level: Level.EASY,
//     tags: ['javascript', 'es6'],
//   },
//   {
//     question: 'What is destructuring?',
//     referenceAnswer:
//       'Destructuring extracts values from arrays or objects into variables.',
//     level: Level.EASY,
//     tags: ['javascript', 'es6'],
//   },
//   {
//     question: 'What is a promise?',
//     referenceAnswer:
//       'A promise represents the eventual success or failure of an asynchronous operation.',
//     level: Level.EASY,
//     tags: ['javascript', 'promises'],
//   },
//   {
//     question: 'What does async/await do?',
//     referenceAnswer:
//       'async/await allows writing asynchronous code in a synchronous-looking way.',
//     level: Level.EASY,
//     tags: ['javascript', 'async'],
//   },
//   {
//     question: 'What is an arrow function?',
//     referenceAnswer:
//       'Arrow functions are a concise syntax for functions and they do not have their own this.',
//     level: Level.EASY,
//     tags: ['javascript', 'functions'],
//   },
//   {
//     question: 'What is an array?',
//     referenceAnswer:
//       'An array is an ordered collection of values stored under a single variable.',
//     level: Level.EASY,
//     tags: ['javascript', 'arrays'],
//   },
//   {
//     question: 'What is an object?',
//     referenceAnswer: 'An object is a collection of key-value pairs.',
//     level: Level.EASY,
//     tags: ['javascript', 'objects'],
//   },
//   {
//     question: 'What is JSON?',
//     referenceAnswer:
//       'JSON is a text format for data exchange based on JavaScript object syntax.',
//     level: Level.EASY,
//     tags: ['javascript', 'json'],
//   },
//   {
//     question: 'What is type coercion?',
//     referenceAnswer:
//       'Type coercion is JavaScript automatically converting one data type to another.',
//     level: Level.EASY,
//     tags: ['javascript', 'types'],
//   },
//   {
//     question: 'What is strict mode?',
//     referenceAnswer:
//       'Strict mode enforces stricter parsing and error handling in JavaScript.',
//     level: Level.EASY,
//     tags: ['javascript', 'strict'],
//   },

//   // 🟡 MEDIUM (18–34)
//   {
//     question: 'Explain the event loop.',
//     referenceAnswer:
//       'The event loop handles asynchronous tasks by moving callbacks from the queue to the call stack.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'event-loop'],
//   },
//   {
//     question: 'Difference between map, filter and reduce?',
//     referenceAnswer:
//       'map transforms values, filter selects values, reduce aggregates values.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'arrays'],
//   },
//   {
//     question: 'What is this keyword?',
//     referenceAnswer:
//       'this refers to the object that is executing the current function.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'this'],
//   },
//   {
//     question: 'call, apply and bind difference?',
//     referenceAnswer:
//       'They control function context; call and apply invoke immediately, bind returns a new function.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'functions'],
//   },
//   {
//     question: 'What is debounce?',
//     referenceAnswer: 'Debounce delays function execution until a pause occurs.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'performance'],
//   },
//   {
//     question: 'What is throttle?',
//     referenceAnswer:
//       'Throttle limits function execution to once per time interval.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'performance'],
//   },
//   {
//     question: 'What is prototype?',
//     referenceAnswer:
//       'Prototype enables JavaScript objects to inherit properties from another object.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'prototype'],
//   },
//   {
//     question: 'Difference between shallow and deep copy?',
//     referenceAnswer:
//       'Shallow copy copies references, deep copy duplicates all nested data.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'memory'],
//   },
//   {
//     question: 'What is IIFE?',
//     referenceAnswer:
//       'IIFE is a function that executes immediately after it is defined.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'functions'],
//   },
//   {
//     question: 'What is temporal dead zone?',
//     referenceAnswer:
//       'TDZ is the time between variable declaration and initialization where access is not allowed.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'scope'],
//   },
//   {
//     question: 'What is currying?',
//     referenceAnswer:
//       'Currying transforms a function into a sequence of single-argument functions.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'functional'],
//   },
//   {
//     question: 'Explain lexical scope.',
//     referenceAnswer:
//       'Lexical scope means variable access is determined by where the code is written.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'scope'],
//   },
//   {
//     question: 'What is garbage collection?',
//     referenceAnswer: 'Garbage collection automatically frees unused memory.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'memory'],
//   },
//   {
//     question: 'What are modules?',
//     referenceAnswer:
//       'Modules allow splitting code into reusable files with import/export.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'modules'],
//   },
//   {
//     question: 'What is optional chaining?',
//     referenceAnswer:
//       'Optional chaining safely accesses nested properties without throwing errors.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'es6'],
//   },
//   {
//     question: 'What is null vs undefined?',
//     referenceAnswer:
//       'undefined means not assigned, null means intentionally empty.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'types'],
//   },
//   {
//     question: 'What are higher order functions?',
//     referenceAnswer:
//       'Functions that take other functions as arguments or return them.',
//     level: Level.MEDIUM,
//     tags: ['javascript', 'functional'],
//   },

//   // 🔴 HARD (35–50)
//   {
//     question: 'Explain memory leaks in JavaScript.',
//     referenceAnswer:
//       'Memory leaks occur when unused objects are still referenced and not garbage collected.',
//     level: Level.HARD,
//     tags: ['javascript', 'memory'],
//   },
//   {
//     question: 'How does JavaScript handle concurrency?',
//     referenceAnswer:
//       'JavaScript uses a single-threaded event loop with asynchronous callbacks.',
//     level: Level.HARD,
//     tags: ['javascript', 'event-loop'],
//   },
//   {
//     question: 'Explain microtask vs macrotask queue.',
//     referenceAnswer:
//       'Microtasks have higher priority than macrotasks and execute first.',
//     level: Level.HARD,
//     tags: ['javascript', 'event-loop'],
//   },
//   {
//     question: 'What are WeakMap and WeakSet?',
//     referenceAnswer: 'They store weak references allowing garbage collection.',
//     level: Level.HARD,
//     tags: ['javascript', 'memory'],
//   },
//   {
//     question: 'What is functional programming?',
//     referenceAnswer:
//       'A paradigm that emphasizes pure functions and immutability.',
//     level: Level.HARD,
//     tags: ['javascript', 'functional'],
//   },
//   {
//     question: 'Explain deep freeze.',
//     referenceAnswer: 'Deep freeze recursively makes objects immutable.',
//     level: Level.HARD,
//     tags: ['javascript', 'objects'],
//   },
//   {
//     question: 'What is tail call optimization?',
//     referenceAnswer:
//       'An optimization where recursive calls reuse stack frames.',
//     level: Level.HARD,
//     tags: ['javascript', 'performance'],
//   },
//   {
//     question: 'Explain prototype chain.',
//     referenceAnswer:
//       'Prototype chain is how JavaScript resolves property lookups through inheritance.',
//     level: Level.HARD,
//     tags: ['javascript', 'prototype'],
//   },
//   {
//     question: 'What is event delegation?',
//     referenceAnswer:
//       'Handling events at a parent element instead of individual children.',
//     level: Level.HARD,
//     tags: ['javascript', 'events'],
//   },
//   {
//     question: 'Explain immutability.',
//     referenceAnswer: 'Immutability means data cannot be changed once created.',
//     level: Level.HARD,
//     tags: ['javascript', 'concepts'],
//   },
//   {
//     question: 'What is shadowing?',
//     referenceAnswer:
//       'When an inner scope variable hides an outer scope variable.',
//     level: Level.HARD,
//     tags: ['javascript', 'scope'],
//   },
//   {
//     question: 'What are Web Workers?',
//     referenceAnswer: 'Web Workers run JavaScript in background threads.',
//     level: Level.HARD,
//     tags: ['javascript', 'performance'],
//   },
//   {
//     question: 'Explain currying vs partial application.',
//     referenceAnswer:
//       'Currying transforms functions, partial application fixes arguments.',
//     level: Level.HARD,
//     tags: ['javascript', 'functional'],
//   },
//   {
//     question: 'What is dynamic import?',
//     referenceAnswer: 'Dynamic import loads modules asynchronously when needed.',
//     level: Level.HARD,
//     tags: ['javascript', 'modules'],
//   },
//   {
//     question: 'Explain JavaScript engine.',
//     referenceAnswer:
//       'JavaScript engines parse, compile, and execute JavaScript code.',
//     level: Level.HARD,
//     tags: ['javascript', 'internals'],
//   },
//   {
//     question: 'How does V8 optimize code?',
//     referenceAnswer:
//       'V8 uses JIT compilation and hidden classes for optimization.',
//     level: Level.HARD,
//     tags: ['javascript', 'internals'],
//   },
// ];

export async function GET() {
  // const res = await prisma.question.findMany({
  //   where: {},
  // });

  return Response.json({ message: 'working' });
}
