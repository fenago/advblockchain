const SHA256 = require('crypto-js/sha256')
/* In REPL.it - make sure to select packages and pull in crypto-js 
This will create package.json in the same directory*/

class Block {
  /* In this exercise - create a class called Block and a constructor
    with the following variables: index,timestamp,data,priorHash.
    Set local variables - i.e.: this.index=index; for all inputs.
    Add a local empty string variable named hash  */
  constructor (index, timestamp, data, priorHash = '') {
    this.index = index // where does the block sit on the chain
    this.timestamp = timestamp // when was the block created
    this.data = data // your actual transactions
    this.priorHash = priorHash // string of prior hash
    this.hash = this.createHash // This calls the hashing method
  }
  createHash () {
    return SHA256(this.index + this.priorHash + this.timestamp + JSON.stringify(this.data)).toString()
  }
}
