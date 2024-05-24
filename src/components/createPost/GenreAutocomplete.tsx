import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IBook } from "../../types/book";
import axios from "axios";
import {
  Autocomplete,
  Box,
  Chip,
  CircularProgress,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import DoneIcon from "@mui/icons-material/Done";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useGenreStore } from "../../hooks/genre";
import { ICategory } from "../../types/category";

const GenreAutocomplete = ({}: {}) => {
  const { control, getValues } = useFormContext<IBook>();
  const { listGenre } = useGenreStore();
  const id = getValues("id");
  const findValue = (value: string[] | ICategory[]) => {
    if (!value || !Array.isArray(value)) return undefined;
    const arr = value.map((item: string | ICategory) => {
      if (typeof item !== "string") {
        return undefined;
      }
      const genreFinded = listGenre?.find((option) => {
        return item === option.name;
      });
      return genreFinded?.nameVn;
    });
    return arr;
  };
  if (id !== -1 && id !== 0) {
    return (
      <Controller
        name="genre"
        control={control}
        rules={{ required: `Trường thể loại cần phải điển` }}
        render={({ field: { value }, formState, fieldState }) => (
          <TextField
            value={findValue(value)}
            InputLabelProps={{ shrink: true }}
            variant="standard"
            label="Thể loại"
            fullWidth
            disabled
          />
        )}
      />
    );
  }
  return (
    <Controller
      name="genre"
      control={control}
      rules={{ required: `Trường thể loại cần phải điển` }}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Autocomplete
          multiple
          onChange={(event: any, newValue) => {
            onChange(newValue ? newValue : null);
          }}
          id="GenreAutocomplete-standard"
          options={listGenre || []}
          disabled={id !== -1 && id !== 0}
          getOptionKey={(option) => option?.name}
          getOptionLabel={(option) => option?.nameVn}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!error}
              helperText={error ? error.message : null}
              InputLabelProps={{ shrink: true }}
              variant="standard"
              label="Thể loại"
              inputRef={ref}
            />
          )}
        />
      )}
    />
  );
};

export default GenreAutocomplete;
