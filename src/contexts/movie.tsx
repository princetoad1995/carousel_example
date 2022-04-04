import React, { Dispatch, useReducer } from 'react';

type MovieStateType = {
  likedMovies?: string[];
};

type MovieActionType = {
  type: 'UPDATE_LIKED_MOVIE';
  likedMovies?: string[];
};

const initialState: MovieStateType = {
  likedMovies: [],
};

const MovieContext = React.createContext<{
  state: MovieStateType;
  dispatch: Dispatch<MovieActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const likedMovieReducer = (
  state: MovieStateType,
  action: MovieActionType,
): MovieStateType => {
  switch (action.type) {
    case 'UPDATE_LIKED_MOVIE':
      return { ...state, likedMovies: action.likedMovies };
    default:
      return state;
  }
};

const MovieProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(likedMovieReducer, initialState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
