// Importar el modelo Favorite
const Favorite = require('./DB_connection').Favorite;

// Definir la función postFav
const postFav = async (req, res) => {
  try {
    // Obtener las propiedades del cuerpo de la solicitud
    const { name, origin, status, image, species, gender } = req.body;

    // Validar que todos los datos estén presentes
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    // Crear un nuevo favorito utilizando el método findOrCreate
    await Favorite.findOrCreate({
      where: { name },
      defaults: { origin, status, image, species, gender },
    });

    // Buscar y devolver todos los personajes favoritos
    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    // Manejar errores y responder con un estado 500
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Exportar la función postFav
module.exports = postFav;
