import { Request, Response } from "express";
import { CitaConfirmacion } from "../../models/citaconfirmacion";

// READ
export const getConfirmacion = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const listConfirmacion = await CitaConfirmacion.findAll();
        res.json(listConfirmacion);
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un problema`
        })
    }
}
