/**
 * Convert dollars to cents for Stripe API (amount in smallest currency unit).
 */
export default function convertToSubcurrency(amountInDollars: number): number {
  return Math.round(amountInDollars * 100);
}
