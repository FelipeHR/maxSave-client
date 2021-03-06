import React, {useState, Fragment, useCallback, useMemo} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, Alert} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import theme from '../theme';
import testIDs from '../testIDs';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
  today: "Hoy",
};
LocaleConfig.defaultLocale = 'es';

const INITIAL_DATE = '2022-06-26';
var diaSeleccionado = 'Hoy';
const CalendarScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [visible, setVisible] = useState(false);

  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    diaSeleccionado = day.day + '-' + day.month + '-' + day.year;
    setSelected(day.dateString);
    Alert.alert('Seleccionaste una fecha','La fecha es '+ day.day + '-' + day.month + '-' + day.year)
  }, []);

  press = () => {
    if(!visible){
        setVisible(true);
    }
    else{
        setVisible(false);
    }
  }
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: theme.colors.secondary,
        selectedTextColor: 'white',
      }
    };
  }, [selected]);

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <TouchableOpacity onPress={press} style={{}} >
            <Text style={styles.text}>{diaSeleccionado}</Text>
        </TouchableOpacity>
        {(visible) ?
        <Calendar
            testID={testIDs.calendars.FIRST}
            enableSwipeMonths
            current={INITIAL_DATE}
            style={styles.calendar}
            onDayPress={onDayPress}
            markedDates={marked}
            firstDay={1}
            theme={{
                calendarBackground: theme.colors.primary,
                monthTextColor: theme.colors.fontRed,
                arrowColor: theme.colors.white,
                textDisabledColor: theme.colors.tertiary,
                todayTextColor: theme.colors.fontRed,
                dayTextColor: theme.colors.white,
                textMonthFontWeight: theme.fontWeight.bold,
                textMonthFontSize: theme.fontSize.medium,
            }}
            />
        : null}
      </Fragment>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} testID={testIDs.calendars.CONTAINER}>
      {renderCalendarWithSelectableDate()}
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    backgroundColor: theme.colors.primary,
    position: 'relative',
  },
  text: {
    textAlign: 'center',
    color: theme.colors.secondary,
    padding: 10,
    backgroundColor: theme.colors.primary,
    fontSize: theme.fontSize.large,
    fontWeight: 'bold',
    borderRadius: 10,
    width: 300,
    justifyContent: 'center',
  }
});