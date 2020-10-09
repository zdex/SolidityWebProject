const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
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
//console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox.evm.assembly);

//module.exports = solc.compile(source, 1).contracts[':Inbox'];
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'];
//https://stackoverflow.com/questions/53353167/npm-solc-assertionerror-err-assertion-invalid-callback-specified