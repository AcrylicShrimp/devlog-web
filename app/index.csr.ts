import 'tailwindcss/tailwind.css';

import 'font/noto-sans-mono-cjk.sass';

import 'styles/index.sass';

import { library as faLibrary, dom as faDOM } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

faLibrary.add(faGithub);
faLibrary.add(faTwitter);
faLibrary.add(faEnvelope);
faDOM.watch();

import App from 'app/App.svelte';

new App({
  target: document.body,
  hydrate: true,
});
