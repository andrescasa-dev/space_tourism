# Getting everything ready
## 1. Reset
Some important things to reset or set before begin. guide: [Modern reset css](https://piccalil.li/blog/a-modern-css-reset/)

* Margin
* Box-sizing
* Picture and images
* inherit font for input, button, textarea, select
* set initial styles for the body
* allow "prefer reduce motion".

## 2. Utility classes

  1. grid
  2. flex
  3. container
  4. sr-only (screen-read only)
  5. color classes:
     1. background
     2. text

## 3. colors
use rgb or hsl to modify opacity, save the common color in a custom variable (but only content of the rgb or hsl). 

# Developing a view
## 1. Use utility classes
  * check the design system.
## 2. build up layouts
  * see if its better to use gird (most of time)
## 3. check accessibility.
  * what should be hidden for the aria-API (aria-hidden="true") but displayed
  * what should be not displayed but expose to the aria-API (use class="sr-only")
  * Maybe use "chromevox" for test accessibility, at less for blind people.
