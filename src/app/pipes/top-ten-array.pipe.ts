import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topTenArray'
})
export class TopTenArrayPipe implements PipeTransform {

  transform(valueArr: string[]):string {
    console.log('valueArr not touched yet=', valueArr);
    
    let newArr:string[] = [...valueArr];
    newArr.length = 10;
    
    console.log('TopTenArrayPipe valueArr', valueArr, "newArr",newArr);
    return newArr.toString();
  }

}
