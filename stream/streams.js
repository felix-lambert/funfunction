// When you process a pile of data you need to do a transformation 
// of each row
// Read one row at a time
const stupidNumberStream = {
  each: (callback) => {
    setTimeout(() => callback(1), 1000)
    setTimeout(() => callback(2), 2000)
    setTimeout(() => callback(3), 3000)
  }
}

stupidNumberStream.each(console.log)