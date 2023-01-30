const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface ,bytecode} =require('./compile');


const provider = new HDWalletProvider(
    'tooth humor season cost oven inform mosquito office chunk shoe ability treat',
    'https://goerli.infura.io/v3/da4b9a765ed44151873997b0ef44713a'
);


const web3 = new Web3(provider);

const deploy = async() => {
    console.log(interface)
    console.log(bytecode)
    //const accounts = await web3.eth.getAccounts();
    //console.log('Attempting to depoy the account: ',accounts[0]);
    //const contract = await new web3.eth.Contract(JSON.parse(interface))
    //.deploy({data:bytecode,arguments:['Hy Hemant Here!']})
     //.send({gas:'1000000',from:accounts[0]});

    //console.log('Contract Address of deployed contract: ',contract.options.address)
    provider.engine.stop();
};

deploy();