import { createRoot } from "react-dom/client";
import { App } from "./App"; // Importowanie App z osobnego pliku

const root = createRoot(document.getElementById("root"));
root.render(<App />);
