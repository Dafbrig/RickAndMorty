// Importar el modelo Favorite
const Favorite = require('./DB_connection').Favorite;

// Definir la función deleteFav
const deleteFav = async (req, res) => {
  try {
    // Obtener el id de los parámetros de la solicitud
    const { id } = req.params;

    // Eliminar el personaje favorito utilizando el método destroy
    await Favorite.destroy({
      where: { id },
    });

    // Buscar y devolver todos los personajes favoritos actualizados
    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    // Manejar errores y responder con un estado 500
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Exportar la función deleteFav
module.exports = deleteFav;
