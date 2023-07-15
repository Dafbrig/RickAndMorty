const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case "REMOVE_FAV":
      let copy = state.allCharacters.filter((character) => {
        return parseInt(character.id) !== parseInt(payload);
      });
      return {
        ...state,
        myFavorites: copy,
        allCharacters: copy,
      };
  
    case "FILTER":
      let copy2 = [...state.allCharacters];
      let filterGender = copy2.filter((character) => {
        return character.gender === payload
      })
      return {
        ...state,
        myFavorites: filterGender
      };

    case "ORDER":
      let copy3 = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copy3.sort((a,b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id
        })
      };

    default:
      return { ...state };
  }
};

export default rootReducer;

//Male --> Rick;

//favorites --> Rick; Summer; Beth;
//ALL --> Rick; Summer; Beth;
