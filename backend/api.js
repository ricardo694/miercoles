const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Conexión a la base de datos
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Nexus'
});

db.on('error', (err) => {
  console.error('Error en el pool de conexiones:', err);
});

//-------------------------REGISTRO DE USUARIO----------------------------

app.post/'/api/Register',async(req,res)=>{
    const{Nombre,Email,Contraseña}=req.body;
    try{
        const[rows]=await db.query(
            'SELECT * FROM usuario Email = ?', [Email]);
        if (rows.length > 0) {
        return res.status(409).json({ error: 'Usuario ya existe' });
    }
    await db.query(
      'INSERT INTO usuario (Nombre, Email, Contraseña, Tipo_usuario) VALUES (?, ?, ?, ?)',  [Nombre, Email, Contraseña, 'Cliente'] );
        res.status(201).json({ message: 'Datos guardados correctamente' });
    }catch{
        console.error('Error en el servidor:', error);
    res.status(500).send('Error en el servidor');
    }
}

// ------------------------INICIO DE SESION-------------------------------
app.post('/api/login', async (req, res) => {
  const { email, contraseña } = req.body;
  try {
    const [rows] = await db.query(
      `SELECT * FROM usuario WHERE Email = ? AND Contraseña = ? AND Tipo_usuario = 'cliente'`,
      [email, contraseña]
    );

    if (rows.length > 0) {
      const usuario = rows[0];

      res.status(200).json({
        mensaje: 'Inicio de sesión exitoso',
        usuario: {
          id: usuario.Id_usuario,
          nombre: usuario.Nombre,
          email: usuario.Email,
          tipo: usuario.Tipo_usuario
        }
      });

    } else {
      res.status(401).json({ mensaje: 'Credenciales incorrectas o no es cliente' });
    }

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});



  const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
