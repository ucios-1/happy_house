import format from "date-fns/format";
import { pl }  from "date-fns/locale"
import { DateRageSelection, DateStringSelection } from "../domain/domain";

export function returnDateString(date: Date): string {
    const DATE_FORMAT = "dd-MM-yyy"

    return format(date, DATE_FORMAT, {locale: pl})
}

export function returnDateOrString(placeholder:string, date?: string): string {
    
    return date ? date : placeholder
}

export function dateToStringObj(obj: DateRageSelection): DateStringSelection {
    return {
        startDate: returnDateString(obj.startDate),
        endDate: returnDateString(obj.endDate)
    }
}