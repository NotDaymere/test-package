import dayjs from "dayjs";
import { GetCurrentFormatDate } from "..";

export const getCurrentFormatDate: GetCurrentFormatDate = () => {
    return "Current Date: " + dayjs().format('YYYY-MM-DD / H:mm:s')
}