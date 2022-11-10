import Component from '../Component.js';

export default class LinkBox extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const linksContianer = document.createElement('div');
        linksContianer.className = 'links-container';

        this.props.links.forEach(link => {
            const linkBox = document.createElement('a');
            linkBox.className = 'link-box';
            linkBox.textContent = link.text;
            Component.setAttributes({
                href: link.href,
                'target': '_blank'
            }, linkBox);
            linksContianer.appendChild(linkBox);
        });

        this.root.appendChild(linksContianer);
    }
}