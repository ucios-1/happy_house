import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { Range, DateRange } from "react-date-range"
import  * as Local  from "date-fns/locale"
import { DateRageSelection, DateStringSelection } from '../../domain/domain';
import { dateToStringObj } from '../../utils';


type DateRageProps = {
    onRageSelect: (some: DateStringSelection) => void
}


export default function DateRangePick (props: DateRageProps) {

    const RED = "#bd3608"

    const rageStartValue: Range = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }

    const [rage, setDateRage] = useState([rageStartValue]);

    function updateSelection (event: any, props: DateRageProps) {
        console.log(`[ DateRangePick ] got event: ${event}`)
        console.log(`[ DateRangePick ] processing dates selection`)

        const selection: DateRageSelection = {
            startDate: new Date(event.selection.startDate),
            endDate: new Date(event.selection.endDate)
        }

        setDateRage([{
            ...selection,
            key: 'selection',
        }])

        props.onRageSelect(
            dateToStringObj(selection)
        )
    }

    return (
        <DateRange
            ranges={rage}
            showDateDisplay={false}
            locale={Local.pl}
            rangeColors={[RED]}
            onChange={(event: any) => updateSelection(event, props) }
        />
    )
}