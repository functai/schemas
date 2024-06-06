declare const _schema: {
    type: "object";
    name: "Text schema";
    properties: {
        text: {
            type: "string";
            description: "the text";
        };
    };
    required: ["text"];
};
export default _schema;
