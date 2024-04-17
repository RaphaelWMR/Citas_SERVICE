import { Request, Response } from "express";
import { CitaTipo } from "../../models/citatipo";

// READ
export const getTipo = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const listTipo = await CitaTipo.findAll();
        res.json(listTipo);
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un problema`
        })
    }
}
