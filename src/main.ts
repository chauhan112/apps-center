import "./style.css";
// import { LocalExpController } from "./rlib/timeline/t2025/july/FileExplorer";
// import { Page } from "./rlib/timeline/t2025/dec/DomainOpsFrontend";
import { DeploymentCenter } from "./rlib/timeline/t2026/DeploymentCenter";
// import { Page as DeploymentPage } from "./rlib/timeline/t2025/dec/deployment";

const page = DeploymentCenter();
// const page = DeploymentPage();
document
    .querySelector<HTMLDivElement>("#app")!
    .appendChild(page.comp.getElement());

// const page = Page();
// document
//     .querySelector<HTMLDivElement>("#app")!
//     .appendChild(page.getElement());
