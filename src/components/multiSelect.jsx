import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from "react";
import RoundIcon from './roundIcon';
import { Text, View, StyleSheet } from "react-native";
export default function MultiSelect({ getCategory }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Ropa', value: 'Ropa', icon: () => <RoundIcon icon={"Ropa"} size="verySmall" />},
    {label: 'Pasatiempos', value: 'Pasatiempos', icon: () => <RoundIcon icon={"Pasatiempos"} size="verySmall" />},
    {label: 'Estudios', value: 'Estudios', icon: () => <RoundIcon icon={"Estudios"} size="verySmall" />},
    {label: 'Cuentas', value: 'Cuentas', icon: () => <RoundIcon icon={"Cuentas"} size="verySmall" />},
    {label: 'Transporte', value: 'Transporte', icon: () => <RoundIcon icon={"Transporte"} size="verySmall" />},
    {label: 'Juegos', value: 'Juegos', icon: () => <RoundIcon icon={"Juegos"} size="verySmall" />},
    {label: 'Salud', value: 'Salud', icon: () => <RoundIcon icon={"Salud"} size="verySmall" />},
    {label: 'Mascota', value: 'Mascota', icon: () => <RoundIcon icon={"Mascota"} size="verySmall" />},
    {label: 'Comida', value: 'Comida', icon: () => <RoundIcon icon={"Comida"} size="verySmall" />},
    {label: 'Otros', value: 'Otros', icon: () => <RoundIcon icon={"Otros"} size="verySmall" />}
  ]);
  return (
    <DropDownPicker
      open={open}
      multiple
      min={0}
      max={3}
      value={value}
      mode="BADGE"
      language="ES"
      showBadgeDot={false}
      categorySelectable={true}
      extendableBadgeContainer
      hideSelectedItemIcon={false}
      onChangeValue={(value) => {
        getCategory(value);
      }}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
