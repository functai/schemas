declare const _schema: {
  type: "object";
  title: "Hello World Schema";
  description: "Hello World schema is converting any message to hello world";
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
