# Security audit

## Scope and checks

Reviewed application source, routes, asset and deployment configuration, dependency manifest, and tracked Git history. The current app is static and has no server-side endpoints, authentication, secrets configuration, or external API requests.

| Finding | Severity | Status |
|---|---|---|
| Dynamic project and panel markup used `innerHTML` with interpolated catalogue values. | Low; defense-in-depth for build-time data | Escaped text and attribute values before insertion in project cards and panels. |
| Theme initialization assumed browser storage access and accepted arbitrary stored values. | Low | Initialization now accepts only `light` or `dark`, defaults to dark, and tolerates unavailable storage. |
| No confirmed credentials or API keys found in the current repository files. | Informational | Pattern scan returned no matches. |
| No dependency advisories reported by `npm audit`. | Informational | 0 vulnerabilities across 395 installed dependency entries. |

## Remaining limitations

- GitHub Pages does not provide per-site response-header configuration. A Content Security Policy and other custom security headers require a host or proxy that supports them.
- Space Grotesk and Source Serif 4 load from Google Fonts. This makes a third-party request and exposes the visitor's IP address to that service; local font hosting would remove that request.
- A Git-history secret scan was attempted but the local Git tooling failed to create its signal pipe. The current-tree scan completed; historical exposure is therefore not verified by this audit.
- No browser automation or visual viewport test suite is configured in this repository.
