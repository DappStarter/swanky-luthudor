require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name renew still minimum install casino symptom gesture'; 
let testAccounts = [
"0x237ae05742046ab129ba99aa8cb117f07dd83757a9388ae7e6c9918f49a1243b",
"0x4180f834be30dbd6d6fa017650bfeca3c4da0b6262a8646705b1c47c09813a74",
"0x6aa5f564190004a43546629d24d246a834b515f1b5a4c108175ca9433c7c1aa1",
"0xd3b5a2ffd711ed0c04f6250347b1d666e59f053ec9d56fd6ec468e06ee13e33f",
"0x0a0e4066f30f23e896cff2c27a3885dbf14479412f37be4cd66b3727918226aa",
"0x5d967a457af59b9e7d184c11f1c497ca7421c4cba7adadc3b39a621763d1d756",
"0x406a4ac6293ef6c4a8dce424f5e0187ee8562ac95ed8c13adce0cd476c4d3329",
"0xe29e6775fec9adae98c656fc6351bebcb6fedfbccefb31323cbdee445a37f6c2",
"0x816484dbc4fd0f88f8fcc87111bf1b470bff3bcb37d549fc2540c75c09b2d943",
"0x43da9a289195f313418c134aed25f5d64fcd54c2efc0e9d37f280af0cc3ecd95"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
