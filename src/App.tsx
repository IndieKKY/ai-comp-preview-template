import * as React from "react";
import Comp from "./Comp";
import data from "./data.json";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/@tailwindcss/ui@0.7.2/dist/tailwind-ui.min.css";
document.head.appendChild(link);

export default function App() {
  return (
    <div className="w-[350px] m-3 p-3">
      <Comp data={data} />
    </div>
  );
}
