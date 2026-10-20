
/** Wait for a number of milliseconds. */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

/** Return a closure that increments and returns its own counter. */
export function makeCounter(initial: number = 0): () => number {
  let count: number = initial;

  return (): number => {
    count += 1;
    return count;
  };
}

/** Find a required element or fail early with a useful message. */
export function getRequired<T extends Element>(
  selector: string,
  root: ParentNode = document
): T {
  const element = root.querySelector<T>(selector);

  if (!element) {
    throw new Error(`Required element not found: ${selector}`);
  }

  return element;
}

export interface Slot {
  id: string;
  start: string;
  capacity: number;
}

export function describeSlot(slot: Slot): string {
  return `${slot.start} — ${slot.capacity} places available (slot ${slot.id})`;
}

export const demoBooking = {
  id: "A-104",
  start: "10:30",
  capacity: 4,
};

export const bookingDescription: string = describeSlot(demoBooking);
