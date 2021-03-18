import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(todoList: any, filteredStatus : string) {
    // console.log(todoList, filteredStatus);
    console.log("[TRANFORM]")
    if(filteredStatus === ''){
      return todoList;
    }

    let resultArray= [];

    for(let todo of todoList){
      if(todo['status'] === filteredStatus){
        resultArray.push(todo);
      }
    }

    return resultArray;

  }

}
