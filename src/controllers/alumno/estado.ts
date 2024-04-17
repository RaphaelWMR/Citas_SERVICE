import { Request, Response } from "express";
import { Estado } from "../../models/estado";

// READ
export const getEstado = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const listEstado = await Estado.findAll();
        res.json(listEstado);
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un problema`
        })
    }
}