import os

directories = ['beach', 'stripes', 'printed', 'checks', 'casuals', 'jeans']
base_path = '/var/www/html/The Edge/TheEdge/resources/js/components/pages/shirts/'

for d in directories:
    file_name = d.capitalize() + 'Shirts.jsx'
    file_path = os.path.join(base_path, d, file_name)
    
    with open(file_path, 'r') as f:
        content = f.read()

    # Add stopPropagation to nextImage and prevImage
    if "e.stopPropagation();" not in content:
        content = content.replace("e.preventDefault();\n        setCurrentImgIndex", "e.preventDefault();\n        e.stopPropagation();\n        setCurrentImgIndex")
        content = content.replace("e.preventDefault();\n                    }>", "e.preventDefault(); e.stopPropagation();\n                    }>")
        
        with open(file_path, 'w') as f:
            f.write(content)
        print(f'Fixed propagation in {file_name}')
