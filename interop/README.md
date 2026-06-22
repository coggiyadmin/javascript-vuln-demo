# interop/ — in-language polyglot (JavaScript)

In-language cross-language fixtures (host=JS embeds a guest DSL). Cross-binary cases live in
`coggiyadmin/interop-vuln-demo`. Plan:
`cogniumhq/sast-validation/research/cross-language-interop-plan.md` (IL-1, IL-5).

Each ships TP + `safe_*` + `benign_*`.

| Fixture | Boundary | CWE | Expected |
|---------|----------|-----|----------|
| `interop_html_in_template_literal.js` | JS → HTML in template literal → `innerHTML` | 79 | FN |
| `interop_sql_in_string.js` | JS → SQL DSL in string → query | 89 | partial |
| `interop_shell_in_string.js` | JS → shell snippet → `sh -c` | 78 | partial |
| `interop_env_to_eval.js` | `process.env` → `eval`/dynamic `import()` | 94 | FN |

JSX is hosted in `typescript-vuln-demo/interop/` (ties to open #88a/b).
