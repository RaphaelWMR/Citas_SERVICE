import { Request, Response } from "express";
import { Cita } from "../models/cita";

// CREATE
export const postCita = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Cita.create(body);
        res.json({
            msg: `La cita fue agregada con exito`
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error`
        })
    }
}

// READ
export const getCitas = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const listCitas = await Cita.findAll();
        res.json(listCitas);
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un problema`
        })
    }
}

export const getCita = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cita = await Cita.findByPk(id);
    if (cita) {
        res.json(cita);
    } else {
        res.status(404).json({
            msg: `No existe cita con id ${id}`
        })
    }
}