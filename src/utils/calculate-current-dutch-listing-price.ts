/**
 * Calculates the current price for a Dutch auction based on time elapsed
 * @param startingPrice - Initial price of the auction
 * @param minimumPrice - Floor price that the auction won't go below
 * @param decreaseInterval - Time interval between price decreases (in milliseconds)
 * @param decreaseStep - Amount by which price decreases at each interval
 * @param createdAt - Timestamp when the auction was created (in milliseconds)
 * @param endedAt - Optional timestamp when the auction ended (in milliseconds)
 * @returns The auction price at the current or end time
 */
export function calculateCurrentDutchListingPrice({
  startingPrice,
  minimumPrice,
  decreaseInterval,
  decreaseStep,
  createdAt,
  endedAt
}: {
  startingPrice: string;
  minimumPrice: string;
  decreaseInterval: string;
  decreaseStep: string;
  createdAt: number;
  endedAt?: number;
}): string {
  const startingPriceBigInt = BigInt(startingPrice);
  const minimumPriceBigInt = BigInt(minimumPrice);
  const decreaseIntervalBigInt = BigInt(decreaseInterval);
  const decreaseStepBigInt = BigInt(decreaseStep);
  const createdAtBigInt = BigInt(createdAt);
  const endedAtBigInt = BigInt(endedAt ?? Date.now());

  if (decreaseIntervalBigInt <= 0n) {
    return startingPrice;
  }

  const elapsedTime = endedAtBigInt > createdAtBigInt ? endedAtBigInt - createdAtBigInt : 0n;
  const intervalsElapsed = elapsedTime / decreaseIntervalBigInt;
  const reduction = intervalsElapsed * decreaseStepBigInt;
  let currentPrice = startingPriceBigInt - reduction;

  if (currentPrice < minimumPriceBigInt) {
    currentPrice = minimumPriceBigInt;
  }

  return currentPrice.toString();
}
