import { Box, TextField, TextFieldProps, Stack } from '@mui/material';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePickerToolbar } from '@mui/x-date-pickers/DatePicker/DatePickerToolbar';
import Iconify from '../Iconify';

interface IProps {
  name: string;
  label?: string;
  inputFormat?: string;
  onSetValueCustomize?: Function;
  defaultValue?: Date;
  views?: Array<'year' | 'month' | 'day'>;
  isDesktop?: boolean;
}

type Props = IProps & TextFieldProps;

export default function RHFDatePicker({
  name,
  label,
  inputFormat = 'dd/MM/yyyy',
  onSetValueCustomize,
  defaultValue,
  views,
  isDesktop,
  ...other
}: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      render={({ fieldState: { error }, field }) => (
        <Stack position="relative" width="100%">
          {isDesktop ? (
            <DesktopDatePicker
              {...field}
              label={label}
              inputFormat={inputFormat}
              views={views}
              onChange={(value) => {
                field.onChange(value);
                onSetValueCustomize?.(value, name);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={error && error.message}
                  error={!!error}
                  {...other}
                />
              )}
            />
          ) : (
            <MobileDatePicker
              {...field}
              inputFormat={inputFormat}
              DialogProps={{
                sx: {
                  '.MuiPickersCalendarHeader-label': {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflowX: 'hidden',
                  },
                },
              }}
              onChange={(value) => {
                field.onChange(value);
                onSetValueCustomize?.(value, name);
              }}
              dayOfWeekFormatter={(day) => day}
              ToolbarComponent={(props) => (
                <Box
                  sx={{
                    color: '#FFFFFF ',
                    backgroundColor: 'primary.main',
                    '& .MuiTypography-overline': {
                      color: '#FFFFFF ',
                      fontWeight: 500,
                      fontSize: 12,
                      opacity: 0.72,
                    },
                  }}
                >
                  <DatePickerToolbar
                    {...props}
                    toolbarFormat="EEEE, MM yyyy"
                    toolbarTitle="Chọn ngày"
                  />
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={label}
                  sx={{
                    height: '56px',
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#919EAB52',
                      },
                      '&:hover fieldset': {
                        borderColor: '#919EAB52',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#919EAB52',
                      },
                    },
                  }}
                  helperText={error && error.message}
                  error={!!error}
                  {...other}
                  InputLabelProps={{
                    style: { color: '#98A1B3' },
                  }}
                  InputProps={{
                    endAdornment: (
                      <Iconify
                        icon={'solar:calendar-linear'}
                        height={24}
                        width={24}
                        color={'primary.main'}
                        style={{ cursor: 'pointer' }}
                      />
                    ),
                  }}
                />
              )}
            />
          )}
        </Stack>
      )}
    />
  );
}
