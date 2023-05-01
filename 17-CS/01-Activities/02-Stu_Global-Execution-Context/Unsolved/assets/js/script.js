// 1) Where is carNoise stored?
// global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // defined when goFast is invoked
  
  // 5) Where is makeNoise stored?
  // the function execution context of goFast
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is placed on the call stack which creates a new function execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Once the (Web API) confirm is resolved, it is stored in the callback queue
// , the new function execution is placed on the call stack
if(confirm("Do you want to go fast?")) {
  goFast(80);
}


// The call stack is for all of your synchronous functions

// The callback queue is where Javascript stores the asynchronous tasks (like alert answers, confirm answers, set timeout timers)