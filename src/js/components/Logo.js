import Component from '../Component.js';

export default class Logo extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';

        const logoAnchor = document.createElement('a');
        Component.setAttributes({
            'class': 'link',
            'style': 'width: max-content;',
            'href': 'https://jgpixel.com'
        }, logoAnchor);

        const logo = document.createElement('h4');
        logo.textContent = 'JG';

        const dot = document.createElement('span');
        dot.className = 'accent-text';
        dot.textContent = '.';

        this.root.appendChild(logoContainer);
        logoContainer.appendChild(logoAnchor);
        logoAnchor.appendChild(logo);
        logo.appendChild(dot);
    }
}