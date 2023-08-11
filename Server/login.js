// Importar el modelo User
const User = require('./DB_connection').User;

// Definir la función login
const login = async (req, res) => {
  try {
    // Obtener el email y password de los parámetros de consulta (Query)
    const { email, password } = req.query;

    // Validar que se hayan proporcionado ambos datos
    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    // Buscar el usuario por su email
    const user = await User.findOne({ where: { email } });

    // Si no se encuentra el usuario, responder con un estado 404
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar las contraseñas
    if (user.password !== password) {
      return res.status(403).json({ message: 'Contraseña incorrecta' });
    }

    // Si las contraseñas coinciden, responder con el objeto de acceso
    return res.status(200).json({ access: true });
  } catch (error) {
    // Manejar errores y responder con un estado 500
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Exportar la función login
module.exports = login;
