# Legacy and TypeScript lab notes

## Task 2 — jQuery equivalents

| jQuery call | Native browser equivalent |
| --- | --- |
| `$("#feedback-form")` | `document.querySelector("#feedback-form")` |
| `$(".error")` | `document.querySelectorAll(".error")` |
| `.on("submit", handler)` | `element.addEventListener("submit", handler)` |
| `.val()` | `input.value` |
| `.text("message")` | `element.textContent = "message"` |
| `.addClass("error")` | `element.classList.add("error")` |

### Three legacy smells
1. Depending on a library for simple DOM selection and event handling.
2. Implicit or loosely checked element types, which can hide null-reference bugs.
3. Mixing validation, DOM updates, and event wiring in one large handler.

## Task 6 — two TypeScript errors to record

These are examples of errors you should expect when first migrating untyped JavaScript to strict TypeScript. The final project has fixed them; temporarily introduce each issue to observe the compiler message.

1. `Parameter 'ms' implicitly has an 'any' type` — fixed by `ms: number`.
2. `Object is possibly 'null'` — fixed by checking the result of `querySelector` or using the generic `getRequired<T>()` helper.

## Task 8 — structural typing

`Slot` requires `id`, `start`, and `capacity`. `demoBooking` has those properties, so it can be passed to `describeSlot()` without explicitly declaring `implements Slot`. Remove one required property (for example `capacity`) to see TypeScript report that it is missing.

## Task 11 — deliberate type error

To reproduce: in `src/utils.ts`, temporarily change `let count: number = initial;` to `let count: number = "zero";`, then run `npm run typecheck`. TypeScript reports that a string cannot be assigned to a number. Restore the original line and rerun the command.

## Accessibility / Lighthouse evidence

- Test with Tab and Shift+Tab; ensure focus is visible and the submit button is reachable.
- Submit the empty form and verify errors are announced, focus moves to the first invalid field, and `aria-invalid` is updated.
- Run Lighthouse in Chrome DevTools on the locally served page. Aim for 100 in Accessibility; scores vary with browser, extensions, and environment. Save your own screenshot as evidence.
- The final HTML loads only `public/js/main.js`; no jQuery script is included. Use DevTools Network and filter for `jquery` to verify no requests.

## GitHub evidence

After creating your repository named `web-engineering-lab`, run:

```bash
git init
git add index.html public src tsconfig.json package.json LEGACY-NOTES.md
git commit -m "Complete web engineering lab"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/web-engineering-lab.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Do not submit a fabricated repository link; copy the real URL after pushing.
