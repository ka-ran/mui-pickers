export function formatToCurrency(args: number): string {
  return `$${(args / 100).toFixed(2)}`;
}
