"use client"

import { useAccount } from "wagmi"
import { useLotteryContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected, address } = useAccount()
  const { data, actions, state } = useLotteryContract()

  const isOwner = address?.toLowerCase() === data.owner?.toLowerCase()

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please connect your wallet to continue</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🎁 Gift Picker (Lottery)</h1>

      <div className="space-y-3 mb-6">
        <p><b>Contract Owner:</b> {data.owner}</p>
        <p><b>Total Participants:</b> {data.totalParticipants}</p>
        <p><b>Winner:</b> {data.winner && data.winner !== "0x0000000000000000000000000000000000000000" ? data.winner : "Not selected yet"}</p>
      </div>

      <div className="space-y-3">
        <button
          onClick={actions.enter}
          disabled={state.isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {state.isLoading ? "Entering..." : "Enter Lottery"}
        </button>

        {isOwner && (
          <>
            <button
              onClick={actions.pickWinner}
              disabled={state.isLoading}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Pick Winner
            </button>

            <button
              onClick={actions.reset}
              disabled={state.isLoading}
              className="w-full bg-red-600 text-white py-2 rounded"
            >
              Reset Lottery
            </button>
          </>
        )}
      </div>

      {state.hash && (
        <div className="mt-6 p-3 border rounded">
          <p className="text-sm">Transaction Hash:</p>
          <p className="break-all text-xs">{state.hash}</p>
          {state.isConfirming && <p>Waiting for confirmation...</p>}
          {state.isConfirmed && <p className="text-green-600">Confirmed!</p>}
        </div>
      )}

      {state.error && (
        <div className="mt-4 p-3 border border-red-500 rounded text-red-600">
          Error: {state.error.message}
        </div>
      )}
    </div>
  )
}

export default SampleIntregation

