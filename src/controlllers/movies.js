const {Movie} = require('../db');

const addFavorite = async (req, res) => {
  const { id, backdrop_path, poster_path, title: movieTitle, name: movieName } = req.body;
    console.log("data in controller",req.body)
  try {
    const newFavorite = await Movie.create({
      id: id,
      backdrop_path: backdrop_path,
      poster_path: poster_path,
      title: movieName || movieTitle
    });

    return res.status(201).json({ success: true, message: 'Movie added to favorites', data: newFavorite });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to add movie to favorites', error: error.message });
  }
};

const deleteFavorite = async (req, res) => {
    const movieId = req.params.id;
  
    try {
      const deletedFavorite = await Movie.destroy({ where: { id: movieId } });
  
      if (!deletedFavorite) {
        return res.status(404).json({ success: false, message: 'Movie not found in favorites' });
      }
  
      return res.status(200).json({ success: true, message: 'Movie removed from favorites' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to remove movie from favorites', error: error.message });
    }
  };

  const getFavorites = async (req, res) => {
    try {
      const favorites = await Movie.findAll();
  
      return res.status(200).json({ success: true, message: 'Favorites retrieved successfully', data: favorites });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to retrieve favorites', error: error.message });
    }
  };
module.exports = {
  addFavorite, deleteFavorite, getFavorites
};
