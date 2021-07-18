export const convert_data_types = (data) => {
  return data.map((row) => {
    row["Amount"] = parseFloat(row["Amount"]);

    return row;
  });
};
