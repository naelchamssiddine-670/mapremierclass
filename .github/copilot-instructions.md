<!-- .github/copilot-instructions.md - Guidance for AI coding agents -->
# mapremierclass — Copilot instructions

Purpose: short, actionable guidance so an AI coding agent can be productive immediately in this small educational JS project.

- **Quick overview:** This repo is a tiny browser-based teaching example for ES6 `class` syntax. The runnable entry is `index.html` which loads `maclass.js`. `classvoiture.js` is an empty placeholder for vehicle examples.

- **How to run (no build):** Open `index.html` in a browser. There is no bundler, no `package.json` and no tests configured.

- **Key files:**
  - `index.html` — includes `<script src="maclass.js"></script>`; add additional non-module scripts by appending `<script src="..."></script>` before `</html>`.
  - `maclass.js` — contains `class Personne` example (constructor sets `nom`, `village`, `anneeNaissance`; methods `Bienvenue()` and `calculerAge()` use `alert()` and `console.log()`). See `maclass.js` for the coding style to match.
  - `classvoiture.js` — placeholder for `Voiture`/vehicle examples. Follow the `Personne` pattern when adding classes here.

- **Project conventions & patterns:**
  - Comments and sample texts are in French — preserve language and tone in new code and comments.
  - Use ES6 `class` syntax; class names use PascalCase (e.g., `Personne`), methods are mixed-case (e.g., `Bienvenue`, `calculerAge`).
  - Scripts are plain browser scripts (non-module). Do not introduce `import`/`export` or a build step without changing `index.html` and getting approval.
  - Example code uses `alert()` for user-visible examples and `console.log()` for debugging output — mirror that when adding beginner-facing examples.

- **When adding a new class or example:**
  1. Implement the class in `classvoiture.js` following the style in `maclass.js` (constructor sets properties; add 1–3 small methods that demonstrate behavior).
  2. Add a short instantiation example at the bottom of `classvoiture.js`, e.g. `let v = new Voiture("Renault", 2000); console.log(v);`.
  3. Update `index.html` by adding `<script src="classvoiture.js"></script>` before `</html>` so the browser loads it.

- **Integration points & testing:**
  - Manual test: Open `index.html` in a browser and check the console and alert dialogs.
  - No automated tests or linter; keep changes minimal and easy to verify by opening the page.

- **What *not* to do:**
  - Do not add a bundler, modules, or package manager files without user approval.
  - Do not translate the repository comments out of French — preserve the original language.

If anything here is unclear or you want a different level of guidance (more examples, a `Voiture` API suggestion, or an optional tiny test harness), tell me which section to expand.
<!-- .github/copilot-instructions.md - Guidance for AI coding agents -->
# mapremierclass — Copilot instructions

Purpose: short, actionable guidance so an AI coding agent can be productive immediately in this small educational JS project.

- **Quick overview:** This repo is a small browser-based, educational example teaching ES6 classes in JavaScript. The runnable entry is [index.html](index.html) which loads `maclass.js`. `classvoiture.js` is currently an empty placeholder for a `Voiture` class.

- **How to run (no build):** Open [index.html](index.html) in a browser. There is no bundler or test runner configured.

- **Key files:**
  - `maclass.js` — ES6 `class Personne` example, uses `alert()` and `console.log()` and demonstrates instantiation:

```js
let personne1 = new Personne("NAEL", "Kahani", 2006);
personne1.Bienvenue();
personne2.calculerAge();
```

  - `classvoiture.js` — placeholder for vehicle examples. Follow the `Personne` pattern when adding classes here.
  - `index.html` — includes `<script src="maclass.js"></script>`; add new script tags here if you add more non-module scripts.

- **Project-specific conventions & patterns:**
  - Comments and text are in French — preserve language and tone in new code and comments.
  - Uses ES6 `class` syntax for examples (see `Personne` in `maclass.js`).
  - Naming: classes use PascalCase (`Personne`), methods are mixed-case (e.g., `Bienvenue`, `calculerAge`) — follow the existing style for consistency.
  - No modules or package.json present; avoid `import`/`export` unless you add a build step and update `index.html`.

- **Integration points & runtime:**
  - Code runs in the browser; UI interactions use `alert()` so automated Node execution may need modification.
  - When adding code that manipulates the DOM or shows dialogs, test by opening `index.html` in a browser.

- **When editing or adding features (practical rules for AI agents):**
  1. Keep changes minimal and localized — this is a teaching repo.
  2. If adding a new class, place it in `classvoiture.js` and follow `Personne`'s constructor/method patterns.
  3. Add a brief example instantiation and a console.log demonstrating expected output.
  4. If you need to add another script file, update `index.html` (append a `<script src="..."></script>` before `</html>`).

- **Examples of acceptable edits:**
  - Implement `Voiture` class in `classvoiture.js` matching `Personne` style and add `let v = new Voiture("Renault", 2000); console.log(v);`.
  - Fix small typos in French comments, but do not change the explanatory intent.

- **What not to do:**
  - Do not introduce a build system or modules without the user's consent.
  - Do not replace French comments with another language.

If anything here is unclear or you need additional context (tests, a preferred `Voiture` API, or a desired UI behavior), ask the repo owner before making larger changes.

---
Please review this and tell me which sections you want expanded or adjusted.
