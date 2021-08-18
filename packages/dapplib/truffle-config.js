require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remain hole hope kiwi symptom twist'; 
let testAccounts = [
"0xef2ecece4a5091555e39329640debe21acf78cff8e4cecf07b0f18f0b37b55e7",
"0xd116c6a1e3c0fdafc8ec415b982312d14b95b186d456ffdda2e4f37d022f9a74",
"0x72f88b2f216e8f90d5f8ac9e6dc3beb34102bb581def0bb141c1d3b1abd9d48e",
"0x8019978a4f89e396e50209bb4faac4bd62e4dc24954b0f66da0265312169659c",
"0x2a9eeb3735f2e78b148f8b01993e9eab37d2fdf6dc24f34224a692a906f1e20a",
"0x88524362d441d79297e4902b0c6cc425f43b3535406c2bef8f26efbea52c8dc1",
"0x8818ef91d117b225956c460f918af0c421e72f989b6557b6a1fc3ac72ce197a1",
"0xe1b40d6ef702b5af7e1370e1196d4bfab93f4620799c08a0dd615ff6f44704c6",
"0x8481bc0514595fac3495386354dbcb0be3f20bf330f2e24fb881235a6cb618cd",
"0x43adbceba4b73e8617756f7c8f56ce15c747cc3e133105cb69a01e59e678ee64"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

