let container=document.getElementById("bigContainer");
    const cellCount = 16 * 16;
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
