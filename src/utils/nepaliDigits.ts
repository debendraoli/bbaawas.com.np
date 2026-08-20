const DEVANAGARI_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

/** Converts ASCII digits in a string to Devanagari numerals. */
export function toNepaliDigits(value: string | number): string {
  return String(value).replace(/\d/g, (digit) => DEVANAGARI_DIGITS[Number(digit)]);
}
