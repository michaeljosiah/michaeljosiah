Site header used on every route.

```jsx
<TopNav items={['Home','Projects','About','Journal','Contact']} active="Projects"
  logoSrc="assets/logo-monogram.png" onNavigate={setRoute} />
```

Light mode was never specified in the source renders, so the theme toggle is decorative.