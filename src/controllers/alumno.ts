import { Request, Response } from 'express';

//CREATE
export const postAlumno = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: "post Alumno",
        body
    })
}

//READ
export const getAlumnos = (req: Request, res: Response) => {
    res.json({
        msg: 'get Alumnos'
    })
}

export const getAlumno = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'get Alumno',
        id
    })
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
export const deleteAlumno = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: "delete Alumno",
        id
    })
}

