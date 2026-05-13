import "./style.css";
import { MainTestComp } from "./rlib/timeline/testComp";

document
    .querySelector<HTMLDivElement>("#app")!
    .appendChild(MainTestComp.get_comp().getElement());
