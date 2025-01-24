export default interface Unit {
  unit: types;
}

type types = {
  standard: "standard";
  metric: "metric";
  imperial: "imperial";
};
