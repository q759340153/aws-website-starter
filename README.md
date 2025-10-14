# YourBrand — AWS Website Starter (React + Vite + Tailwind)

A modern starter ready for **AWS Amplify Hosting** or **S3 + CloudFront**. Includes React Router pages, Tailwind, and an Amplify build spec.

## Quickstart

```bash
npm install
npm run dev
npm run build
```

## Deploy to AWS Amplify Hosting

1. Push this repo to GitHub.2. In AWS Console → **Amplify** → **Host your web app** → Connect GitHub.3. Select your repo + branch and deploy. Amplify will use `amplify.yml`.4. Add a custom domain in Amplify → **Domain management** (optional).

## Deploy to S3 + CloudFront (static)

```bash
npm run build
# Upload the dist/ folder to your S3 bucket
# Create a CloudFront distribution with the bucket as origin
# Set Default Root Object: index.html
```

## Customize

- Change brand text in `Navbar.jsx` and metadata in `index.html`
- Edit colors and classes using Tailwind
- Replace the hero mockup and add more pages/components
- Wire the contact form to an API (AWS Lambda, API Gateway)

## License
MIT
