/** Wait for a number of milliseconds. */
export function delay(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
}
/** Return a closure that increments and returns its own counter. */
export function makeCounter(initial = 0) {
    let count = initial;
    return () => {
        count += 1;
        return count;
    };
}
/** Find a required element or fail early with a useful message. */
export function getRequired(selector, root = document) {
    const element = root.querySelector(selector);
    if (!element) {
        throw new Error(`Required element not found: ${selector}`);
    }
    return element;
}
export function describeSlot(slot) {
    return `${slot.start} — ${slot.capacity} places available (slot ${slot.id})`;
}
export const demoBooking = {
    id: "A-104",
    start: "10:30",
    capacity: 4,
};
export const bookingDescription = describeSlot(demoBooking);
