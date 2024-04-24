import { Request, Response } from "express";
import { Cita } from "../../models/cita";
import { Alumno } from "../../models/alumno";
import { CitaConfirmacion } from "../../models/citaconfirmacion";
import { CitaModalidad } from "../../models/citamodalidad";
import { CitaTipo } from "../../models/citatipo";

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
        const listCitas = await Cita.findAll({
            include: [
                { model: Alumno, as: 'alumno' },
                { model: CitaConfirmacion, as: 'citaconfirmacion' },
                { model: CitaModalidad, as: 'citamodalidad' },
                { model: CitaTipo, as: 'citatipo' },
            ]
        });
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
    if (cita)
        res.json(cita);
    else {
        res.status(404).json({
            msg: `No existe cita con id ${id}`
        })
    }
}

// UPDATE
export const updateCita = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const cita = await Cita.findByPk(id);
        if (cita) {
            await cita.update(body);
            res.json({
                msg: `Los datos de la cita fueron actualizados con exito`
            })
        } else {
            res.status(404).json({
                msg: {
                    msg: `No existe cita con id ${id}`
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        })
    }
}

// DELETE
export const deleteCita = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cita = await Cita.findByPk(id);
    if (!cita)
        res.status(404).json({
            msg: `No existe cita con id ${id}`
        })
    else {
        await cita.destroy();
        res.json({
            msg: `La cita fue eliminada con exito`
        });
    }
}

//Funciones de agregacion

export const getCitasCount = async (req: Request, res: Response) => {
    const ctasCount = await Cita.count();
    console.log("gcc: ", ctasCount);
    res.json({
        ctasCount
    })
    return ctasCount;
};

export async function getTotalCitas(): Promise<number> {
    try {
        const count = await Cita.count(); // Use the count() method
        return count; // Return the count directly
    } catch (error) {
        console.error("Error while fetching cita count:", error);
        // Handle errors appropriately (e.g., throw a specific error)
        throw new Error("Failed to retrieve cita count");
    }
};

export async function getCitasConfirmadasCount(): Promise < number > {
    try {
        const count = await Cita.count(
            {
                where: {
                    citaConfirmacion_id: 1,
                },
            }
        ); // Use the count() method
        return count; // Return the count directly
    } catch(error) {
        console.error("Error while fetching cita count:", error);
        // Handle errors appropriately (e.g., throw a specific error)
        throw new Error("Failed to retrieve cita count");
    }
};



// Function to calculate and return the percentage of confirmed appointments
export const getPorcentajeCitasConfirmadas = async (req: Request, res: Response) => {
    try {
        const totalCitas = getTotalCitas();
        const confirmedCitas = await getCitasConfirmadasCount(); // Reuse existing function
        console.log("Total citas: ", totalCitas);
        console.log("Total citas conf: ", confirmedCitas);
        if (await totalCitas === 0) {
            res.json({ porcentaje: 0 }); // Handle division by zero
        } else {
            const porcentaje = Math.round((confirmedCitas / await totalCitas) * 100);
            res.json({ porcentaje });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error calculating appointment confirmation percentage" });
    }
};