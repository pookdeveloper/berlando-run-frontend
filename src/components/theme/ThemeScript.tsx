export function ThemeScript() {
  const script = `
    (function () {
      try {
        var storedTheme = localStorage.getItem('theme');
        var theme = storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (error) {
        document.documentElement.classList.remove('dark');
      }
    })();
  `

  return <script id="theme-script" dangerouslySetInnerHTML={{ __html: script }} />
}
