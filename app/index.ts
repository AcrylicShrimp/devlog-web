/// <reference types="svelte" />

import 'tailwindcss/tailwind.css';

import 'font/maven-pro.sass';
import 'font/pretendard.sass';

import './index.sass';

import { library as faLibrary, dom as faDOM } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons';

faLibrary.add(faGithub);
faLibrary.add(faTwitter);
faLibrary.add(faCopyright);
faLibrary.add(faEnvelope);
faDOM.watch();

import App from './App.svelte';

new App({
  target: document.body,
});
