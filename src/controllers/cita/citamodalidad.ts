import { Request, Response } from "express";
import { CitaModalidad } from "../../models/citamodalidad";

// READ
export const getModalidad = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const listModalidad = await CitaModalidad.findAll();
        res.json(listModalidad);
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un problema`
        })
    }
}