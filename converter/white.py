
import cv2
import numpy as np

if __name__ == '__main__':

    img_src = cv2.imread("./image/IMG_0009.JPG", 1)

    img_gray = cv2.cvtColor(img_src, cv2.COLOR_BGR2GRAY)


    thresh = 100
    max_pixel = 255
    ret, img_dst = cv2.threshold(img_gray,
                                 thresh,
                                 max_pixel,
                                 cv2.THRESH_BINARY)


    cv2.imshow("Show BINARIZATION Image", img_dst)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
