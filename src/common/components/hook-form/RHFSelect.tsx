import { useFormContext, Controller } from 'react-hook-form';
import { Select, SelectProps, MenuItem } from '@mui/material';
import { useEffect } from 'react';

type IProps = {
  name: string;
  defaultValue?: string;
  options: { id: string; name: string }[];
};

type Props = IProps & SelectProps;

export default function RHFSelect({ name, defaultValue, options, ...other }: Props) {
  const { control, getValues, setValue } = useFormContext();
  const defaultOption = options.find((option) => option.name === defaultValue);
  useEffect(() => {
    if (defaultOption) {
      setValue(name, defaultOption.id);
    }
  }, [name, defaultOption, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...field}
          fullWidth
          error={!!error}
          {...other}
          sx={{ zIndex: 0, '&. MuiInputBase': { padding: "8.5px 14px !important"}}}
          defaultValue={defaultOption ? defaultOption.id : undefined }
        >
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
