document.addEventListener('DOMContentLoaded', function() {
    const canvasContainer = document.getElementById('canvas-container');
    const colorPicker = document.getElementById('color-picker');
    const saveArtButton = document.getElementById('save-art');
    const clearCanvasButton = document.getElementById('clear-canvas');

    let currentColor = '#000000';
    let isDrawing = false;

    colorPicker.addEventListener('input', () => {
        currentColor = colorPicker.value;
    });

    function createCanvas() {
        for (let i = 0; i < 1600; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('canvas-pixel');
            pixel.addEventListener('mousedown', () => isDrawing = true);
            pixel.addEventListener('mouseenter', () => {
                if (isDrawing) {
                    pixel.style.backgroundColor = currentColor;
                }
            });
            pixel.addEventListener('mouseup', () => isDrawing = false);
            canvasContainer.appendChild(pixel);
        }
    }

    document.addEventListener('mouseup', () => isDrawing = false);

    clearCanvasButton.addEventListener('click', () => {
        document.querySelectorAll('.canvas-pixel').forEach(pixel => pixel.style.backgroundColor = '#fff');
    });

    saveArtButton.addEventListener('click', () => {
        html2canvas(canvasContainer, {scale: 1}).then(canvas => {
            const link = document.createElement('a');
            link.download = 'pixel-art.png';
            link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
            link.click();
        }).catch(err => {
            console.error('Failed to save the canvas.', err);
        });
    });

    createCanvas();
});









