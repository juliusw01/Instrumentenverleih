import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker(props : any) {
  const [value, setValue] = React.useState<Date | null>(null);
  const {
    beschreibung
  } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={beschreibung}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => 
            <TextField {...params}
            sx={{
                svg: { color: '#fff'},
                input:  { color: '#fff'},
                label:  { color: '#fff'}
            }} />}
      />
    </LocalizationProvider>
  );
}
