const toggle_view_reducer = (state = 0, action) => {
  switch (action.type) {
    case "SET VIEW":
      return action.view;

    default:
      return state;
  }
};

export default toggle_view_reducer;
