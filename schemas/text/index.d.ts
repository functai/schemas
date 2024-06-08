declare const _schema: {
  type: "object";
  title: "Text Schema";
  description: "Text schema is for plain text";
  properties: {
    text: {
      type: "string";
      description: "the text";
    };
  };
  required: ["text"];
};
export default _schema;
