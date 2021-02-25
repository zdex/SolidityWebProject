const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const {abi, evm} = require('./compile');

const provider = new HDWalletProvider(
    'normal amateur public verify cruel tell merry midnight soon genre maximum occur',
    'https://rinkeby.infura.io/v3/a943c8a3cd2946e2a7608ef341e1e62a',

);

const web3 = new Web3(provider);

const deploy = async() => {
const accounts = await web3.eth.getAccounts();
console.log("rinkeby account is: "+ accounts[0]);//0x3B186493eD99570FA8fCD4755b4cB611142fc15E

const inbox = await new web3.eth.Contract(abi)
.deploy({data: "0x" + evm['bytecode'].object, arguments: ['Hi there']})
.send(
    {
        from: accounts[0],
        gas: 1000000
    }
  );

  console.log("contract deployed to address: " + inbox.options.address); //0xfF04612CA3F1261d383386f622105ce6Cf935B39
};

deploy();