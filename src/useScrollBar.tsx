import {
  UseOverlayScrollbarsInitialization,
  UseOverlayScrollbarsInstance,
  useOverlayScrollbars,
} from "overlayscrollbars-react";
import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";
OverlayScrollbars.plugin([ClickScrollPlugin]);

export type scrollBarTheme =
  | "os-theme-dark"
  | "os-theme-light"
  | "os-theme-minimal-dark"
  | "os-theme-minimal-light"
  | "os-theme-thin-dark"
  | 'os-theme-thin-light'
  | 'os-theme-thick-dark'
  | 'os-theme-thick-light'
  | 'os-theme-round-dark'
  | 'os-theme-round-light'
  | 'os-theme-block-dark'
  | 'os-theme-block-light'

export const useScrollBar = ({
  theme = "os-theme-dark",
}: {
  theme: scrollBarTheme;
}): [UseOverlayScrollbarsInitialization, UseOverlayScrollbarsInstance] => {
  const [initialize, scrollBarInstance] = useOverlayScrollbars({
    defer: true,
    options: {
      paddingAbsolute: true,
      scrollbars: {
        theme,
        clickScroll: true,
        dragScroll: true,
        pointers: ["mouse", "pen", "touch"],
      },
    },
  });

  return [initialize, scrollBarInstance];
};
