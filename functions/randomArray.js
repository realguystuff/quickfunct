module.exports=(a)=>{
  if (Array.isArray(a)) return a[Math.floor(Math.random()*a.length)];
  else throw new Error("Using the 'randomArray' function requires an array.");
}