module.exports=(a)=>{
  if (Array.isArray(a)) return a.reverse();
  else throw new Error("Using the 'reverseArray' function requires an array.");
}