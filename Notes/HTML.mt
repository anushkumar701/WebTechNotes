
HTML:

What is HTML:?

→ HTML stands for Hyper Text Markup Language.

→ It is used for creating the structure of a webpage.

→ To create the structure, HTML provides many predefined tags.

---

What is Hyper Text:?

→ Any text that contains the link of another webpage is called Hyper Text.


Why is HTML called a Markup Language and not a Programming Language:?

Because in HTML we are not writing any logic or program.

→ HTML is only used to create the structure of a webpage.


Tags in HTML:

What is a Tag:?

→ A tag is a predefined word enclosed within angular braces `<>`.

Example:

```html
<h1>Welcome</h1>
````

→ In HTML, there are 2 types of tags:

1. Paired Tag
2. Unpaired / Self-Closing Tag


Paired Tag:

Any tag that contains both:

→ Opening tag
→ Closing tag

is called a Paired Tag.

Syntax:

```html
<tagname> Content </tagname>
```

## Example

```html
<h1>Welcome to Great Girigalan Magic Show</h1>
```

---

# Unpaired / Self-Closing Tag

Any tag that contains only an opening tag and does not have a closing tag is called an Unpaired Tag.

## Syntax

```html
<tagname>
```

## Examples

```html
<br>
<hr>
<img>
<meta>
```

---

# Structure of HTML Code

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title></title>
</head>

<body>

</body>

</html>
```

---

# Explanation of HTML Structure

## `<!DOCTYPE html>`

→ It tells the browser which version of HTML is being used.

→ Currently, we are using HTML5.

---

## `<html> </html>`

→ It is the root tag of the HTML document.

→ All content should be written inside this tag.

---

## `<head> </head>`

→ It is used to provide meta information about the webpage.

---

## `<title> </title>`

→ It is used to give the name of the browser tab.

---

## `<body> </body>`

→ All the content that should be displayed in the browser must be written inside the body tag.

Example:

```html
<h1>Welcome to Web Tech World</h1>
```

---

 Heading Tags

## Syntax

```html
<h1></h1> to <h6></h6>
```

→ Heading tags are used to provide headings and subheadings.

→ Heading tags are Paired Tags.

→ Heading tags are Block-Level Elements.

## Examples

```html
<h1>Welcome to Web Tech World</h1>
<h2>Welcome to Web Tech World</h2>
<h3>Welcome to Web Tech World</h3>
<h4>Welcome to Web Tech World</h4>
<h5>Welcome to Web Tech World</h5>
<h6>Welcome to Web Tech World</h6>
```

## Note

→ `<h1></h1>` is the biggest heading tag.

→ `<h6></h6>` is the smallest heading tag.

---

# Paragraph

→ In HTML, if we want to write text content, we use the paragraph tag.

---

Paragraph Tag:

## Syntax

```html
<p></p>
```

→ Paragraph tag is a Paired Tag.

→ It is a Block-Level Element.

→ Default font size of paragraph tag is `16px`.

```
```
Attributes:
    It is used to provide additonal information to the tags.
    It should be written in the opening tags.

Syntax:
    <tagname attributename="value" > </tagname>

IMG tag:
    It is used to add the image in the webpage.
    In this tag we have four Attributes.
    <img> tag is selfclosing or Unpaired tag.
    It is inline-block level Element.
    
src:It is used to provide the path of the image.
alt:It is used to provide the alternate message.if the image is not displaying ,that time this alt message will display on the page.
height & width:It is used for resizing the image.

Marquee Tag:<marquee></marquee>
    It is used to make any content to scrollable on the webpage.
    By default the content will scroll from right to left side.
Attributes:
    scrollamount:
        It is used to determine the speed of the scrolling content.
        By default value is 6.
    Direction:
        It is used to determine the direction of the scrolling content.
        value :=> 'left','right','up','down'.
    Behaviour:
        It is used to determine how the scrolling content will behave.
        value :=> 'scroll','slide','alternate'
    Loop:
        It determines how many times the content should scroll.
    Height and Width:
        It is used to resizing the marquee tag area.
        
List:
    List is used to group the related Elements together.
    In HTML we have 3 types of Lists.
        Ordered List
        Unordered List
        Description List

Ordered List:
    It is used to group and arrange the elements in a particular order.
    For creating this we need <ol></ol> tag.
    Inside <ol></ol> tag for writing the items we need <li></li> tag.
    These tags are block level elements.

