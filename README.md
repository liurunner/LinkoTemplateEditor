# Spec list

## General content composing:
- Copy content from WORD or GOOGLE DOC directly into the editor

  - Choose Keep paste in HTML for composing a Letter Template 
  - Choose Insert only Text for composing an Email Template 

- Able to style from the toolbar:

  - text-style: bold, strike-though, underscore, italic 
  - subscript: upper, lower
  - align: left, right, top, bottom
  - insert bullet list, number list
  - increase or decrease indent
  - set font family, font color, fill font background color
  - insert formatted block: normal, h1, h2, h3, h4, quoted
  - insert image (embedded base64 images)
    - Images are resizable

  - insert link
  - insert table 
    - table is resizable
    - can insert row above or bottom
    - can insert column left or right
    - can split a cell vertical or horizontal
    - can align particular cell
    - can set cell background color

  - Support drag-drop text and images
  - Advanced: can directly modify HTML/CSS/JS code

##Linko Template Specific

  - Can insert MERGE FIELD which dynamic interpolate to a facility or inspection’s instance field value
   ![Insert Merged Field](public/images/example.png)


# Instruction of composing template
* Try to make a template at WORD and paste into this editor as start
* Play around with the toolbar function, make the template looked well
* Replace actual data to MERGE FIELD by toolbar “Insert Merge Field”
* Use “Print” to preview the result in a A4 letter
* Once it down, click toolbar “Copy Content to Clipboard” to copy data and use it as the composed template

# Cons should know about this editor
* The WORD background image or color cannot COPY out and PASTE into this editor
* The header and footer are not supported at the moment, you have to manual add each page’s header and footer and preview via “Print” feature
