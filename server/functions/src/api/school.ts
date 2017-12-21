import { Request, Response, NextFunction } from "express";
import { check, body, param, validationResult} from "express-validator/check";
import { RequestValidation } from "express-validator";
class ClassRoomParam {
    public name: string;
    public description: string;
    public languages: string[];
    public level: string;
    public price: number;
}
function createClassroom(req: Request, res: Response, next: NextFunction) {
    const param: ClassRoomParam = req.body;
    check("name").exists();
    check("description").exists();
    check("name").exists();
    check("price").exists();
    body()

}

export default {
    createClassroom
};
