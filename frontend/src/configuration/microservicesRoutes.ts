import { EnvironmentReader, Environments } from "urbanet-microservices-common";
import MicroserviceRouteData from "../Models/MicroserviceRouteData";
import localConf from "../configuration/routesConfigs/local";


export default class MicroservicesRoutes {

    private environmentReader = new EnvironmentReader();
    private configMapping = new Map<Environments, MicroserviceRouteData[]>();

    constructor() {
        this.configMapping.set(Environments.PROD, localConf);
        this.configMapping.set(Environments.STAGING, localConf);
        this.configMapping.set(Environments.QA, localConf);
        this.configMapping.set(Environments.LOCAL, localConf);
    }

    public getRoutes(): MicroserviceRouteData[] {
        const env = this.environmentReader.getCurrentEnvironment();

        return this.configMapping.get(env);
    }
}