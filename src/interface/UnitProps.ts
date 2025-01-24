export default interface UnitProps {
  unit: UnitTypes;
}

type UnitTypes = {
  standard: "standard";
  metric: "metric";
  imperial: "imperial";
};
