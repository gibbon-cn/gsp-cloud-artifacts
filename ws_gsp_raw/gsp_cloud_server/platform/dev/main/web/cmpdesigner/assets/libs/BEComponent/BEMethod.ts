import { CompMethod } from '../BaseEntity/CompMethod';
import { BEMethodParameter } from './BEMethodParameter';
import { ReturnValue } from '../BaseEntity/ReturnValue';

export class BEMethod extends CompMethod {
    Parameters: Array<BEMethodParameter>;
    public BEMethod() {
        this.ReturnValue = new ReturnValue();
        this.Parameters = new Array<BEMethodParameter>();
    }
}
