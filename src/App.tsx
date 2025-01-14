import './App.css';
import 'overlayscrollbars/overlayscrollbars.css';
import './scroll-themes/os-theme-minimal-dark.css';
import './scroll-themes/os-theme-minimal-light.css';
import './scroll-themes/os-theme-thin-dark.css';
import './scroll-themes/os-theme-thin-light.css';
import './scroll-themes/os-theme-thick-dark.css';
import './scroll-themes/os-theme-thick-light.css';
import './scroll-themes/os-theme-round-dark.css';
import './scroll-themes/os-theme-round-light.css';
import './scroll-themes/os-theme-block-dark.css';
import './scroll-themes/os-theme-block-light.css';
import Content from './Content';
import { scrollBarTheme } from './useScrollBar';

const LIST_OF_THEMES = [
  { theme: 'os-theme-dark' },
  { theme: 'os-theme-light', light: true },
  {
    theme: 'os-theme-minimal-dark',
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-minimal-dark.css'
  },
  {
    light: true,
    theme: 'os-theme-minimal-light',
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-minimal-light.css'
  },
  {
    theme: 'os-theme-thin-dark',
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-thin-dark.css'
  },
  {
    theme: 'os-theme-thin-light',
    light: true,
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-thin-light.css'
  },
  {
    theme: 'os-theme-thick-dark',
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-thick-dark.css'
  },
  {
    theme: 'os-theme-thick-light',
    light: true,
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-thick-light.css'
  },
  {
    theme: 'os-theme-round-dark',
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-round-dark.css'
  },
  {
    theme: 'os-theme-round-light',
    light: true,
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-round-light.css'
  },
  {
    theme: 'os-theme-block-dark',
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-block-dark.css'
  },
  {
    theme: 'os-theme-block-light',
    light: true,
    link: 'https://github.com/vickey-dev/scroll-themes-overlayScrollbars/blob/main/src/scroll-themes/os-theme-block-light.css'
  }
] as { theme: scrollBarTheme; light?: boolean; link?: string }[];

function App() {
  return (
    <main>
      <div className="banner">
        Updated the styles based on the OverlayScrollbars v2, <code>os-theme-*</code> are from the{' '}
        <a href="https://kingsora.github.io/OverlayScrollbars/v1/#!themes" target="_blank">
          OverlayScrollbars v1 themes
        </a>{' '}
        by{' '}
        <a href="https://github.com/KingSora" target="_blank">
          kingsora
        </a>
      </div>
      <section className="main-content">
        {LIST_OF_THEMES.map((list) => (
          <Content key={list.theme} theme={list.theme} light={list?.light} link={list?.link} />
        ))}
      </section>
    </main>
  );
}

export default App;
