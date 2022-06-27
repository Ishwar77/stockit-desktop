import sampledata from '../../../../assets/data/PeriodicElement.json';


export interface ListComponentOutput {
    data: ListComponentInput;
}


export class ListComponentInput {
    slno?: string;
    brand?: string;
    value?: string;


    constructor(slno = null, brand = null, value = null) {
        this.slno = slno || '';
        this.brand = brand || 'No Name';
        this.value = value || '';
    }

    public static isValid(obj: ListComponentInput): boolean {
        if (!obj) {
            return false;
        }
        if (!obj.brand || obj.brand.length < 3) {
            return false;
        }
        return true;
    }

    public static getDummy(): ListComponentInput[] {
       const data = [];
       sampledata.forEach(obj => {
         data.push(new ListComponentInput(obj.position, obj.name, obj.weight));

       });
       return data;
       }
    }

