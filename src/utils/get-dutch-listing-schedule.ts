import { calculateCurrentDutchListingPrice } from './calculate-current-dutch-listing-price';

interface DutchListingSchedule {
  timestamp: number;
  date: string;
  price: string;
}

/**
 * Generates a complete, discrete schedule of price decreases for a Dutch auction,
 * perfectly mirroring the smart contract's integer-based logic.
 *
 * @param startingPrice - Initial price of the auction (as a string).
 * @param minimumPrice - Floor price (as a string).
 * @param decreaseInterval - Time between decreases in milliseconds (as a string).
 * @param decreaseStep - Amount price decreases at each interval (as a string).
 * @param createdAt - Start timestamp of the auction (in milliseconds).
 * @param endedAt - End timestamp of the auction (in milliseconds).
 * @returns An array of discrete price points for the auction's duration.
 */
export function getDutchListingSchedule({
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
  endedAt: number;
}): DutchListingSchedule[] {
  const decreaseIntervalBigInt = BigInt(decreaseInterval);
  const minimumPriceBigInt = BigInt(minimumPrice);
  const createdAtBigInt = BigInt(createdAt);
  const endedAtBigInt = BigInt(endedAt);
  const totalDuration = endedAtBigInt - createdAtBigInt;

  const schedule: DutchListingSchedule[] = [
    {
      timestamp: createdAt,
      date: new Date(createdAt).toISOString(),
      price: startingPrice
    }
  ];

  if (decreaseIntervalBigInt <= 0n || totalDuration <= 0n) {
    return schedule;
  }

  const maxIntervals = totalDuration / decreaseIntervalBigInt;

  for (let i = 1n; i <= maxIntervals; i++) {
    const nextTimestamp = createdAt + Number(i * decreaseIntervalBigInt);

    const nextPrice = calculateCurrentDutchListingPrice({
      startingPrice,
      minimumPrice,
      decreaseInterval,
      decreaseStep,
      createdAt,
      endedAt: nextTimestamp
    });

    const nextPriceBigInt = BigInt(nextPrice);

    schedule.push({
      timestamp: nextTimestamp,
      date: new Date(nextTimestamp).toISOString(),
      price: nextPrice
    });

    if (nextPriceBigInt === minimumPriceBigInt) {
      break;
    }
  }

  return schedule;
}
