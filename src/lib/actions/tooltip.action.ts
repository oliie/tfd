export function tooltip(node: HTMLElement, text?: string) {
	const elTooltip = document.createElement('span');
	elTooltip.classList.add('action-tooltip');
	elTooltip.innerText = text ?? '';

	node.appendChild(elTooltip);
	node.style.position = 'relative';

	function mouseOver() {
		elTooltip.classList.add('action-tooltip--active');
	}

	function mouseLeave() {
		if (document.body) {
			elTooltip.classList.remove('action-tooltip--active');
		}
	}

	if (text) {
		node.addEventListener('mouseover', mouseOver);
		node.addEventListener('mouseleave', mouseLeave);

		return {
			destroy() {
				node.removeEventListener('mouseover', mouseOver);
				node.removeEventListener('mouseleave', mouseLeave);
			}
		};
	}
}
