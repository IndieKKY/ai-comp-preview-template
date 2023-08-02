import * as React from "react";
import Comp, {Example} from "./Comp";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/@tailwindcss/ui@0.7.2/dist/tailwind-ui.min.css";
document.head.appendChild(link);

export default function App() {
  return (
    <div className="w-full m-3">
      <Comp data={Example} />
    </div>
  );
}
