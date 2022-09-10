import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "summery",
})
export class SummeryPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return null;
    }
    return value.substr(0, 50) + " ...";
  }
}
