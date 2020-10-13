const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//const source = fs.readFileSync(inboxPath, 'utf8');
const source = fs.readFileSync('./contracts/Inbox.sol', 'utf8');
//console.log(solc.compile(source, 1));


var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 

console.log('Interface : abi is: ');
//console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol']['Inbox']['abi']);
console.log('Bytecode is: ');
//console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol']['Inbox']['evm']['bytecode']);


//module.exports = solc.compile(source, 1).contracts[':Inbox'];
/*for (let contractName in compiledContract.contracts['Inbox.sol']) {
    console.log(contractName , compiledContract.contracts['Inbox.sol'][contractName].abi);      
    let abi = compiledContract.contracts['Inbox.sol'][contractName].abi;
    console.log(abi);
    fs.writeFileSync(`./contracts/bin/${contractName}_abi.json` , JSON.stringify(abi));
    return compiledContract.contracts['Inbox.sol'][contractName];
}*/
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol']['Inbox'];

//https://stackoverflow.com/questions/53353167/npm-solc-assertionerror-err-assertion-invalid-callback-specified