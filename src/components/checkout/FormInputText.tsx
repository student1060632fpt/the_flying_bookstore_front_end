// src/form-component/FormInputText.tsx
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IFormCheckout } from "@/types/form";
import FormHelperText from "@mui/material/FormHelperText";
export const FormInputText = ({
  name,
  label,
  required,
}: {
  required?: boolean;
  name: keyof IFormCheckout;
  label: string;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            helperText={error ? error.message : null}
            size="medium"
            id={`${name} - form checkout`}
            error={!!error}
            fullWidth
            label={label}
            variant="standard"
            {...field}
          />
          {!!error && <FormHelperText>{error?.message}</FormHelperText>}
        </>
      )}
    />
  );
};
