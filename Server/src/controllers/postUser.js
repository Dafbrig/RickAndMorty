// Importar el modelo User desde DB_connection
const User = require('./DB_connection').User;

// Definir la función postUser
const postUser = async (req, res) => {
  try {
    // Obtener el email y password del cuerpo de la solicitud
    const { email, password } = req.body;

    // Validar que se hayan proporcionado ambos datos
    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    // Crear un nuevo usuario utilizando el método findOrCreate
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });

    // Si el usuario ya existía, informar al cliente
    if (!created) {
      return res.status(200).json({ message: 'Usuario existente', user });
    }

    // Responder con el usuario guardado
    return res.status(201).json({ message: 'Usuario creado', user });
  } catch (error) {
    // Manejar errores y responder con un estado 500
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Exportar la función postUser
module.exports = postUser;
