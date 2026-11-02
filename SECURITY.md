# Security and privacy

## Privacy

4cUrls has no server and no analytics. It reads the address of the current page inside your browser, and it doesn't store it or send it anywhere.

- **The address of the current page.** When you click the icon, the extension reads the address and puts it on your clipboard. It stays on your device.
- **The clipboard.** The extension only writes to it, and only after you click the icon. It never reads it.
- **Network.** The extension makes no network requests of its own.

4cUrls also removes tracking parameters from the address of the pages you open. This happens inside your browser.

## What the extension can do

- **Run on all sites.** A small script runs on the pages you open, to remove tracking parameters and because copying to the clipboard has to happen inside the page.
- **Write to the clipboard.** Only after you click the icon.

It asks for no other permissions, and it loads no code from outside the package.

## Keep in mind

A web page can see its own address change when 4cUrls removes a tracking parameter.

## Reporting a vulnerability

Please don't open a public issue for a security problem. Use GitHub's **Report a vulnerability** button on this repository, with steps to reproduce and the version you use.

We will acknowledge the report, work on a fix, and credit you in the release notes unless you prefer otherwise.

Questions about privacy: support@v-ax.com
