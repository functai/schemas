declare const $schema: {
    readonly type: string;
    readonly name: string;
    readonly properties: {
        hello: {
            type: string;
            description: string;
        };
        world: {
            type: string;
            description: string;
        };
    };
    readonly required: string[];
};
export default $schema;
