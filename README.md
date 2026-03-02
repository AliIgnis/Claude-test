# Ali Mahmood - Portfolio Website

Bilingual (DE/EN) portfolio website built with vanilla HTML, CSS and JavaScript.

## Docker

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed and running

### Build

```bash
docker build -t portfolio .
```

### Run

```bash
docker run -p 8080:8080 portfolio
```

The container prints the URL on startup. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Environment Variables

| Variable   | Default                      | Description                                                      |
|------------|------------------------------|------------------------------------------------------------------|
| `PORT`     | `8080`                       | Port nginx listens on **inside** the container                   |
| `BASE_URL` | `http://localhost:${PORT}`   | URL printed at startup (set this to your public/custom domain)   |

### Examples

**Custom port (container-internal 3000, mapped to host 9090):**

```bash
docker run -e PORT=3000 -p 9090:3000 portfolio
```

**Custom base URL (e.g. behind a reverse proxy):**

```bash
docker run -e BASE_URL=https://alimahmood.dev -p 8080:8080 portfolio
```

### Stop

```bash
docker stop $(docker ps -q --filter ancestor=portfolio)
```

## Local Development (without Docker)

Serve the project root with any static file server:

```bash
npx http-server -p 8080
```

## Tests

```bash
node tests/run-tests.js
```

Or open `tests/tests.html` in a browser.
