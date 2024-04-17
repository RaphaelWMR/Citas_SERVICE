import { Request, Response } from "express";
import { Eap } from "../../models/eap";

// READ
export const getEAP = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const listEap = await Eap.findAll();
        res.json(listEap);
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un problema`
        })
    }
}