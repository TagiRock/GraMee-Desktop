/*import * as express from "express";
//import {deserialize, JsonProperty} from "json-typescript-mapper";
import {Validator} from "class-validator";
import {ValidationError} from "class-validator";

type Constructor<T> = {new(): T};

export function validate<T>(type: Constructor<T>): express.RequestHandler {
  let validator = new Validator();

  return (req, res, next) => {
    let input = deserialize(type, req.body);

    let errors = validator.validateSync(input);
    if (errors.length > 0) {
      next(errors);
    } else {
      req.body = input;
      next();
    }
  }
}*/