const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();


router.get('',(req,res) =>{
    res.render('index');
    
});

router.post('/send-email', async (req, res) => {
    const {name, email, message} = req.body;

    contentHTML = `
    <h1>Informacion del usuario</h1>
    <ul>
        <li>Usuario: ${name}</li>
        <li>Email del usuario: ${email}</li>
    </ul>
    <p>${message}</p>
    `;
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'jordan.powlowski75@ethereal.email',
            pass: 'U8tWCk3Cv1JTYjZZHB'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "Remitente",
        to: "fabrimeloni1@gmail.com",
        subject: 'Fomulario de contacto de mi pagina',
        html: contentHTML
    });


    res.send('recived');
}); 


module.exports = router;