import { CompMethod } from '../BaseEntity/CompMethod';
import { VoidReturnType } from '../BaseEntity/VoidReturnType';
import { DeterminationParameter } from './DeterminationParameter';

export class DeterminationMethod extends CompMethod {
    Parameters: Array<DeterminationParameter>;
    public DeterminationMethod() {
        this.ReturnValue = new VoidReturnType();
        this.Parameters = new Array<DeterminationParameter>();
    }
}
