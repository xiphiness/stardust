require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

// read mnemonic from bridge config
require('dotenv').config({ path: 'node_modules/bridge/.env.development' });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

task("accountsFromWeb3", "Prints accounts", async (_, {web3}) => {
    console.log(await web3.eth.getAccounts());
});


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    hardhat: {},
    networks: {
        ropsten: {
            accounts: {
                mnemonic: process.env.REACT_APP_DEV_MNEMONIC,
            },
            url: process.env.ROPSTEN_URL,
        },
    },
    solidity: {
        compilers: [
            // for legacy code (azimuth)
            {
                version: "0.4.24",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000
                    }
                }
            },
            // for everything else
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000
                    }
                }
            },
        ]
    },
};
