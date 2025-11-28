import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { flareTestnetCoston2, sepolia } from './config'

export const config = getDefaultConfig({
  appName: "flare_demo",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "YOUR_WALLETCONNECT_PROJECT_ID", // You'll need to get this from WalletConnect
  chains: [flareTestnetCoston2, sepolia],
  ssr: true,
});

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}