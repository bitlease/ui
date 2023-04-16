### Run the UI

Install Dependencies

```bash
cd ../..
yarn
```

Start Next.js server

```bash
yarn dev
```

Go to http://localhost:3000 and enter the contract address. Flip button flips the boolean value.

### Note when running Swanky node:

Example is set up to connect to Shibuya network. If you want to connect to local environment, you need to change the setting in app.tsx file in ui/components:

```txt
// local
// const WS_PROVIDER = 'ws://127.0.0.1:9944'

// shibuya
const WS_PROVIDER = 'wss://shibuya-rpc.dwellir.com'
```

Also, you need to add predefined [Substrate Developer Accounts](https://polkadot.js.org/docs/keyring/start/suri/#dev-accounts) to your browser extension so you can sign the flip() call with Alice account existing on Swanky node. 

You can find instructions how to do that in this [article](https://mirror.xyz/0x4659B666AC0e8D4c5D1B66eC5DCd57BAF2dA350B/bGFJYZhxBojZd0Dx6DEo8OifrJgIwNxwQ4CITWixUZw)
