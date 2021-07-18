const initial_state = {
  columns: [],
  data: [],
};

const data_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SET DATA":
      return action.data;

    case "APPEND DATA":
      return { ...state, data: [...state.data, ...action.data] };

    case "SET COLUMNS":
      return { ...state, columns: action.columns };

    case "RESET DATA":
      return initial_state;

    default:
      return state;
  }
};

export default data_reducer;
