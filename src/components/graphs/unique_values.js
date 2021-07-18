export const unique_values = (data, column, xaxis_modification = "") => {
  var unique = [];
  var distinct = [];
  for (let i = 0; i < data.length; i++) {
    let value = data[i][column];
    if (xaxis_modification === "by_month") value = value.split("/")[1];

    if (!unique[value]) {
      distinct.push(value);
      unique[value] = 1;
    }
  }

  return distinct;
};
