import { GSPComponent } from '../BaseEntity/GSPComponent';
import { BEMethod } from './BEMethod';

export class BEComponent extends GSPComponent {
    ComponentType = 'BEComponent';
    Method: BEMethod;
    public BEComponent() {
        this.Method = new BEMethod();
    }
}
