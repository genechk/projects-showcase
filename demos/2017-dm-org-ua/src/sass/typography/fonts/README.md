# Font Face

A mixin for writing @font-face rules in SASS.

## Usage

Create a font face rule. Embedded OpenType, WOFF2, WOFF, TrueType, and SVG files are automatically sourced.

```scss
@include font-face(Samplino, fonts/Samplino);
```

Rendered as CSS:

```css
@font-face {
	font-family: "Samplino";
	src: url("fonts/Samplino.eot?") format("eot"),
		 url("fonts/Samplino.woff2") format("woff2"),
		 url("fonts/Samplino.woff") format("woff"),
		 url("fonts/Samplino.ttf") format("truetype"),
		 url("fonts/Samplino.svg#Samplino") format("svg");
}
```

---

Create a font face rule that applies to bold and italic text.

```scss
@include font-face("Samplina Neue", fonts/SamplinaNeue, bold, italic);
```

Rendered as CSS:

```css
@font-face {
	font-family: "Samplina Neue";
	font-style: italic;
	font-weight: bold;
	src: url("fonts/SamplinaNeue.eot?") format("eot"),
	     url("fonts/SamplinaNeue.woff2") format("woff2"),
	     url("fonts/SamplinaNeue.woff") format("woff"),
	     url("fonts/SamplinaNeue.ttf") format("truetype"),
	     url("fonts/SamplinaNeue.svg#Samplina_Neue") format("svg");
}
```

---

Create a font face rule that only sources a WOFF.

```scss
@include font-face(Samplinoff, fonts/Samplinoff, null, null, woff);
```

Rendered as CSS:

```css
@font-face {
	font-family: "Samplinoff";
	src: url("fonts/Samplinoff.woff") format("woff");
}
```

---

Create a font face rule that applies to 500 weight text and sources EOT, WOFF2, and WOFF.

```scss
@include font-face(Samplinal, fonts/Samplinal, 500, normal, eot woff2 woff);
```

Rendered as CSS:

```css
@font-face {
	font-family: "Samplinal";
	font-style: normal;
	font-weight: 500;
	src: url("fonts/Samplinal.eot?") format("eot"),
	     url("fonts/Samplinal.woff2") format("woff2"),
	     url("fonts/Samplinal.woff") format("woff");
}
```

## Notes

IE≥9 prioritizes valid font formats over invalid ones. Therefore, while `embedded-opentype` is the correct format for an **.eot** font, `eot` is used to fool modern IE into prioritizing other, newer font formats.

IE≤8 only supports **.eot** fonts and parses the `src` property incorrectly, interpreting everything between the first opening parenthesis `(` and the last closing parenthesis `)` as a single URL. Therefore, a `?` is appended to the **.eot**’s URL, fooling older IE into reading all other sources as query parameters.
