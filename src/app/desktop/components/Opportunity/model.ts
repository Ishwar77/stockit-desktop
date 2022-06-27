import sampledata from '../../../../assets/data/opportunity.json';

export interface OpportunityComponentOutput {
  data: OpportunityComponentInput;
}


export class OpportunityComponentInput {
  slno?: string;
  sku?: string;
  osa?: string;
  rca?: string;
  opportunity?: string;

  constructor(slno = null, sku = null, osa = null, rca = null, opportunity = null) {
      this.slno = slno || '';
      this.sku = sku || 'Nothing';
      this.osa = osa || '';
      this.rca = rca || 'Nothing';
      this.opportunity = opportunity || 'Nothing';
  }

  public static isValid(obj: OpportunityComponentInput): boolean {
      if (!obj) {
          return false;
      }
      if (!obj.sku || obj.sku.length < 2) {
          return false;
      }
      return true;
  }

  public static getDummy(): OpportunityComponentInput[] {
     const data = [];
     sampledata.forEach(obj => {
       data.push(new OpportunityComponentInput(obj.slno, obj.sku, obj.osa, obj.rca, obj.opportunity));

     });
     return data;
     }
  }
