Description:
```
I heard developers are creating something special. There is an special "Neptune" Browser
Mission URL: https://fctf3-neptune.now.sh
```

Solution:
- open link and get next message `Hey.. use special browser only!`
- replace `User-Agent` header to `Neptune`
- get other message `Wait.. http said you are not from Boris? Go away!`
- replace `Referer` header to `Boris`
- get the flag `{fctf_valhalla}`