# tooltipster-htmlTitle

A [Tooltipster](http://iamceege.github.io/tooltipster/) plugin that lets you easily point out an HTML element to serve as tooltip content. MIT license.

This plugin doesn't add much to Tooltipster, it's rather meant for beginners who are not comfortable with manipulating their DOM with jQuery and who need the most simple instructions.

Installation
------------

Include the plugin file in your page AFTER the Tooltipster bundle file.

```html
<html>
    <head>
        ...
        <script type="text/javascript" src="tooltipster/dist/js/tooltipster.bundle.min.js"></script>
        <script type="text/javascript" src="tooltipster-htmlTitle/tooltipster-htmlTitle.min.js"></script>
    </head>
</html>
```

Nothing else to do.

Usage
-----

You can now set a `data-htmltitle` attribute on your origins to point out which HTML element in the page should be used as content for the tooltip.

```html
<span class="tooltip" data-htmltitle="#tooltip_content">This is some text that has a tooltip when you hover over it</span>

<span id="tooltip_content"><img src="image.jpg" /> <b>This is the content of my tooltip!</b></span>
```

> If the selector you provide in the attribute matches several elements, only the first one will be used.  

> If you have two tooltips that have the same `data-htmltitle` (that is to say, want to both use a single HTML element), don't forget to set the `contentCloning` option to true when you initialize your tooltips.

Full example
------------

I suggest you set up your page like this:

HTML:
```html
<span class="tooltip" data-htmltitle="#tooltip_fruit">Cherries</span>
<span class="tooltip" data-htmltitle="#tooltip_fruit">Strawberries</span>
<span class="tooltip" data-htmltitle="#tooltip_vegetable">Carrots</span>

<div id="templates">
    <span id="tooltip_fruit"><img src="fruit.jpg" /> <b>These are fruit!</b></span>
    <span id="tooltip_vegetable"><img src="vegetable.jpg" /> <b>These are vegetables!</b></span>
</div>
```

CSS:
```css
#templates {
    display: none;
}
```

Javascript:
```javascript
$('.tooltip').tooltipster({
    contentCloning: true
)};
```

Options
-------

`htmlTitleScope` By default, the plugin will search in the page for an element that matches your selector. If you wish to search in other scope, for examples if you maintain your templates somewhere else, you may provide it here.