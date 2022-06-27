import sampledata from '../../../../assets/data/categorymatrix.json';

export interface CategoryMatrixComponentOutput {
  data: CategoryMatrixComponentInput;
}


export class CategoryMatrixComponentInput {
  place?: string;
  haircare?: string;
  babycare?: string;
  oralcare?: string;
  personalcare?: string;
  petcare?: string;

  constructor(place = null, haircare = null, babycare = null, oralcare = null, personalcare = null, petcare = null) {
      this.place = place || 'Nothing';
      this.haircare = haircare || '';
      this.babycare = babycare || '';
      this.oralcare = oralcare || '';
      this.personalcare = personalcare || '';
      this.petcare = petcare || '';
      }

  public static isValid(obj: CategoryMatrixComponentInput): boolean {
      if (!obj) {
          return false;
      }
      return true;
  }

  public static getDummy(): CategoryMatrixComponentInput[] {
     const data = [];
     sampledata.forEach(obj => {
       data.push(new CategoryMatrixComponentInput(obj.place, obj.haircare, obj.babycare, obj.oralcare, obj.personalcare, obj.petcare));
     });
     return data;
     }
  }
