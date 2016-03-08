#coding:utf-8

from PIL import Image
import cv2
import numpy as np
import sys

if __name__ == '__main__':

    argvs = sys.argv
    inputPath = argvs[1]
    outputPath = argvs[2]
    isAlpha = argvs[3]


    # width = 800
    # height = 1200
    isTransmission = False
    # width = argv[3]
    # height = argvs[4]
    # threthold = argvs[5]


    img_src = cv2.imread(argvs[1], -1)
    # img_src = cv2.imread("./image/IMG_0072.JPG", -1)

    # 拡大縮小
    # img_src = cv2.resize(img_src,(width,height))
    img_width = img_src.shape[0]
    img_height = img_src.shape[1]

    # グレイ
    img_gray = cv2.cvtColor(img_src, cv2.COLOR_BGR2GRAY)
    # 2値化
    thresh = 200
    max_pixel = 255
    ret, img_dst = cv2.threshold(img_gray,
                                 thresh,
                                 max_pixel,
                                 cv2.THRESH_BINARY)

    # 出力する画像
    output = np.array(Image.new('RGBA',(img_width,img_height)))

    print "変換処理"
    for x in range(img_width):
        for y in range(img_height):
            dots = img_dst[x][y]
            if dots > 250:
                img_src[x][y][0] = 255
                img_src[x][y][1] = 255
                img_src[x][y][2] = 255

    if isAlpha == "false":
        print "書き出します"
        cv2.imwrite(argvs[2],img_src);
        # cv2.imwrite("./output.png",img_src);
    else:
        print "透過処理をします"
        CV_im_RGB = img_src[::1, :, ::1].copy()
        output=Image.fromarray(CV_im_RGB)

        for x in range(img_width):
            for y in range(img_height):
                dots = img_dst[x][y]
                r,g,b,a = output.getpixel((y,x))
                a = 255
                # 透過
                if dots > 250:
                    a = 0
                # IMG書き込み
                output.putpixel((y,x),(b,g,r,a))

        print "書き出します"
        output.save("./output.png", "PNG")
        output.save(argvs[2], "PNG")
