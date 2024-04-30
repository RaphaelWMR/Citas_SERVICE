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

export const getCitasByAlumno = async (req: Request, res: Response) => {
    const { id } = req.params; // ID del alumno

    try {
        // Buscar el alumno por su ID
        const alumno = await Alumno.findByPk(id);
        if (!alumno) {
            return res.status(404).json({ msg: `No se encontró ningún alumno con el ID ${id}` });
        }

        // Obtener todas las citas asociadas al alumno utilizando la relación
        const listCitas = await Cita.findAll({
            where: { alumno_id: id }, // Filtrar por ID de alumno
            include: [
                { model: Alumno, as: 'alumno' },
                { model: CitaConfirmacion, as: 'citaconfirmacion' },
                { model: CitaModalidad, as: 'citamodalidad' },
                { model: CitaTipo, as: 'citatipo' },
            ]
        });

        // Si no se encontraron citas para el alumno, devolver un array vacío
        if (!listCitas || listCitas.length === 0) {
            return res.json([]);
        }

        // Mapear las citas para formatear el JSON de salida
        const formattedCitas = listCitas.map((cita: any) => {
            return {
                cita_id: cita.cita_id,
                alumno_id: cita.alumno_id,
                cita_fecha: cita.cita_fecha,
                cita_hora: cita.cita_hora,
                cita_descripcion: cita.cita_descripcion,
                citaModalidad_id: cita.citaModalidad_id,
                citaTipo_id: cita.citaTipo_id,
                citaConfirmacion_id: cita.citaConfirmacion_id,
                alumno: {
                    // Propiedades del alumno asociado
                    alumno_id: cita.alumno?.alumno_id,
                    alumno_primerApellido: cita.alumno?.alumno_primerApellido,
                    alumno_segundoApellido: cita.alumno?.alumno_segundoApellido,
                    alumno_nombres: cita.alumno?.alumno_nombres,
                    alumno_dni: cita.alumno?.alumno_dni,
                    alumno_codigo: cita.alumno?.alumno_codigo,
                    alumno_telefono: cita.alumno?.alumno_telefono,
                    alumno_correoElectronico: cita.alumno?.alumno_correoElectronico,
                    estado_id: cita.alumno?.estado_id,
                    alumno_fechaNacimiento: cita.alumno?.alumno_fechaNacimiento,
                    eap_id: cita.alumno?.eap_id
                },
                citamodalidad: {
                    // Propiedades de la modalidad asociada
                    citaModalidad_id: cita.citamodalidad?.citaModalidad_id,
                    citaModalidad_nombre: cita.citamodalidad?.citaModalidad_nombre
                },
                citatipo: {
                    // Propiedades del tipo de cita asociado
                    citaTipo_id: cita.citatipo?.citaTipo_id,
                    CitaTipo_nombre: cita.citatipo?.CitaTipo_nombre
                },
                citaconfirmacion: cita.citaconfirmacion // Mantener la confirmación de la cita
            };
        });

        res.json(formattedCitas);
    } catch (error) {
        console.error("Error al obtener citas por alumno:", error);
        res.status(500).json({ msg: "Ocurrió un error al obtener las citas por alumno" });
    }
};

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

export async function getCitasConfirmadasCount(): Promise<number> {
    try {
        const count = await Cita.count(
            {
                where: {
                    citaConfirmacion_id: 1,
                },
            }
        ); // Use the count() method
        return count; // Return the count directly
    } catch (error) {
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