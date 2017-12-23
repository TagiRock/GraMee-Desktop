import * as Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });

const schema = {
    "properties": {
        "name": { "type": "string" },
        "description": { "type": "string", "maximum": 1000 },
        "languages": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        },
        "price": { "type": "number", "minimum": 500, "maximum": 50000 }
    },
    "minProperties": 4
};

const validater = ajv.compile(schema);

/* tslint:disable:no-any */
export function validate(data: any): boolean {
    const valid = validater(data);
    if (valid) return true;
    else return false;
}
