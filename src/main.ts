
import { initialiseFeedback } from "./feedback.js";
import { getRequired, describeSlot, type Slot } from "./utils.js";

function handleDocumentClick(event: MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const submitButton = target.closest<HTMLButtonElement>(
    'button[type="submit"]'
  );

  if (submitButton) {
    const form = submitButton.closest<HTMLFormElement>("form");
    if (!form) return;

    const status = getRequired<HTMLElement>("#form-status", form);
    if (!status.textContent) {
      status.textContent = "";
    }
    return;
  }

  const bookButton = target.closest<HTMLButtonElement>(".book-slot");
  if (!bookButton) return;

  const card = bookButton.closest<HTMLElement>(".slot-card");
  if (!card) return;

  const title = card.querySelector("h3")?.textContent?.trim();
  const paragraphs = Array.from(card.querySelectorAll("p"));

  const timeText = paragraphs[0]?.textContent?.replace(/^Time:\s*/, "").trim();
  const seatsText = paragraphs[1]?.textContent?.match(/\d+/)?.[0];

  if (!title || !timeText || seatsText === undefined) return;

  const slot: Slot = {
    id: title,
    start: timeText,
    capacity: Number(seatsText),
  };

  const status = getRequired<HTMLElement>("#booking-status");

  if (slot.capacity <= 0) {
    status.textContent = `${slot.id} is fully booked.`;
    return;
  }

  status.textContent = `Booking selected: ${describeSlot(slot)}.`;
}

document.addEventListener("DOMContentLoaded", () => {
  initialiseFeedback();
  document.addEventListener("click", handleDocumentClick);

  const requiredControl = Array.from(
    document.querySelectorAll<HTMLElement>("[required]")
  ).find(
    (element) =>
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement
  );

  if (requiredControl instanceof HTMLElement) {
    requiredControl.dataset.validationReady = "true";
  }
});
