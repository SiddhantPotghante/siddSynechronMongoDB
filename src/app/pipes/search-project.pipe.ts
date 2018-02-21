import { Pipe, PipeTransform } from '@angular/core';
import { Project } from "../projects/project";

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(items: Project[], searchProject: string): any[] {
    console.log(items)
    if(!items) return [];
    if(!searchProject) return items;
    searchProject = searchProject.toLowerCase();
    console.log(searchProject)
return items.filter( item => {
     // return it.employeeId==parseInt(searchEmployee);
  // return item.employeeId.includes(searchEmployee);
      return item.projectId.includes(searchProject);
      

    });
   }

}
