// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, Select, SelectProps, MenuItem } from '@mui/material';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  defaultValue?: number;
  options: { id: number; className: string }[];
};

type Props = IProps & SelectProps;

export default function RHFSelectItem({ name, defaultValue, options, ...other }: Props) {
  const { control } = useFormContext();

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
          sx={{ zIndex: 0 }}
          defaultValue={options.find((item) => item.id === defaultValue)}
        >
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.className}</MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
