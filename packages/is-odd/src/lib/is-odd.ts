import { isEven } from '@thomazcapra-org/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
