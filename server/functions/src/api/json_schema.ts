declare module "os";
declare function require(x: string): any;
interface ClassRoomParam {
  name: string;
  description: string;
  languages: string[];
  price: number;
}
type LevelType = "easy" | "medium" | "hard";
const jsontext = '{"description":"Jqueryの使い方","languages":["php","php"],"price":100}';
const classRoom: ClassRoomParam = JSON.parse(jsontext);

const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });

let schema = {
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
    "price": { "type": "number" }
  }
};

const validate = ajv.compile(schema);

// test({ "foo": "abc", "bar": 2 });
// test({ "foo": 2, "bar": 4 });
console.log(classRoom.name);
console.log(classRoom.description);
console.log(classRoom.languages);
console.log(classRoom.price);
test({ "languages": classRoom.languages, "price": classRoom.price });
function test(data: any) {
  const valid = validate(data);
  if (valid) console.log("Valid!");
  else console.log("Invalid: " + ajv.errorsText(validate.errors));
}
