import axios from "axios";

// ACTION | removeFav
export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    });
  };
}

export const addFav = (character) => {
  return {
    type: 'ADD_FAV',
    payload: character
  }
}

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender
  }
}

export const orderCards = (orden) => {
  return {
    type: "ORDER",
    payload: orden
  }
}
