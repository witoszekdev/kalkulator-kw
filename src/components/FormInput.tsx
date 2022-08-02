import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

interface InputProps {
  label: string;
  children: React.ReactNode;
  error?: string;
}

const FormInput: React.FC<InputProps> = ({ label, children, error }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
