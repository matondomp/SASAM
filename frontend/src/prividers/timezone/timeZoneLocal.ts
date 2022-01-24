import { toDate, format } from 'date-fns-tz'

export const hendleDateTimeZone=(date:string)=>{
    const event = new Date();
    const parisDate = toDate(date)
    const pattern = "yyyy-MM-dd"
    const timeOutput = format(parisDate, pattern, { timeZone: 'UTC/GMT+1' })
    return timeOutput.slice(0, 16);
}