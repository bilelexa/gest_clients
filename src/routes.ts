import {ClientController} from "./controller/ClientController";

export const Routes = [{
    method: "get",
    route: "/clients",
    controller: ClientController,
    action: "all"
}, {
    method: "get",
    route: "/clients/:id",
    controller: ClientController,
    action: "one"
}, {
    method: "post",
    route: "/clients",
    controller: ClientController,
    action: "save"
}, {
    method: "delete",
    route: "/clients",
    controller: ClientController,
    action: "remove"
}];