import { GSPComponent } from '../BaseEntity/GSPComponent';
import { BEMgrMethod } from './BEMgrMethod';

export class BEMgrComponent extends GSPComponent {
    ComponentType = 'BEMgrComponent';
    Method: BEMgrMethod;
    public BEMgrComponent() {
        this.Method = new BEMgrMethod();
    }
}
