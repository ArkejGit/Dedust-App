import { Pipe, PipeTransform } from '@angular/core';
/*
 * Show power in watt unit. If power is greater than 1000W use KW and show only one decimal.
 *
 * Usage:
 *   value | powerInWatts
 * Example:
 *   {{ 2427 |  powerInWatts}}
 *   formats to: 2.4 KW
*/
@Pipe({name: 'powerInWatts'})
export class PowerInWattsPipe implements PipeTransform {
  transform(value: number): string {
    return (value < 1000 ? value + ' W' : (value/1000).toFixed(1) + ' KW');
  }
}