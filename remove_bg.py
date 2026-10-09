from PIL import Image

# Open the exact image they provided
img = Image.open('/home/santhosh/.gemini/antigravity/brain/4d578f65-4b3f-4abc-81b7-dc53b19da6df/media__1791377637676.jpg')
img = img.convert("RGBA")

datas = img.getdata()
new_data = []

# Get the background color from the top-left pixel
bg_color = img.getpixel((0, 0))

# We'll make anything close to the background color transparent
def is_close(c1, c2, tol=20):
    return abs(c1[0]-c2[0]) < tol and abs(c1[1]-c2[1]) < tol and abs(c1[2]-c2[2]) < tol

x_min, x_max = img.width, 0
y_min, y_max = img.height, 0

for y in range(img.height):
    for x in range(img.width):
        pixel = img.getpixel((x, y))
        if is_close(pixel, bg_color, tol=30):
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(pixel)
            if x < x_min: x_min = x
            if x > x_max: x_max = x
            if y < y_min: y_min = y
            if y > y_max: y_max = y

img.putdata(new_data)

# Crop to the actual logo contents
padding = 10
x_min = max(0, x_min - padding)
y_min = max(0, y_min - padding)
x_max = min(img.width, x_max + padding)
y_max = min(img.height, y_max + padding)

cropped_img = img.crop((x_min, y_min, x_max, y_max))

cropped_img.save('/var/www/html/The Edge/TheEdge/public/logo.png', 'PNG')
print("Processed and saved transparent logo.png")
