# safe-paths

This module is intended to help format a string into a cross-platform path-safe string. 

One potential example would be for taking a string with UTF-8 or other special characters and transforming into a string that is safe to use for a filename or directory name.
   
## Usage

```javascript
var safePath = require('safe-paths');
    
console.log(safePath.format('AC/DC Compilation CD'));
```

    => AC_DC_Compilation_CD