"use client"

import { useEffect, useState } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface LotteryData {
  owner: string
  winner: string
  totalParticipants: number
}

export interface LotteryActions {
  enter: () => Promise<void>
  pickWinner: () => Promise<void>
  reset: () => Promise<void>
}

export interface LotteryState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export const useLotteryContract = () => {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  const { data: owner } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "owner"
  })

  const { data: winner, refetch: refetchWinner } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "winner"
  })

  const { data: totalParticipants, refetch: refetchParticipants } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "totalParticipants"
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      refetchParticipants()
      refetchWinner()
    }
  }, [isConfirmed, refetchParticipants, refetchWinner])

  const enter = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "enter",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const pickWinner = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "pickWinner",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const reset = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "reset",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const data: LotteryData = {
    owner: owner as string,
    winner: winner as string,
    totalParticipants: totalParticipants ? Number(totalParticipants as bigint) : 0,
  }

  const actions: LotteryActions = {
    enter,
    pickWinner,
    reset,
  }

  const state: LotteryState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return { data, actions, state }
}
