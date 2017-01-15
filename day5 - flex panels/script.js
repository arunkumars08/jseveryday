let panels = document.getElementsByClassName('panels');

function toggleOpen() {
    let target = event.target;
    if(target.classList.contains('panel')) {
        let prevPanel = document.querySelector('.panel.open');
        if(prevPanel)
            prevPanel.classList.remove('open');

        let panel = target;
        panel.classList.toggle('open');
    }

}

function toggleActive(ev) {
    if(ev.propertyName.includes('flex'))
        this.classList.toggle('open-panel');
}

if(panels && panels.length > 0) {
    panels = panels[0];

    panels.addEventListener('click', toggleOpen);
    panels.querySelectorAll('.panel').forEach(function(panel) {
        panel.addEventListener('transitionend', toggleActive);
    });

}