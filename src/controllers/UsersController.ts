import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
    
        
    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        var usersService = new UsersService();

        try {
            const users = await usersService.create({email})

            return response.json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            })
        }    
       

    }

    async findByEmail(request: Request, response: Response) {
       
        var usersService = new UsersService();
        const { email } = request.body;
        
        try {
            const users = await usersService.findByEmail(email)

            return response.json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            })
        }    
        
    }
}

export { UsersController }