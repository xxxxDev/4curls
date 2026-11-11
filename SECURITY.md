# Security

## What 4cUrls can see and do

4cUrls has no server and no analytics. It reads the address of the current page inside your browser, and it doesn't store it or send it anywhere.

- **The address of the current page.** When you click the icon, the extension reads the address and puts it on your clipboard. It stays on your device.
- **Mobile01 topic pages.** On these pages the extension also reads the page's own `og:url` tag, which holds the topic's real address. It reads nothing else on the page.
- **The clipboard.** The extension only writes to it, and only after you click the icon. It never reads it.
- **Network.** The extension makes no network requests of its own.
- **Run on all sites.** A small script runs on the pages you open, to remove tracking parameters and because copying to the clipboard has to happen inside the page.

4cUrls also removes tracking parameters from the address of the pages you open. This happens inside your browser.

It asks for no other permissions, and it loads no code from outside the package.

## Keep in mind

A web page can see its own address change when 4cUrls removes a tracking parameter.

## Privacy

Everything above happens on your device. For questions about privacy, email [support@v-ax.com](mailto:support@v-ax.com).

## Reporting a vulnerability

Please do not open a public issue for a security problem. Email [support@v-ax.com](mailto:support@v-ax.com) instead. You can also use GitHub's **Report a vulnerability** button on this repository.

Include 4cUrls, the version or commit, the relevant platform, minimal steps to reproduce, and the expected and observed results. Use fictional data where possible and redact sensitive information from errors or screenshots.

Do not send passwords, tokens, private keys, account data, or raw private logs. Include only the information needed to reproduce the problem.

For ordinary usage questions and non-sensitive bugs, use this repository's issue tracker.
