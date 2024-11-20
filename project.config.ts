
interface BaseTimeoutOptions {
    short: number;
    medium: number;
    long: number;
}

type TimeoutOptions = BaseTimeoutOptions & Record<string, number>;

interface ProjectOptions {
    fullyParallel: boolean;
    workers: number;
    maxRetries: number
}

interface BaseEnvironmentConfig {
    url: string;
    urlParams: Record<string, string>;
    timeouts: TimeoutOptions;
    options: ProjectOptions;
    params: Record<string, any>;
}

type EnvironmentConfig = BaseEnvironmentConfig & { name: string; };

interface BaseEnvironmentConfig {
    url: string;
    urlParams: Record<string, string>;
    timeouts: TimeoutOptions;
    options: ProjectOptions;
    params: Record<string, any>;
}

interface ProjectConfigurationDefinition {
    base: BaseEnvironmentConfig;
    environments: EnvironmentConfig[];
}

class ProjectConfiguration {

    public constructor(
        definition: ProjectConfigurationDefinition
    ) {}
}

const projectConfig = (definition: ProjectConfigurationDefinition): ProjectConfiguration => {


    return new ProjectConfiguration(definition);
}

export default projectConfig({
    base: {
        url: "https://app.<env>.<domain>.com",
        urlParams: {
            domain: "appDomain"
        },
        timeouts: {
            short: 5000,
            medium: 15000,
            long: 30000
        },
        options: {
            fullyParallel: false,
            workers: 5,
            maxRetries: 2
        },
        params: {}
    },
    environments: [
        {
            name: "dev",
            url: "https://app.<env>.<domain>.com",
            urlParams: {
                env: "dev"
            },
            timeouts: {
                short: 5000,
                medium: 15000,
                long: 30000
            },
            options: {
                fullyParallel: false,
                workers: 5,
                maxRetries: 2
            },
            params: {}
        },
        {
            name: "test",
            url: "https://app.<env>.<domain>.com",
            urlParams: {
                env: "test"
            },
            timeouts: {
                short: 15000,
                medium: 30000,
                long: 60000
            },
            options: {
                fullyParallel: false,
                workers: 5,
                maxRetries: 2
            },
            params: {
                additionalParam1: "some_param",
                additionalParam2: "another_param"
            }
        }
    ]
});