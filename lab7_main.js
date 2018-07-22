
  /* Lab exercise 7 
In this lab we are going to introduce a cryptocurrency.  We are going to 
also make sure that we have multpile transactions instead of a single data field.
We are finally going to introduce mining incentives (cryptocurrency)
  A.  In the Block class, change the data property to transactions and update 
  all references
  B.  Remove index from the ErnestoBlock class and also remove
  the reference to it from createGenesisBlock method in the ErnestoBlockChain class
  C.  Create a Tx class and in the constructor provide a fromAddr, toAddr, and amount
  Assign each property to a variable
  D.  Next we are going to need to update our ErnestoBlockchain class and create a mining reward,
  create an array to store pending txs (since we only create blocks periodically, we need an array to store
the txs that happen in the interim) and finally we need a new way to mine blocks
Let's start by adding this.pendingTxs = [] to the constructor
    E. Create another variable named miningReward that shows how much crypto
    the miners get as a reward for "solving the riddle".  We can set it to 10 initially
    F. Comment out the addBlock method 
    G. Create a new method called minePendingTxs that accepts as input a 
    miningRewardAddress
    F.  In minePendingTxs - create an instance of a Block and call mineBlock on that instance.
    Once the block has been mined - write it out to the log and push it into the chain array.
    Finally, update pendingTxs array with the Transaction and include the miner address and reward
    G.  Create a new method named createTx in the Blockchain class and push that into the pending Tx array
    H.  Create a new method called getBalanceOfAddress with this structure:
    // modify it to fit your code of course
    getBalanceOfAddress (addr) {
    let balance = 0
    // loop over all blocks in the chain
    for (const block of this.chain) {
        // now loop over every tx inside of each block
        for (const trans of block.txs) {
        // if you are the rcvr then reduce your balance
        if (trans.fromAddr === addr) {
          balance -= trans.amount
        }
        if (trans.toAddr === addr) {
          balance += trans.amount
        }
      }
    }
    return balance
  }

  Key point:  you never "own" cryptocurrency assets.  The assets are simply
  stored on the blockchain.  
  I. Run and test your code
  */

