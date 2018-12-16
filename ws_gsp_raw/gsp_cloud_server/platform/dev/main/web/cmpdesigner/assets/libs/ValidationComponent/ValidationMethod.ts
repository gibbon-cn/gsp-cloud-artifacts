import { CompMethod } from '../BaseEntity/CompMethod';
import { VoidReturnType } from '../BaseEntity/VoidReturnType';
import { ValidationParameter } from './ValidationParameter';

export class ValidationMethod extends CompMethod {
    Parameters: Array<ValidationParameter>;
    public ValidationMethod() {
        this.ReturnValue = new VoidReturnType();
        this.Parameters = new Array<ValidationParameter>();
    }
}
