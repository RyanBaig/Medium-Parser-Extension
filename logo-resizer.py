from PIL import Image

logo16 = Image.open("./logo.jpg")
logo16.resize((16, 16))
logo16.save("icon16.png")

logo32 = Image.open("./logo.jpg")
logo32.resize((32, 32))
logo32.save("icon32.png")

logo128 = Image.open("./logo.jpg")
logo128.resize((128, 128))
logo128.save("icon128.png")

logo48 = Image.open("./logo.jpg")
logo48.resize((48, 48))
logo48.save("icon48.png")


