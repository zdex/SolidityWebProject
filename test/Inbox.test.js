const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //W  is in capital bcoz we are going to create the instances of web3 lib and it will call constructor of web3
//const web3 = new Web3(ganache.provider()); // web3 with small w is instance and Web3 with capital W is class &&
                                            // ganache.provider() is the provider to intract with web3 instance
const provider = ganache.provider();
const web3 = new Web3(provider);                                            
const {abi, evm} = require('../compile');

let fetchedAccts;
let inbox='abcxyz';

beforeEach(async () => {
    //get the list of all accounts

    // here eth is one of the module of web3, mostly all the functions of web3 are async
    /* commented to cleanup the code to use async
       web3.eth.getAccounts()
        .then(fetchedAccts => {
            console.log(fetchedAccts[0]);
        }); */
        fetchedAccts = await web3.eth.getAccounts();
        console.log("fetchedAccts 0: " + fetchedAccts[0]);
     /* console.log('abi in test: ');
      console.log(abi);
      console.log('bytecode in test : ');
      console.log(evm['bytecode']);*/
    //use one of those accounts to deploy contract

    inbox = await new web3.eth.Contract(abi)
   .deploy({data: "0x" + evm['bytecode'].object, arguments: ['Hi there']})
   .send(
       {
           from: fetchedAccts[0],
           gas: 1000000
       }
   );
    
  /* inbox.send({ from: fetchedAccts[0],
        gas: 1500000,
        gasPrice: '30000000000000'}).then(function(newContractInstance) {
            console.log(newContractInstance.options.address);
        }); */
});

describe('Inbox', () => {
    it('deploy the contract', () => {
        console.log(inbox);
    })
});