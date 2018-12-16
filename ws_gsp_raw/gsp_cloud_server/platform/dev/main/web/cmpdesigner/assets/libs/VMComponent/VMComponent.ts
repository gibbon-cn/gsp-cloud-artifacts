import { GSPComponent } from '../BaseEntity/GSPComponent';
import { VMMethod } from './VMMethod';

export class VMComponent extends GSPComponent {
    ComponentType = 'VMComponent';
    Method: VMMethod;
    public VMComponent() {
        this.Method = new VMMethod();
    }
}
