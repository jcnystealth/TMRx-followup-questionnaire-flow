# Future integrations

Place frontend API clients and data adapters here when a backend contract exists.
Pages should call application logic in `src/logic`, which can depend on these adapters.
Keep DOM rendering out of services and avoid network calls directly in components.

No backend, database, persistence, or API client is implemented yet. Never store
server secrets in frontend code or `VITE_` environment variables: they are public
in browser bundles.
