# HTML

## What is HTML?

- HTML stands for Hyper Text Markup Language.
- It is used for creating the structure of a webpage.
- To create the structure, HTML provides many predefined tags.

---

## What is Hyper Text?

- Any text that contains the link of another webpage is called Hyper Text.

---

## Why is HTML Called a Markup Language and Not a Programming Language?

- Because in HTML, we are not writing any logic or program.
- HTML is only used to create the structure of a webpage.

---

# Tags in HTML

## What is a Tag?

- A tag is a predefined word enclosed within angular braces `<>`.

### Example

```html
<h1>Welcome</h1>
```

- In HTML, there are 2 types of tags:
  - Paired Tag
  - Unpaired / Self-Closing Tag

---

## Paired Tag

Any tag that contains both:

- Opening Tag
- Closing Tag

is called a Paired Tag.

### Syntax

```html
<tagname>Content</tagname>
```

### Example

```html
<h1>Welcome to Great Girigalan Magic Show</h1>
```

---

## Unpaired / Self-Closing Tag

Any tag that contains only an opening tag and does not have a closing tag is called an Unpaired Tag.

### Syntax

```html
<tagname></tagname>
```

### Examples

```html
<br />
<hr />
<img />
<meta />
```

---

# Structure of HTML Code

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <title></title>
  </head>

  <body></body>
</html>
```

---

# Explanation of HTML Structure

## `<!DOCTYPE html>`

- It tells the browser which version of HTML is being used.
- Currently, we are using HTML5.

---

## `<html></html>`

- It is the root tag of the HTML document.
- All content should be written inside this tag.

---

## `<head></head>`

- It is used to provide meta information about the webpage.

---

## `<title></title>`

- It is used to give the name of the browser tab.

---

## `<body></body>`

- All the content that should be displayed in the browser must be written inside the body tag.

### Example

```html
<h1>Welcome to Web Tech World</h1>
```

---

# Heading Tags

### Syntax

```html
<h1></h1>
to
<h6></h6>
```

- Heading tags are used to provide headings and subheadings.
- Heading tags are Paired Tags.
- Heading tags are Block-Level Elements.

### Examples

```html
<h1>Welcome to Web Tech World</h1>
<h2>Welcome to Web Tech World</h2>
<h3>Welcome to Web Tech World</h3>
<h4>Welcome to Web Tech World</h4>
<h5>Welcome to Web Tech World</h5>
<h6>Welcome to Web Tech World</h6>
```

### Note

- `<h1></h1>` is the biggest heading tag.
- `<h6></h6>` is the smallest heading tag.

---

# Paragraph

- In HTML, if we want to write text content, we use the paragraph tag.

## Paragraph Tag

### Syntax

```html
<p></p>
```

- Paragraph tag is a Paired Tag.
- It is a Block-Level Element.
- Default font size of paragraph tag is `16px`.

---

# Attributes

- Attributes are used to provide additional information to the tags.
- They should be written inside the opening tag.

### Syntax

```html
<tagname attributename="value"></tagname>
```

---

# IMG Tag

- It is used to add an image to the webpage.
- `<img>` is an Unpaired / Self-Closing tag.
- It is an Inline-Block Element.

### Attributes

#### src

- Used to provide the path of the image.

#### alt

- Used to provide the alternate message.
- If the image is not displayed, this message will be shown.

#### height & width

- Used for resizing the image.

---

# Marquee Tag

### Syntax

```html
<marquee></marquee>
```

- It is used to make content scrollable on the webpage.
- By default, content scrolls from right to left.

### Attributes

#### scrollamount

- Used to determine the scrolling speed.
- Default value is `6`.

#### direction

- Used to determine the scrolling direction.

##### Values

```text
left
right
up
down
```

#### behavior

- Used to determine how the scrolling content behaves.

##### Values

```text
scroll
slide
alternate
```

#### loop

- Determines how many times the content should scroll.

#### height & width

- Used to resize the marquee area.

---

# List

- Lists are used to group related elements together.
- HTML provides three types of lists:
  - Ordered List
  - Unordered List
  - Description List

---

# Ordered List

- Used to group and arrange elements in a particular order.
- Created using `<ol></ol>`.
- List items are written using `<li></li>`.
- These are Block-Level Elements.

### Attributes

#### type

- Used to change the list style.

##### Values

```text
1
a
A
i
I
```

- Default value is `1`.

#### start

- Used to specify the starting value.

#### reversed

- Displays the list in reverse order.

### Example

```html
<ol type="1" start="50" reversed>
  <li>Java</li>
  <li>Python</li>
  <li>JavaScript</li>
