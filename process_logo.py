from PIL import Image

# Open the image
img = Image.open('/home/santhosh/.gemini/antigravity/brain/4d578f65-4b3f-4abc-81b7-dc53b19da6df/media__1791377637676.jpg')
img = img.convert("RGBA")

datas = img.getdata()
new_data = []

# Approximate orange background color
# F47B20 -> (244, 123, 32)
# We use a tolerance

for item in datas:
    # item is (R, G, B, A)
    # Check if pixel is close to orange
    if item[0] > 200 and item[1] > 90 and item[1] < 160 and item[2] < 70:
        # change all orange pixels to transparent
        new_data.append((255, 255, 255, 0))
    else:
        # If it's black text (THE, dge), we might want to make it white to be visible on dark header
        # Let's check if it's very dark (black text)
        if item[0] < 50 and item[1] < 50 and item[2] < 50:
            new_data.append((255, 255, 255, 255)) # make it white
        else:
            new_data.append(item)

img.putdata(new_data)
img.save('/var/www/html/The Edge/TheEdge/public/logo.png', 'PNG')
print("Processed logo.png")
