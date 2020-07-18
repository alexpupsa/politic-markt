import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'logopartid' })
export class LogoPartidPipe implements PipeTransform {
    transform(input: string): string {
        return `<img src="assets/${input.toLowerCase()}.png" title="${input}" width="25px">`
    }
}