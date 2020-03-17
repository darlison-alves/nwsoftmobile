import React from 'react';
import DatePicker from 'react-native-datepicker';
import { Colors } from '../../defaults/constants';

export function DatePickerCustom({ onChangeDate, initialValues = { date: "", time: "" } }) {
    const [data, setData] = React.useState(initialValues)

    return <DatePicker
        style={{ width: '100%' }}
        androidMode={"spinner"}
        showIcon={false}
        date={data.date}
        time={data.time}
        timeZoneOffsetInMinutes={3}
        mode="datetime"
        placeholder="SELECIONA DATA"
        format="YYYY-MM-DDTHH:mm:ss"
        minDate="2016-05-01"
        maxDate="2025-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        is24Hour={true}
        customStyles={{
            datePicker: {
                borderColor: "#000"
            },
            dateInput: {
                alignItems: 'center',
                borderColor: "#465881"
            },
            dateText: {

                color: Colors.white
            }

        }}
        onDateChange={(date, time) => {
            setData({ date, time: time.toLocaleTimeString('Pt-br') })
            onChangeDate({ date, time: time.toLocaleTimeString('Pt-br') })
        }}
    />
}