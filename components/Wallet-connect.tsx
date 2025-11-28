"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function WalletConnect() {
    return (
        <div className="flex justify-center">
            <ConnectButton 
                showBalance={{
                    smallScreen: false,
                    largeScreen: true,
                  }}
                chainStatus="icon"
                accountStatus={{
                    smallScreen: 'avatar',
                    largeScreen: 'full',
                }}
            />
        </div>
    );
}