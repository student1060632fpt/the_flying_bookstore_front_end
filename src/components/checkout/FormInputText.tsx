// src/form-component/FormInputText.tsx
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IFormCheckout } from "@/types/form";
import FormHelperText from "@mui/material/FormHelperText";
import { IBook } from "../../types/book";
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
      rules={{ required: required ? `Trường ${label} cần phải điển` : false }}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            helperText={error ? error.message : null}
            size="medium"
            id={`${name} - form checkout`}
            error={!!error}
            fullWidth
            InputLabelProps={{ shrink: true }}
            label={`${label} ${required ? "*":""}`}
            variant="standard"
            {...field}
          />
        </>
      )}
    />
  );
};
