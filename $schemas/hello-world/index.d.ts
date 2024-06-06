declare const _schema: {
    type: "object";
    name: "Hello World schema, convert any message to hello world";
    properties: {
        hello: {
            type: "string";
            description: "hello word, based on prompt";
        };
        world: {
            type: "string";
            description: "replacement word of world interpretation, based on prompt";
        };
    };
    required: ["hello", "world"];
};
export default _schema;
