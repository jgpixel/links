import Component from './Component.js';
import Footer from './components/Footer.js';
import Links from './components/Links.js';
import Logo from './components/Logo.js';

export default class App extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';

        new Logo({}, wrapper);

        new Links({
            links: [
                {
                    text: 'Portfolio',
                    href: 'https://jgpixel.com',
                },
                {
                    text: 'Resume',
                    href: 'https://jgpixel.com/resume',
                },
                {
                    text: 'GitHub',
                    href: 'https://github.com/jgpixel',
                },
                {
                    text: 'Twitter',
                    href: 'https://twitter.com/jg_pixel',
                }
            ]
        }, wrapper);

        new Footer({
            socials: [
                {
                    icon: './src/assets/icons/github-icon.svg',
                    alt: 'Github icon.',
                    href: 'https://github.com/jgpixel'
                },
                {
                    icon: './src/assets/icons/twitter-icon.svg',
                    alt: 'Twitter icon.',
                    href: 'https://twitter.com/jg_pixel'
                },
                {
                    icon: './src/assets/icons/stack-overflow-icon.svg',
                    alt: 'Stack Overflow icon.',
                    href: 'https://stackoverflow.com/users/18584468/jgpixel'
                }
            ],
            projectLink: 'https://github.com/jgpixel/portfolio'
        }, wrapper);

        this.root.appendChild(wrapper);

        // logo
        // cards
        // footer
    }
}