#!/bin/bash
CLIENT_ID="1831ce21-8e77-4447-a360-47b1259c9c76"
CLIENT_SECRET="7znJxDjS7VcjbUPIXP0wfpvCu5cqgjZJpU0g3ivG"

curl -v -X POST "https://api.prokerala.com/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Origin: https://astro-x-theta.vercel.app" \
  --data-urlencode "grant_type=client_credentials" \
  --data-urlencode "client_id=$CLIENT_ID" \
  --data-urlencode "client_secret=$CLIENT_SECRET"
