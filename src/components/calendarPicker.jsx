import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import theme from '../theme.js';
import CalendarPicker from 'react-native-calendar-picker';

export default function App ({getDates}) {
    const minDate = new Date(2020,6,3); // Today
    const maxDate = new Date();
    const [startDate,setStartDate]  = useState(new Date)
    const [endDate, setEndDate] = useState(new Date)

    const onDateChange = (date,type) => {
        
        if (type === 'END_DATE' && date != null  ) {
            date = date.toJSON().toString().slice(0,10)
            setEndDate(date)
            getDates(startDate,date)
        } 
        else if(date!=null) {
            date = date.toJSON().toString().slice(0,10)
            setStartDate(date)
            setEndDate(null)
            getDates(date,null)
        }
        
    }
    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
          months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
          allowRangeSelection={true}
          showDayStragglers={true}
          minDate={minDate}
          width={330}
            height={350}
          maxDate={maxDate}
          
          textStyle={{
            color: '#fff',
            fontWeight: 'bold',
          }}
          todayBackgroundColor={theme.colors.tertiary}
          selectedDayColor={theme.colors.secondary}
          selectedDayTextColor= {theme.colors.primary}
          onDateChange={onDateChange}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    height: "10%",
    marginTop: 20,
  },
});