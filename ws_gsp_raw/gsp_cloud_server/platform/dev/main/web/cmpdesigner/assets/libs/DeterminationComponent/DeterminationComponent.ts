import { GSPComponent } from '../BaseEntity/GSPComponent';
import { DeterminationMethod } from './DeterminationMethod';

export class DeterminationComponent extends GSPComponent {
    ComponentType = 'DeterminationComponent';
    Method: DeterminationMethod;
    public DeterminationComponent() {
        this.Method = new DeterminationMethod();
    }
}
