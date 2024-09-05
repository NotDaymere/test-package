import dayjs from "dayjs";

export function getCurrentFormatDate() {
    return "Current Date: " + dayjs().format('YYYY-MM-DD / H:mm:s')
}