# Emergency: Westbrook County — Website

A static, GitHub Pages-ready landing page for **Emergency: Westbrook County**.

## Upload to GitHub

1. Create a new GitHub repository.
2. Upload everything inside this folder, keeping the `assets` folder intact.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select your main branch and `/ (root)`.
5. Save. GitHub will publish the site.

## Before launch

The Early Access button currently shows a small notice instead of sending users to a purchase page. In `index.html`, find:

```html
<a class="button button-primary full" href="#access" onclick="showNotice(event)">
```

Replace it with your Roblox purchase/game URL and remove `onclick="showNotice(event)"`.

The page is intentionally self-contained: no build step or framework is required.

## Included

- Responsive landing page
- October 2nd, 2026 release countdown
- 50R$ crossed out → 25R$ with 50% OFF badge
- Five teaser images plus the hero image you provided
- Responsive mobile layout
- Smooth scrolling and subtle hover effects
