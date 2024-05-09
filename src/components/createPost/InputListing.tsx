import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { IBook } from "../../types/book";
import { TFieldPostValue } from "./CreatePost";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  name: string; // TODO fix to IBook
  label: string;
  isPost?: boolean; // nếu là posting thì ko disable các thứ đó
}
export const InputListing = (props: IProps) => {
  const { name, label, required, isPost, ...inputProps } = props;
  const { control, getValues } = useFormContext() ?? {};
  if (!control) return <></>;
  const id = getValues("id");
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `Trường ${label} cần phải điển` : false }}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            {...inputProps}
            helperText={error ? error.message : null}
            size="medium"
            id={`${name} - form listing`}
            error={!!error}
            fullWidth
            InputLabelProps={{ shrink: true }}
            label={`${label} ${required ? "*" : ""}`}
            variant="standard"
            disabled={!isPost && id !== -1 && id !== 0}
            color="primary" // Add this line to specify the color prop
            {...field}
          />
        </>
      )}
    />
  );
};
