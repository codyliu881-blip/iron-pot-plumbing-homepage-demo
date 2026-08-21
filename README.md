# Iron Pot Plumbing Homepage Demo

A custom, responsive homepage demo for Iron Pot Plumbing in Snug, Tasmania.

## Local development

```bash
npm install
npm run dev
```

## Production

Live site: https://iron-pot-plumbing-homepage-demo.codyliu881.workers.dev

```bash
npm run build
npm run deploy
```

The project builds with vinext and deploys to Cloudflare Workers using the generated `dist/server/wrangler.json` configuration. Cloudflare Workers Builds is connected to the GitHub repository and automatically deploys pushes to `main`.
