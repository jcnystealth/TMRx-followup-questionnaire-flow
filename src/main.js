import './styles/main.css';
import { createAppShell } from './components/app-shell.js';
import { createHomePage } from './pages/home-page.js';

const app = document.querySelector('#app');
app.replaceChildren(createAppShell(createHomePage()));
