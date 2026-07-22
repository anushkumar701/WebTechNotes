# CSS Notes

# Introduction
CSS (Cascading Style Sheets) is used to style HTML webpages.

- HTML = Structure
- CSS = Design
- JavaScript = Functionality

## Ways to Apply CSS
1. Inline CSS
2. Internal CSS
3. External CSS

### Inline CSS
```html
<h1 style="color:red">Welcome to CSS</h1>
```
- Uses `style` attribute.
- Highest priority.

### Internal CSS
```html
<head>
<style>
h2{
  color:green;
}
</style>
</head>
```
- CSS inside same HTML file.
- `<style>` goes inside `<head>`.

### External CSS
```html
<link rel="stylesheet" href="style.css">
```
- CSS stored in `.css` file.
- Best practice for projects.

## CSS Priority
1. Inline CSS
2. Internal CSS / External CSS (last loaded wins if specificity is same)

# Font Properties

## font-size
```css
h1{
  font-size:40px;
}
```

## font-weight
100–900

- 400 = Normal
- 700 = Bold

```css
p{
  font-weight:700;
}
```

## font-style

```css
p{
  font-style:italic;
}
```

Values:
- normal
- italic
- oblique

## font-family

```css
body{
  font-family:Arial, sans-serif;
}
```

Common fonts:
- Arial
- Verdana
- Times New Roman
- Georgia
- Poppins
- Roboto

# Selectors

Selectors are used to select HTML elements for styling.

```css
selector{
    property:value;
}
```

## Types
1. Simple Selector
2. Combinator Selector
3. Pseudo Class Selector
4. Pseudo Element Selector
5. Attribute Selector

# Simple Selectors

## Tag Selector

```css
h1{
    color:red;
}
```

## ID Selector

```css
#title{
    color:blue;
}
```

- Uses `#`
- Must be unique.

## Class Selector

```css
.heading{
    color:green;
}
```

- Uses `.`
- Can be reused.

## Universal Selector

```css
*{
    margin:0;
    padding:0;
}
```

## Group Selector

```css
h1,p,button{
    color:red;
}
```

# Combinator Selectors

## Descendant Selector

```css
.header h1{
    text-align:center;
}
```

Targets all descendants.

## Child Selector

```css
.header > h1{
    color:red;
}
```

Targets direct child only.

## Adjacent Sibling

```css
#first + li{
    color:red;
}
```

Targets immediate next sibling.

## General Sibling

```css
#first ~ li{
    color:aqua;
}
```

Targets all following siblings.

# Pseudo Class Selectors

Used to style elements based on state.

```css
button:hover{
    background:red;
}

button:active{
    background:green;
}

input:focus{
    border:2px solid blue;
}

li:first-child{
    color:red;
}

li:last-child{
    color:green;
}

li:nth-child(3){
    color:blue;
}
```

# Pseudo Element Selectors

```css
h1::before{
    content:"★ ";
}

h1::after{
    content:" ✓";
}

p::first-letter{
    font-size:40px;
}

p::first-line{
    color:blue;
}

::selection{
    background:yellow;
}
```

# Attribute Selectors

```css
input[type]{
    border:1px solid red;
}

input[type="text"]{
    background:yellow;
}

a[href^="https"]{
    color:green;
}

img[src$=".png"]{
    border:2px solid blue;
}

div[class*="box"]{
    color:red;
}
```

# Interview Questions

1. What is CSS?
2. Difference between Inline, Internal and External CSS.
3. Difference between ID and Class.
4. Explain CSS specificity.
5. Descendant vs Child selector.
6. Adjacent vs General sibling.
7. Pseudo Class vs Pseudo Element.
8. Attribute selectors.
9. Why External CSS is preferred?
10. Explain font properties.

