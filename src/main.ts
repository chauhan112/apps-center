import "./style.css";
import { DeploymentCenter } from "./rlib/timeline/t2026/DeploymentCenter";

const page = DeploymentCenter();
document
    .querySelector<HTMLDivElement>("#app")!
    .appendChild(page.comp.getElement());
