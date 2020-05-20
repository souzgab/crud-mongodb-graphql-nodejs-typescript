interface IMailTo{
    name: String;
    email: String
}

interface IMailMessage{
    subject: String
    body: String
    attachment?: Array<String>
}
interface MessageDTO {
    to: IMailTo,
    message: IMailMessage
}

class EmailService {
    sendMail({to, message}: MessageDTO){
        console.log(`Email enviado para ${to.name}: com a message: ${message.subject}`)
    }
}

export default EmailService