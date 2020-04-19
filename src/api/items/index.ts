import Ajv from "ajv";
import schema from "./schema.json";
import fetch from "./data";

const validator = new Ajv();

const getItems: typeof fetch = (path: string) => new Promise(async (resolve, reject) => {
  const data = await fetch(path);
  try {
    const isValid = validator.validate(schema, data);
    if (!isValid) {
      throw new Error("invalid data, scheme missmatch");
    } else {
      resolve(data);
    }
  } catch (e) {
    console.log('Validation error: ', validator.errors);
    reject(e);
  }
});
  

export default getItems;
