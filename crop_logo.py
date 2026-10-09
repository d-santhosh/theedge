from PIL import Image

# Open the image
img = Image.open('/home/santhosh/.gemini/antigravity/brain/4d578f65-4b3f-4abc-81b7-dc53b19da6df/media__1791377637676.jpg')
img = img.convert("RGBA")

# Let's crop it tightly so it fits nicely in the header
# The image is 1080x1080.
# The logo is in the center. We can find the bounding box of non-orange pixels.
datas = img.getdata()
x_min, x_max = img.width, 0
y_min, y_max = img.height, 0

for y in range(img.height):
    for x in range(img.width):
        item = img.getpixel((x, y))
        # Orange is roughly > 200, > 90, < 70
        is_orange = (item[0] > 200 and 90 < item[1] < 160 and item[2] < 70)
        if not is_orange:
            if x < x_min: x_min = x
            if x > x_max: x_max = x
            if y < y_min: y_min = y
            if y > y_max: y_max = y

# Add a little padding
padding = 20
x_min = max(0, x_min - padding)
y_min = max(0, y_min - padding)
x_max = min(img.width, x_max + padding)
y_max = min(img.height, y_max + padding)

cropped_img = img.crop((x_min, y_min, x_max, y_max))

# Save the exact cropped image without modifying colors, as logo.png
cropped_img.save('/var/www/html/The Edge/TheEdge/public/logo.png', 'PNG')
print("Processed and cropped logo.png")
