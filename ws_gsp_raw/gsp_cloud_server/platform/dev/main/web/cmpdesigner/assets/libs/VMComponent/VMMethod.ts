import { CompMethod } from '../BaseEntity/CompMethod';
import { VMMethodParameter } from './VMMethodParameter';
import { ReturnValue } from '../BaseEntity/ReturnValue';

export class VMMethod extends CompMethod {
    Parameters: Array<VMMethodParameter>;
    public VMMethod() {
        this.ReturnValue = new ReturnValue();
        this.Parameters = new Array<VMMethodParameter>();
    }
}
