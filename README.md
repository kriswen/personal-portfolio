# Kris Wen's Portfolio

Personal portfolio website that is deployed on Github page.

## Authors

- [@kriswen](https://www.github.com/kris-wen)

## Deployment

To install dependencies

```bash
  npm install
```

To start this project run

```bash
  npm start
```

To deploy this project to GitHub Page

```bash
  1. In the package.json file, scroll down to the scripts property and add the following commands:
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build",

  2. Add a homepage property to package.json
    "homepage": "kriswen.github.io/personal-portfolio/",

  3. Push to github repository
    $  npm run deploy -- -m "Deploy React app to GitHub Pages"

  4.  Configure GitHub Pages
      Setting -> Pages
      Source: Deploy from a branch
      Branch: gh-pages
      Folder: / (root)

  Reference: https://github.com/gitname/react-gh-pages/blob/master/README.md

```

## Live view

https://kriswen.github.io/personal-portfolio/
