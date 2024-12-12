# Express.js Route Handler Error: Cannot read properties of undefined (reading 'property')
This repository demonstrates a common error in Express.js route handlers where attempting to access a property of an undefined object leads to an error. The error typically occurs when dealing with asynchronous operations, such as database queries, where the data might not be available when the property access happens.

## Problem
The `bug.js` file contains an Express.js route handler that attempts to access a property of a user object that may be undefined.  If the user is not found, `userData` will be `undefined`, causing the error. 

## Solution
The `bugSolution.js` file demonstrates a robust solution using optional chaining and nullish coalescing to gracefully handle this scenario.  It checks for the existence of `userData` before attempting to access its properties.