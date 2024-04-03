import { Request, Response } from "express";
import { Alumno } from "../models/alumno";

//CREATE
export const postAlumno = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Alumno.create(body);
        res.json({
            msg: `El alumno fue agregado con exito`
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};

//READ
export const getAlumnos = async (req: Request, res: Response) => {
    const listAlumnos = await Alumno.findAll();
    res.json(listAlumnos);
}

export const getAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    const alumno = await Alumno.findByPk(id);
    if (alumno) {
        res.json(alumno);
    } else {
        res.status(404).json({
            msg: `No existe un alumno con el id ${id}`
        })
    }
}

//UPDATE
export const updateAlumno = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update Alumno",
        id,
        body
    })
}

//DELETE
export const deleteAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    const alumno = await Alumno.findByPk(id);
    if (!alumno) {
        res.status(404).json({
            msg: `No existe un alumno con el id ${id}`
        })
    } else {
        await alumno.destroy();
        res.json({
            msg: 'El alumno fue eliminado con exito'
        });
    }
}

