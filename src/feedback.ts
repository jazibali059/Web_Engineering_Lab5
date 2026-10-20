import { getRequired } from "./utils.js";

type FeedbackField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface FieldRule {
  selector: string;
  message: string;
  validate: (field: FeedbackField) => boolean;
}

const rules: FieldRule[] = [
  {
    selector: "#name",
    message: "Please enter at least 2 characters for your name.",
    validate: (field) => field.value.trim().length >= 2,
  },
  {
    selector: "#email",
    message: "Enter a valid email address.",
    validate: (field) => field instanceof HTMLInputElement && field.validity.valid && field.value.trim() !== "",
  },
  {
    selector: "#rating",
    message: "Choose a rating before submitting.",
    validate: (field) => field.value !== "",
  },
  {
    selector: "#message",
    message: "Please enter at least 10 characters.",
    validate: (field) => field.value.trim().length >= 10,
  },
];

function setFieldError(field: FeedbackField, errorElement: HTMLElement, message: string): void {
  const hasError = message.length > 0;
  field.setAttribute("aria-invalid", String(hasError));
  field.classList.toggle("error", hasError);
  errorElement.textContent = message;
}

export function initialiseFeedback(): void {
  const form = getRequired<HTMLFormElement>("#feedback-form");
  const status = getRequired<HTMLElement>("#form-status");

  form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    let firstInvalid: FeedbackField | null = null;

    for (const rule of rules) {
      const field = getRequired<FeedbackField>(rule.selector, form);
      const errorElement = getRequired<HTMLElement>(`#${field.id}-error`, form);
      const valid = rule.validate(field);
      setFieldError(field, errorElement, valid ? "" : rule.message);
      if (!valid && firstInvalid === null) firstInvalid = field;
    }

    if (firstInvalid) {
      status.textContent = "Please correct the highlighted fields.";
      firstInvalid.focus();
      return;
    }

    status.textContent = "Thank you — your feedback has been recorded for this demo.";
    form.reset();
    for (const rule of rules) {
      const field = getRequired<FeedbackField>(rule.selector, form);
      const errorElement = getRequired<HTMLElement>(`#${field.id}-error`, form);
      setFieldError(field, errorElement, "");
    }
  });

  for (const rule of rules) {
    const field = getRequired<FeedbackField>(rule.selector, form);
    field.addEventListener("input", () => {
      // Clear stale errors as the user edits; submit performs full validation.
      const errorElement = getRequired<HTMLElement>(`#${field.id}-error`, form);
      if (field.getAttribute("aria-invalid") === "true" && rule.validate(field)) {
        setFieldError(field, errorElement, "");
      }
    });
    field.addEventListener("change", () => {
      const errorElement = getRequired<HTMLElement>(`#${field.id}-error`, form);
      if (field.getAttribute("aria-invalid") === "true" && rule.validate(field)) {
        setFieldError(field, errorElement, "");
      }
    });
  }
}
