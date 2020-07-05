# PostCSS Raw Append

[PostCSS] plugin to append a raw block of css to a file..

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {}
```

```js
opts = {
	data: '.bar {}',
};
````

```css
.foo {}

.bar {}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-raw-append'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
