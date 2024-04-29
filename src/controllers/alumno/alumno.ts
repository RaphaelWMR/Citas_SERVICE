import { Request, Response } from "express";
import { Alumno } from "../../models/alumno";

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
            msg: `Ocurrió un error`
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

export const getAlumnoByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const emailunmsm = email + "@unmsm.edu.pe";

        const alumno = await Alumno.findOne({ where: { alumno_correoElectronico: emailunmsm } });

        if (alumno) {
            res.json(alumno);
        } else {
            res.status(404).json({
                msg: `No existe un alumno con el email ${emailunmsm}`
            });
        }
    } catch (error) {
        console.error('Error al buscar alumno por email:', error);
        res.status(500).json({
            msg: 'Error al buscar alumno. Por favor, inténtalo de nuevo.'
        });
    }
};

//UPDATE
export const updateAlumno = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const alumno = await Alumno.findByPk(id);
        if (alumno) {
            await alumno.update(body);
            res.json({
                msg: `Los datos del alumno fueron actualizados con exito`
            })
        } else {
            res.status(404).json({
                msg: {
                    msg: `No existe un alumno con el id ${id}`
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        });
    }

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

//Funciones de agregacion

export const getAlumnoCount = async (req: Request, res: Response) => {
    const alumnoCount = await Alumno.count();

    res.json({
        alumnoCount
    })
};

export const countAlumnosObservados = async (req: Request, res: Response) => {
    const countObs = await Alumno.count({
        where: {
            estado_id: 1,
        },
    });
    res.json({
        countObs
    })
};

