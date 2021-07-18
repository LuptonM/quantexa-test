export const group_data = (
  data,
  group_args,
  modification,
  value_column,
  xaxis_modification = ""
) => {
  let helper = {};
  let result = data.reduce(function (r, o) {
    let key;
    for (let i = 0; i < group_args.length; i++) {
      if ((i === 0) & (xaxis_modification === "by_month")) {
        key = o[group_args[i]].split("/")[1];
      } else if (i === 0) {
        key = o[group_args[i]];
      } else {
        key = key + "-" + o[group_args[i]];
      }
    }

    if (!helper[key]) {
      helper[key] = Object.assign({}, o); // create a copy of o
      if (modification === "mean") helper[key].count = 1;
      if (modification === "sum") helper[key][modification] = 0;
      if (modification === "count") helper[key][modification] = 1;
      r.push(helper[key]);
    } else {
      if (modification === "mean") {
        helper[key][value_column] += o[value_column];
        helper[key].count++;
      }
      if (modification === "sum") helper[key][modification] += o[value_column];
      if (modification === "count") helper[key][modification]++;
    }

    return r;
  }, []);
  if (modification === "mean") {
    result.map((row) => {
      row[modification] = row[value_column] / row.count;
    });
  }
  return result;
};
