import MicroserviceRouteData from "../../Models/MicroserviceRouteData";

let conf:MicroserviceRouteData[];

conf = [
    new MicroserviceRouteData("login","http://localhost","1234"),
    new MicroserviceRouteData("main","http://localhost","1239"),
    new MicroserviceRouteData("registration","http://localhost","1230")
];

export default conf;