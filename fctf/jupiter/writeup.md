Description:
```
The gas giant is full of layers of gases. But you can throw a stone!
Mission URL: https://fctf3-jupiter.now.sh
```

Solution:
- go to the page and see message `How Deep Does The Rabbit Hole Go?`
- check source code
- nothing in html but very suspisious `./script.js`
- don't what understand what is happening here, but see that some var and function are added to global scope
- check `window` object and search for this values
- open `b` and see flag in it `{fctf_vitallium}`