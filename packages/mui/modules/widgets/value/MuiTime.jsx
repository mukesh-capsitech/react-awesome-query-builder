import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Utils } from "@react-awesome-query-builder/ui";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const { moment } = Utils;

export default (props) => {
  const {value, setValue, use12Hours, readonly, placeholder, timeFormat, valueFormat, customProps} = props;

  const isV6 = !!TimePicker?.propTypes?.format;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const hasSeconds = timeFormat.indexOf(":ss") != -1;
  const timeValue = value ? moment(value, timeFormat) : null;

  const renderInput = (params) => 
    <TextField 
      size="small" 
      variant="standard"
      {...params}
    />;

  const desktopModeMediaQuery = "@media (pointer: fine), (pointer: none)";

  const pickerProps = isV6 ? {
    format: timeFormat,
    slotProps: {
      textField: {
        size: "small",
        variant: "standard"
      },
      toolbar: {
        toolbarPlaceholder: !readonly ? placeholder : "",
      },
    },
  } : {
    inputFormat: timeFormat,
    renderInput,
    toolbarPlaceholder: !readonly ? placeholder : "",
  };

  return (
    <FormControl>
      <TimePicker
        desktopModeMediaQuery={desktopModeMediaQuery}
        readOnly={readonly}
        disabled={readonly}
        ampm={!!use12Hours}
        value={timeValue}
        onChange={handleChange}
        views={hasSeconds ? ["hours", "minutes", "seconds"] : ["hours", "minutes"]}
        {...pickerProps}
        {...customProps}
      />
    </FormControl>
  );
};
