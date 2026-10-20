# Web Engineering Lab — completed starter

## Run locally in VS Code

1. Extract this ZIP.
2. Open the extracted `web-engineering-lab` folder in VS Code (`File → Open Folder`).
3. Install Node.js LTS if needed.
4. Open Terminal → New Terminal and run `npm install`.
5. Run `npm run typecheck`, then `npm run build`.
6. Start Live Server by right-clicking `index.html` and choosing **Open with Live Server**. If Live Server is not installed, install the VS Code extension named **Live Server**.
7. Keep the terminal open if you want to rerun build/typecheck while editing.

The page loads compiled JavaScript from `public/js/`. Re-run `npm run build` after TypeScript changes. Live Server serves the page but does not compile TypeScript by itself.

## Lab task mapping

- Task 1: `novalidate` is on the form. The final native port intentionally does not load jQuery; historical migration notes are in `LEGACY-NOTES.md`.
- Task 2: six native equivalents and three legacy smells are in `LEGACY-NOTES.md`.
- Task 3: final scripts are native TypeScript compiled to JavaScript; Network should show no jQuery request.
- Task 4: `--color-error`, `.error`, and `[aria-invalid="true"]` styling are in `public/styles.css`.
- Task 5: TypeScript dependency, `build`, `typecheck`, and strict `tsconfig.json` are included.
- Task 6: three source scripts live under `src/`; sample migration errors and fixes are recorded in `LEGACY-NOTES.md`.
- Task 7–8: typed helpers, `Slot`, `describeSlot`, and structural typing demo are in `src/utils.ts`.
- Task 9: `src/main.ts` narrows `event.target`, `closest()`, and `find()` results.
- Task 10: typed field rules and `getRequired<T>()` are used in `src/feedback.ts`.
- Task 11: build and deliberate-error instructions are in `LEGACY-NOTES.md`.
- Task 12: keyboard/Lighthouse/GitHub steps are in `LEGACY-NOTES.md`.

Note: Lighthouse score and GitHub push must be performed in your own browser/account. They cannot be truthfully pre-generated in this ZIP.
