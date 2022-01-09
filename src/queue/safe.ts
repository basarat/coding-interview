console.log(Number.MAX_SAFE_INTEGER);
// Value: 9007199254740991

// Any greater integer is clipped 
// e.g. `9007199254740992` can be a few values 🤷🏻‍♂️
console.log(Number.MAX_SAFE_INTEGER + 1);
// Value: 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2);
// Value: 9007199254740992