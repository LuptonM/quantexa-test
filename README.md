React App made for take home assessment for quantexa assessment.

New graphs can be rendered easily using a dictionary of graph settings.

e.g.

{
    type: "line",
    xaxis: "Date",
    yaxis: "Amount",
    yaxis_modification: "count",
    colour_column: "Invoice Currency Unit",
    title: "Count of transactions by month by currency",
    yaxis_log: true,
    xaxis_modification: "by_month",
    palette: default_palette,
  }
  
  The table in the app is virtualised using the react-virtualised package. Unfortunately I have found a way to override the padding-right in the header row which makes the header look a tad too wide
