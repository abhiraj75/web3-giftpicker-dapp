import { defineChain } from 'viem'
import { sepolia } from 'viem/chains'



export const flareTestnetCoston2 = defineChain({
  id: 114, // 0x72
  name: 'Flare Testnet Coston2',
  nativeCurrency: {
    decimals: 18,
    name: 'Flare Testnet Coston2',
    symbol: 'C2FLR',
  },
  rpcUrls: {
    default: { http: ['https://coston2-api.flare.network/ext/C/rpc'] },
    public: { http: ['https://coston2-api.flare.network/ext/C/rpc'] },
  },
  blockExplorers: {
    default: {
      name: 'Flare Testnet Coston2 Explorer',
      url: 'https://coston2-explorer.flare.network/',
    },
  },
  testnet: true,
})


export { sepolia }