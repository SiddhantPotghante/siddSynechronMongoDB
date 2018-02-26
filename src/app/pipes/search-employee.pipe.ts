import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../employees/employee'
@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(items: Employee[], searchEmployee: string): any[] {
    console.log(items)
    if(!items) return [];
    if(!searchEmployee) return items;
    searchEmployee = searchEmployee.toLowerCase();
    console.log(searchEmployee)
return items.filter( item => {
     // return it.employeeId==parseInt(searchEmployee);
      return ((item.employeeId.toLowerCase().includes(searchEmployee)) || 
      (item.employeeName.toLowerCase().includes(searchEmployee)) ||
      (item.phone.toLowerCase().includes(searchEmployee)) ||
      (item.address.toLowerCase().includes(searchEmployee)));
      

    });
   }

}
