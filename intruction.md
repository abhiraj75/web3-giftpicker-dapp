## Flare Demo Template – Setup Notes

1. Run `npm install` right after scaffolding.
2. Copy your WalletConnect project ID into `.env.local` as `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`.
3. Contract details live in `lib/contract.ts`. Re-run the generator CLI and paste a new metadata file whenever you redeploy so the ABI stays in sync.
4. `npm run dev` starts the Next.js app. Use the sample component in `components/sample.tsx` for a quick sanity test.
5. Generate an AI handoff prompt any time with `npm run prompt` (output lands in `prompt/prompt_<timestamp>.md`).

Keep this file updated with any team-specific conventions after you clone the scaffold.***

