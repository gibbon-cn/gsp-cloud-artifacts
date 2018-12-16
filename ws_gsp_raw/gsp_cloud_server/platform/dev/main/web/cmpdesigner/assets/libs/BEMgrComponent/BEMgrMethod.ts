import { CompMethod } from '../BaseEntity/CompMethod';
import { BEMgrMethodParameter } from './BEMgrMethodParameter';
import { ReturnValue } from '../BaseEntity/ReturnValue';

export class BEMgrMethod extends CompMethod {
    Parameters: Array<BEMgrMethodParameter>;
    public BEMgrMethod() {
        this.ReturnValue = new ReturnValue();
        this.Parameters = new Array<BEMgrMethodParameter>();
    }
}
