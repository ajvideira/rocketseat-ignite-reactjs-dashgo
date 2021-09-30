import {
  FormControl,
  Input as ChakraInput,
  FormLabel,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl id={name}>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraInput
        name={name}
        variant="filled"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        size="lg"
        _hover={{
          bg: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
