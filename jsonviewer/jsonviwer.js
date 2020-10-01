function jsonParser() {
  var json_data = { "2013-01-21": 1, "2013-01-22": 7 };
  var result = [];

  for (var i in json_data) result.push([i, json_data[i]]);

  console.log(result);
}
