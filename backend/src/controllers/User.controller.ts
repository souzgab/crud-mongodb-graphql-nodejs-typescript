import { Request, Response} from 'express'
import EmailService from '../services/Email.service'

const users = [
    {
        name: "Gabriel",
        idade: 22
    },
    {
        name: "Julia",
        idade: 23
    },
    {
        name: "Vini",
        idade: 18
    }
]

export default {
    async getUsers(req: Request,res: Response){
        return res.json({users})
    },

    async createUser(req: Request, res: Response){
        const emailService = new EmailService;

        emailService.sendMail({
        to: {name: "Gabriel", email: "Gabriel@G.com"},
        message: {body: "c", subject: "x", attachment: ["xxx"]}
        });
    },

    async x(req: Request, res: Response){

    },
}