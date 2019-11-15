Description:
```
Venus satellite is broken, however there is a reserve communication channel
Mission URL: https://fctf3-venus.now.sh
```

Solution:
- go by url and find form 
- type smth and get response `. -. - . .-. / .... . .-.. .--. / ..-. --- .-. / .- .-.. .-.. / -.-. --- -- -- .- -. -.. ...`
- looks like Morse code
- decode it with some tool(https://cryptii.com/ in my case)
- message `enter help for all commands`
- convert `help` to morse code `.... . .-.. .--.` and submit
- get message `help - the current command. key - key for next task. author - author of the task.`
- submit `key` - `-.- . -.--`
- get flag `{fctf_mmmmmooorrssse}`