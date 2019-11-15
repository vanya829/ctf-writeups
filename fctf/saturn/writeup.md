Description:
```
Take a walk on the rings of saturn
Mission URL: https://fctf3-saturn.now.sh
```

Solution:
- open link. See message `Start thinking like an search engine`
- ok, let's open robots.txt
```
# manifest
# html
# post
# cookies
# --
# troubles? google the intermediate result :)
#
User-agent: *
Disallow: /
```
- check source code 
- find link to `/manifest.json`
- open it and see part of the flag
- check othe link to `./logo192.png` and find other part of the flag
- now we can realize that in robots.txt defined different places of flag
- check response headers and find one more part `set-cookie: last_part=_together%7D`
- last one is in POST
- check `script.js` and find `/xhr.php` url
- send post there and get one more piece of flag `_flock`
- combine it to full flag `{fctf_birds_of_a_feather_flock_together}`