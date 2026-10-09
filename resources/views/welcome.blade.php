<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>The Edge</title>

    {{-- Load React/Vite assets --}}
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>

<body>

    {{-- React will render inside this div --}}
    <div id="app"></div>

</body>
</html>