#coding:utf-8
from PIL import Image
import sys

import sys # モジュール属性 argv を取得するため

argvs = sys.argv

#画像の読み込み
im = Image.open(argvs[1])

#RGBに変換
rgb_im = im.convert('RGB')

#画像サイズを取得
size = rgb_im.size

#取得したサイズと同じ空のイメージを新規に作成
im2 = Image.new('RGBA',size)

#loop
#x
for x in range(size[0]):
    #y
    for y in range(size[1]):
        #ピクセルを取得
        r,g,b = rgb_im.getpixel((x,y))

        if r * g * b < 248 * 248 * 248:
            a = 255
        else:
            a = 0

        #set pixel
        im2.putpixel((x,y),(r,g,b,a))

#show
im2.save(argvs[2], "PNG")
