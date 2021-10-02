import {
  FormControl,
  Input as ChakraInput,
  FormLabel,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
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
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
