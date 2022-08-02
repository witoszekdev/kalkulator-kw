import { COURT_MAP } from "../consts";
import { Select } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface CitySelectProps {
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const CitySelect: React.FC<CitySelectProps> = ({ value, onChange }) => {
  return (
    <Select
      onChange={onChange}
      value={value}
      placeholder="Wybierz sąd"
      required
    >
      {Object.entries(COURT_MAP).map(([value, displayText]) => (
        <option key={value} value={value}>
          {value} - {displayText}
        </option>
      ))}
    </Select>
  );
};
