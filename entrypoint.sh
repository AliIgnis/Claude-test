#!/bin/sh
set -e

PORT="${PORT:-8080}"
BASE_URL="${BASE_URL:-http://localhost:${PORT}}"

# Generate nginx config from template
envsubst '${PORT}' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf

echo "================================================"
echo "  Portfolio is running at: ${BASE_URL}"
echo "  Container port: ${PORT}"
echo "================================================"

exec nginx -g "daemon off;"
