import { createRoot} from 'react-dom/client'
import App from "./App";
import "./index.css"


const container =  document.getElementById("root");
const display = createRoot(container);
display.render(<App/>)