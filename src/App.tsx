import * as React from "react";
import Comp, {Example} from "./Comp";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/@tailwindcss/ui@0.7.2/dist/tailwind-ui.min.css";
document.head.appendChild(link);

const stylesheet = document.createElement("style");
stylesheet.innerHTML = `
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    background: transparent;
  }
`;
document.head.appendChild(stylesheet);

export default function App() {
  return (
    <div className="w-full p-3">
      <div id='CompWrapper' style={{
        maxHeight: '500px',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}>
        <Comp data={Example} />
      </div>
    </div>
  );
}
