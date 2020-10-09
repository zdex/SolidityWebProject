const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //W  is in capital bcoz we are going to create the instances of web3 lib and it will call constructor of web3
const web3 = new Web3(ganache.provider()); // webw with small w is instance and Web3 with capital W is class &&
                                            // ganache.provider() is the provider to intract with web3 instance
const {bytecode} = require('../compile');

let fetchedAccts;
let inbox='abc';

beforeEach(async () => {
    //get the list of all accounts

    // here eth is one of the module of web3, mostly all the functions of web3 are async
    /* commented to cleanup the code to use async
       web3.eth.getAccounts()
        .then(fetchedAccts => {
            console.log(fetchedAccts[0]);
        }); */
        fetchedAccts = await web3.eth.getAccounts();

      console.log(JSON.stringify(bytecode));
    //use one of those accounts to deploy contract

  //  inbox = await new web3.eth.Contract(JSON.parse(interface))
 //   .deploy({data: bytecode, arguments: ['Hi there!']})
  //  .send({ from: fetchedAccts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploy the contract', () => {
        console.log(inbox);
    })
});