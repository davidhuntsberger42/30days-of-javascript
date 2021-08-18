var panels = document.querySelectorAll('.panel');
function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(f) {
    if (f.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));