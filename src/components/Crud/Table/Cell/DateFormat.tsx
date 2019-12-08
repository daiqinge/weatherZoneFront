import { TableCellRenderer } from './TableCellRenderer';
import * as React from 'react';

const ONE_MINUTE_TIME = 1 * 60 * 1000;
const TWO_MINUTES_TIME = 2 * 60 * 1000;
const ONE_HOUR_TIME = 1 * 60 * 60 * 1000;
const TWO_HOURS_TIME = 2 * 60 * 60 * 1000;
const ONE_DAY_TIME = 1 * 24 * 60 * 60 * 1000;
const TWO_DAYS_TIME = 2 * 24 * 60 * 60 * 1000;
const FIFTEEN_DAYS_TIME = 15 * 24 * 60 * 60 * 1000;

export class DateFormat extends TableCellRenderer {

  render(value: number): JSX.Element {
    let gap = new Date().getTime() - value;
    let retStr = '';
    // if (gap < ONE_MINUTE_TIME) {
    //   retStr = 'Just now';
    // } else if (gap < TWO_MINUTES_TIME) {
    //   retStr = '1 minute ago';
    // } else if (gap < ONE_HOUR_TIME) {
    //   let minutes = Math.round(gap / (60 * 1000));
    //   retStr = `${minutes} minutes ago`;
    // } else if (gap < TWO_HOURS_TIME) {
    //   retStr = '1 hour ago';
    // } else if (gap < ONE_DAY_TIME) {
    //   let hours = Math.round(gap / (60 * 60 * 1000));
    //   retStr = `${hours} hours ago`;
    // } else if (gap < TWO_DAYS_TIME) {
    //   retStr = `yesterday`;
    // } else if (gap < FIFTEEN_DAYS_TIME) {
    //   let days = Math.round(gap / (24 * 60 * 60 * 1000));
    //   retStr = `${days} days ago`;
    // } else {
        // "HH:mm DD-MM-YYYY"
        retStr = new Intl.DateTimeFormat('en-GB', { 
          hour: '2-digit',
          minute: '2-digit',
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit' 
        }).format(value);
        let arr = retStr.split(',');
        let space = ' ';
        retStr = arr[1] + space + arr[0];
    // }
   
    return (
      <div>
        {retStr}
      </div>
    );
 }
}
