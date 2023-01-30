const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());//ganache is local IPC nerwork like infura
const {interface ,bytecode} = require('../compile');
let accounts;
let inbox;
const INITIAL_STRING = 'Hi There!'
//get local ganache network accounts
beforeEach(async()=>{
    //get list of all accounts
    accounts = await web3.eth.getAccounts()
    //inbox = JSON.parse(interface)

    // Use of one of these accounts to deploy contract the contract
      inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data:bytecode, arguments:[INITIAL_STRING]})
      .send({from:accounts[0],gas: '1000000'})
});


describe('Inbox',()=>{
    //test case  to check if contract is depoyed --contracta address will be some value o if deployed else it will be None or undefined
    it('deploys the contract',()=>{
        assert.ok(inbox.options.address);
        console.log(inbox.options.address);
    });

    //test case to check if i=cotract intilized correct
    it('has A default message',async()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message,INITIAL_STRING)
    });

    //test case to check if setMessage function working fine
    it('can change the message',async()=>{
        const newMessage = 'Bye There!'
        await inbox.methods.setMessage(newMessage)
        .send({from:accounts[0]})
        const message = await inbox.methods.message().call();
        assert.equal(message,newMessage)
    });
});