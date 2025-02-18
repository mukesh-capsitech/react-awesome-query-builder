import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const hideLabelsFor = {
  "addRuleGroup": true,
  "addRuleGroupExt": true,
  "delGroup": true,
  "delRuleGroup": true,
  "delRule": true,
};

const typeToColor = {
  "addRule": "neutral",
  "addGroup": "primary",
  "delGroup": "secondary",
  "delRuleGroup": "secondary",
  "delRule": "secondary",
};

export default (props) => {
  const {type, label, onClick, readonly, renderIcon} = props;
  const iconProps = {
    type,
    readonly,
  };
  const icon = renderIcon?.(iconProps);

  if (!label || hideLabelsFor[type]) {
    return (
      <IconButton
        size="small" 
        disabled={readonly} 
        onClick={onClick} 
        color={typeToColor[type]}
      >{icon}</IconButton>
    );
  } else {
    return (
      <Button 
        size="small" 
        disabled={readonly} 
        onClick={onClick} 
        color={typeToColor[type]} 
        startIcon={icon}
      >{label}</Button>
    );
  }
};
