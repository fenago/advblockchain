const SHA256 = require('crypto-js/sha256')

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
    this.hash = this.createHash()
    this.nonce = 0
  }
  createHash () {
    return SHA256(this.index + this.priorHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
  }
  mineBlock (difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++
      this.hash = this.createHash()
      console.log('Block Hash: ' + this.hash)
    }
  }
}
class ErnestoBlockChain {
  constructor () {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 4
  }
  createGenesisBlock () {
    return new Block(0, '04/17/1973', 'BlockchainTrainingAlliance.com', 'BTA')
  }
  getLastBlock () {
    return this.chain[this.chain.length - 1]
  }
  addBlock (newBlock) {
    newBlock.priorHash = this.getLastBlock().hash
    // newBlock.hash = newBlock.createHash()
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
    // obviously it wouldn't be this easy.  There are many checks and balances
  }
  isBCValid () {
    for (let i = 1; i < this.chain.length; i++) {
      const existingBlock = this.chain[i]
      const priorBlock = this.chain[i - 1]

      if (existingBlock.hash !== existingBlock.createHash()) {
        return false
      }
      if (existingBlock.priorHash !== priorBlock.createHash()) {
        return false
      }
    }
    return true
  }
}

let ErnestoCoin = new ErnestoBlockChain()
ErnestoCoin.addBlock(new Block(1, '04/03/1977', 'amount = 7'))
ErnestoCoin.addBlock(new Block(2, '04/05/1977', 'amount = 17'))
ErnestoCoin.addBlock(new Block(3, '04/24/1977', 'amount = 77'))
console.log(JSON.stringify(ErnestoCoin, null, 4))
// console.log('Is ErnestoChain Valid? ' + ErnestoCoin.isBCValid())
// go to the terminal and execute your code with node main.js
// ErnestoCoin.chain[1].data = 'amount: 1000'
// console.log('Is ErnestoChain Valid? After change: ' + ErnestoCoin.isBCValid())
