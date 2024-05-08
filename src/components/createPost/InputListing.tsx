import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IBook } from "../../types/book";

export const InputListing = ({
  name,
  label,
  required,
}: {
  required?: boolean;
  name: keyof IBook; // TODO fix to IFormCheckout
  label: string;
}) => {
  const { control, getValues } = useFormContext<IBook>();
  const id = getValues("id");
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
            id={`${name} - form listing`}
            error={!!error}
            fullWidth
            type={name == "pageCount" ? "number" : "text"}
            InputLabelProps={{ shrink: true }}
            label={`${label} ${required ? "*" : ""}`}
            variant="standard"
            disabled={id !== -1 && id !== 0}
            {...field}
          />
        </>
      )}
    />
  );
};
