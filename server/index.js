const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, deviceType, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "llabresmarc083@gmail.com",
      pass: "TU_APP_PASSWORD" // Usa una contraseña de aplicación, no tu contraseña normal
    }
  });

  const mailOptions = {
    from: email,
    to: "llabresmarc083@gmail.com",
    subject: `Nuevo mensaje de contacto de ${name}`,
    text: `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Dispositivo: ${deviceType}
Mensaje: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});
