Description:
```
Sometime there were living stegosauruses
Mission URL: https://fctf3-mars.now.sh
```

Solution:
- open url and get the image
- see nesting on the image that give use a hint
- run `exiftool image.png`
- the next info
```
Creator                         : ragibson/Steganography
Image Size                      : 512x512
```
- check what is `ragibson/Steganography` [https://github.com/ragibson/Steganography](https://github.com/ragibson/Steganography)
- it's steganography tool
- install it (require python 3)
- check doc and run command `stegolsb steglsb -r -i steg.png -o output_file.zip -n 2`
- check output file
- it's image, so change extension to `.png`
- run `exiftool` on this message and see, that it's smaller
- run `stegolsb steglsb -r -i steg.png -o output_file.zip -n 2` on new image
- get other one 
- run one more time
- get image with flag on it `{fctf_sbz_rkstr}`