</ol>
```

### Output

```text
50. Java
49. Python
48. JavaScript
```

---

# Unordered List

- Created using `<ul></ul>`.
- Elements are grouped together without any specific order.
- List items are written using `<li></li>`.
- Default list style is `disc`.

### Attributes

#### type

##### Values

```text
disc
square
circle
none
```

---

# Description List

- Created using `<dl></dl>`.

### Tags Used

```html
<dl></dl>
<dt></dt>
<dd></dd>
```

#### `<dt></dt>`

- Used to provide the description term.

#### `<dd></dd>`

- Used to provide the description of the term.

### Example

```html
<dl>
  <dt>HTML</dt>
  <dd>Hyper Text Markup Language</dd>

  <dt>WTF</dt>
  <dd>What the Funny</dd>
</dl>
```

---

# Audio Tag

### Syntax

```html
<audio></audio>
```

- Used to add audio/music to the webpage.

### Attributes

#### src

- Used to provide the audio path.

#### controls

- Displays audio controls such as play, pause and skip.

#### autoplay

- Plays audio automatically when the page loads.

#### muted

- Makes the audio mute.

#### loop

- Plays the audio continuously.

---

# Video Tag

### Syntax

```html
<video></video>
```

- Used to display video on the webpage.

### Attributes

#### src

- Used to provide the video path.

#### controls

- Displays video controls.

#### autoplay

- Plays video automatically.

#### muted

- Makes the video mute.

#### loop

- Plays the video continuously.

#### poster

- Used to provide an image/thumbnail for the video.

#### height & width

- Used for resizing the video.

---

# Iframe Tag

### Syntax

```html
<iframe></iframe>
```

- Used to add another webpage inside the current webpage.
- It is an Inline-Block Element.

### Attributes

#### src

- Used to provide the path of the webpage.

#### frameborder

- Used to provide a border around the content.
- Default value is `0`.

#### height & width

- Used to resize the iframe.

---

# Anchor Tag

### Syntax

```html
<a></a>
```

- Used to create hyperlinks.
- It is an Inline Element.
- Helps in navigating from one page to another or from one section to another section of the same page.

### Attributes

#### href

- Used to provide the navigation path.

#### target

- Opens the link in a specific location.

```html
target="_blank"
```

- Opens the link in a new tab.

#### title

- Displays a message when hovering over the element.

### Example

```html
<a href="www.google.com" target="_blank" title="My Profile">
  Go to My Profile
</a>
```

---

# How to Navigate in the Same Page

### Step 1

- Provide an `id` attribute to the target element.

### Step 2

- Use the same value with `#` in the `href` attribute.

### Example

```html
<a href="#myself">About Me</a>

<h2 id="myself">About Me</h2>
```

---

# Table in HTML

- A table is a combination of rows and columns.

### Tags Used

```html
<table></table>
<tr></tr>
<td></td>
<th></th>
<caption></caption>
```

#### table

- Creates the table.

#### tr

- Creates a row.

#### td

- Used for table data.

#### th

- Used for heading data.

#### caption

- Used to provide the title of the table.

---

## Table Attributes

### border

- Used to provide a border around the table.

### height & width

- Used to resize the table.

### cellspacing

- Used to provide space between cells.

---

## Attributes for `<td>` and `<th>`

### rowspan

- Used to combine two or more rows.

### colspan

- Used to combine two or more columns.

---

## Additional Table Tags

```html
<thead></thead>
<tbody></tbody>
<tfoot></tfoot>
```

---

# Div Tag

### Syntax

```html
<div></div>
```

- It is a Block-Level Element used to create divisions.
- It can contain Inline, Block-Level and Inline-Block Elements.
- Height and width can be provided.

---

# Span Tag

### Syntax

```html
<span></span>
```

- It is an Inline Element.
- Used to select or style a specific part of a Block-Level Element.
- Height and width cannot be provided.
