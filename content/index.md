---
type: Page
title: Home Page
slug: /
---
## How to use

1.  Open terminal and enter: `npm run serve`
2.  Open another terminal and enter: `stackbit dev`
3.  Open 11ty browser tab and enter: <http://localhost:3000>
4.  Open Visual Editer browser tab and enter: <http://localhost:8090/_stackbit>

Hello from the **Home Page**.

## Folder Structure

*   index.md
*   /pages
    *   /test
        *   / [nested](/pages/test/nested)
    *   / [hello](/pages/hello)
    *   / [ve](/pages/ve)

### Now Shortcode

Usage: {% raw %} {% now %} {% endraw %}  
Result: {% now %}
