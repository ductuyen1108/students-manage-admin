import { DateTimePicker } from '@mui/x-date-pickers';
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps, Stack } from '@mui/material';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

export default function RHFDateTimePicker({ name, ...other }: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ fieldState: { error }, field }) => (
        <Stack position="relative" width="100%">
          <DateTimePicker
            {...field}
            inputFormat="dd/MM/yyyy HH:mm:ss"
            renderInput={(params) => (
              <TextField
                size="small"
                {...params}
                fullWidth
                helperText={error && error.message}
                  error={!!error}
                type="number"
                {...other}
              />
            )}
          />
        </Stack>
      )}
    />
  );
}
