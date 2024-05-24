import "./App.css";
import "overlayscrollbars/overlayscrollbars.css";
import "./scroll-themes/os-theme-minimal-dark.css";
import "./scroll-themes/os-theme-minimal-light.css";
import "./scroll-themes/os-theme-thin-dark.css";
import "./scroll-themes/os-theme-thin-light.css";
import "./scroll-themes/os-theme-thick-dark.css";
import "./scroll-themes/os-theme-thick-light.css";
import "./scroll-themes/os-theme-round-dark.css";
import "./scroll-themes/os-theme-round-light.css";
import "./scroll-themes/os-theme-block-dark.css";
import "./scroll-themes/os-theme-block-light.css";
import Content from "./Content";

function App() {
  return (
    <main>
      <div className="banner">
        Updated the styles based on the OverlayScrollbars v2,{" "}
        <code>os-theme-*</code> are from the{" "}
        <a
          href="https://kingsora.github.io/OverlayScrollbars/v1/#!themes"
          target="_blank"
        >
          OverlayScrollbars v1 themes
        </a>{" "}
        by{" "}
        <a href="https://github.com/KingSora" target="_blank">
          kingsora
        </a>
      </div>
      <section className="main-content">
        <Content theme="os-theme-dark" />
        <Content light={true} theme="os-theme-light" />
        <Content theme="os-theme-minimal-dark" />
        <Content light theme="os-theme-minimal-light" />
        <Content theme="os-theme-thin-dark" />
        <Content theme="os-theme-thin-light" light />
        <Content theme="os-theme-thick-dark" />
        <Content theme="os-theme-thick-light" light />
        <Content theme="os-theme-round-dark" />
        <Content theme="os-theme-round-light" light />
        <Content theme="os-theme-block-dark" />
        <Content theme="os-theme-block-light" light />
      </section>
    </main>
  );
}

export default App;