Attributes in ol tag:
    Type:
        This Attribute is used to change the List style.
        Values are => 1,a,A,i,I
        by default it takes Number(1).
    Start:
        This is used to specify the starting value of the list style.
    Reversed:
        It is used to display the list-style in reverse order.

    Example:
    <ol type="1" start="50" reversed>
    <li>java</li>
    <li>python</li>
    <li>js</li>
    </ol>
    //output:
    50. java
    49. python
    48. js//
    Unordered List:
        It is created by using <ul></ul> tag.
        Unordered list is created by using <ul> tag.
        Here we are grouping the elements together,but they are not arranged in specific order.
        Inside <ul></tag> for writing the items we need <li></li> tag.
        By default it display the list style as disc or bullet point.
        Here we can provide only type attribute.
        We can give 'disc','square','circle','none' as a value of type.

Description List:
    For creating Description List we need <dl></dl> tag.
    Inside that we have to use <dl></dl> and <dd></dd> tag.
    <dt></dt> tag is used to provide Description term.
    <dd><dd> tag is used to provide the Description for that term.
    Example:
    <dl>
    <dt>HTML</dt>
    <dd>Hyper Text Markup Language</dd>
    <dt>WTF</dt>
    <dd>What the Funny</dd>
   </dl>

<audio></audio> tag:
    This tag is used to add audio/ music in our webpage.
    
    Attributes:
        src:
            It is used to provide the path of the audio.
        controls:
            If we give this attribute then only audio will be visible in webpage and we can control (play,pause,skip) the audio.
        autoplay:
            For this attribute music will be start automatically whenever our page will be loading.
        muted:
            It makes the audio mute.
        loop:
            This attribute is helps to play the audio infinite time in a loop.

<video></video> tag:
    This tag is used to display the video on the webpage.

    Attributes:
        src,controls,autoplay,loop,muted these attributes are same like <audio></audio> tag.

        poster:
            This attribute is used to provide image/thumbnail for this video.
            In this attribute we have to provide the link of the path of the image.
        height,width:  
            It is used for resizing of the video.
    
<iframe></iframe> tag:
    It is used to add the different webpage in our current webpage.
    It is inline block level element.
    Attributes:
        src:
            In this attribute we have to provide the path of the webpage we want to add in our webpage.
        frameborder:
            It is used to provide outline/border around the content.
            By default values is 0.
        height,Width:
            It is used to provide the size of the content.

Anchor tag:
    It is denoted by <a></a> tag.
    It is used to create hyperlink.
    It is inline element.
    It helps to navigate / redirect from one page to another page or in the same page one section to another section.
    Attributes:
        Href:
            It is used to take the path where we want to navigate.
        Target:
            By default if we click any hyperlink it opens in the same tab,if we want to target the attribute.
            target="_blank" It is used to open the link in the new tab.
        Title:
            When we hover(Keeping the mouse cursor on the element) then 'title' attribute to display some message.
        Example:

            <a href="www.google.com" target="blank" title="My Profile">Go to my profile</a>
        
How to navigate in the same page:
    Step 1:
        In which tag we want to navigate there we have to give a 'id' attribute.
    Step 2:
        In which value we are giving a id attribute, that same value we  have to provide in  the 'href' attribute with '#' Symbol.
        <a href="#myself">About Me</a>
        <h2 id="myself">About Me</h2>

Table in html:
    Table is combination of rows and columns.
    for creating table in html,we need <table></table> tag.
    inside table if we want to create row ,we need <tr></tr> tag.
    Inside Row for giving data we need <td></td> tag.
    For Providing heading data in table we  need <th></th> tag.|
    For giving the caption/name/titile of the table we need <caption></caption> tag.

    Attributes in html:
        Border: It is used to provide border/outlie around the table.
        Height,Width:Used to resize the table length.
        cellSpacing:It is used to provide the space between the cells.

    Attribute for <td> and <th>
        RowSpan:
            THis attribute is used to combine two or more than two rows.
        ColSpan:
            THis is used to combine two or more than two coloumns.
    Note:
        We have some extra tag in table like    
            <thread></thread>
            <body></body>
            <foot></foot>

<div></div> tag
    It is one block level element used to make division.
    Inside this tag we can write inline/block and inline-block level element.
    We can provide height and width.

<span><span> Tag:
    It is one inline level element,used to select some part of  the block level element.
    We can't provide height and width.
    
