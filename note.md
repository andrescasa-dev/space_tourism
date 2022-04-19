# create a perfect circle using modern css
use a "a" for create a link button

## main problem
try to get a perfect circle. Normally you only do this:
``` css
.circle{
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```
but its work with letters, since they affect the width. the first solution could be calculate how much width the text added but its a math approach not a css solution.

this is the actual solution:

``` css
.circle{
  display: grid;
  padding: 0 2em;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
}
``` 
**aspect-ratio: 1 / 1** ensure that it's going to have same width and same height regardless of the width text.