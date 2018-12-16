import { GSPComponent } from '../BaseEntity/GSPComponent';
import { ValidationMethod } from './ValidationMethod';

export class ValidationComponent extends GSPComponent {
    ComponentType = 'ValidationComponent';
    Method: ValidationMethod;
    public ValidationComponent() {
        this.Method = new ValidationMethod();
    }
}
