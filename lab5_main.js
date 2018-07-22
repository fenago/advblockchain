
  /* Lab exercise 5 
A. Add a new method - isBCValid
B. Loop over the chain (do not start at the genesis block).  Create 2 variables and set them to the current and prior block
C. Check to see if the current block hash is equal to the calculated hash of the block and if not, return false
D. Check to see if the block points to the right prior hash.  If not- return false
E. Comment out the existing console.log and add:  
console.log('Is Ernesto Blockchain Valid? ' = ErnestoCoin.isBCValid() and run it with node main.js
F. from the CLI -- ErnestoCoin.chain[1].data = 'amount = 1,000'  // this tampers with the chain.  run node main.js
G. from the CLI -- ErnestoCoin.chain[1].hash = ErnestoCoin.chain[1].createHash()  // this updates the hash so you have updated the data and then updated the hash -- run node main.js
H. Obviously if you notice that the blockchain is not valid, you should roll back the changes and put your blockchain back into it's appropriate state.  Add this feature.  Notice that this 
blockchain does not have a proof of work algorithm, it does not execute on a distributed network, it does not have a currency.

  */

