
  /* Lab exercise 6
We need a way to restrict how fast blocks can be created before we add blocks to the blockchain.  Otherwise, our blockchain can be spammed.  Additionally, there is the security issue of someone who can simply change the data in our blocks and rehash the entire chain.
A.  In the Block class, create a new class level variable named nonce and set it to zero.  The nonce is intended to simply serve as a randomizer to change the contents of the block and subsequently the resulting hash.
B. Add the nonce to calculateHash so the nonce is a part of the calculateHash method.
C.  In the Block class create a new method called mineBlock which accepts as an input a property named difficulty.  In this case, the difficulty will be the number of zeros that are in the front of the hash.  As you iterate through the loop, change the nonce value to change the data and the resulting hash.
D.  in mineBlock, make the hash of the block begin with a certain number of zeros that equal the difficulty provided.  You can use a while loop to achieve this.
E. In the ErnestoBlockchain class, create a variable named difficulty and assign it a value of 2.  
E. In the same Blockchain class, change the addBlock method so that when a new block is created, do not simply call newBlock.createHash - instead call:
newBlock.mineBlock(this.difficulty)  
F. Comment out the validity console test.  We will go back to that later
  */

