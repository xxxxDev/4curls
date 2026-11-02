# Contributing

Thanks for helping. 4cUrls is a small project, so a short, focused change is the easiest to review.

## Before you start

- For a bug, open an issue with the address that goes wrong (use `example.com` if you can), what you expected and what happened, plus the version shown in `chrome://extensions`.
- For a larger change or a new feature, open an issue first so we can agree on the approach.
- For a security problem, follow [SECURITY.md](SECURITY.md) instead.

## Development

There's no build step. Load the `extension` folder with **Load unpacked** in `chrome://extensions`, and press its reload button after a change.

```sh
npm run package   # packs extension/ into dist/
```

The project's test suite is maintained separately and is not part of this repository. In your pull request, describe how you checked the change: what you ran, on which browser, and what you saw.

## Guidelines

- Match the style of the code around your change.
- A parameter goes in the all-sites list only if its name is used for nothing but tracking. Ordinary words go in that site's own list.
- Text shown to people goes in `extension/_locales`, in English and Traditional Chinese.
- Code comments are in English and say why, not what.
