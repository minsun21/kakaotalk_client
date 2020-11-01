export function dateToStr(format) {
    let year = format.getFullYear();
    let month = format.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let date = format.getDate();
    if (date < 10) date = '0' + date;
    let hour = format.getHours();
    if (hour < 10) hour = '0' + hour;
    let min = format.getMinutes();
    if (min < 10) min = '0' + min;
    let sec = format.getSeconds();
    if (sec < 10) sec = '0' + sec;
    return hour + ":" + min;
}


