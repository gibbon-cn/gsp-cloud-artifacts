import { CompMethod } from './CompMethod';
import { IGSPComponent } from '../Interface/IGSPComponent';

export class GSPComponent implements IGSPComponent {
    ComponentID: string;
    ComponentCode: string;
    ComponentName: string;
    ComponentDescription: string;
    ComponentType: string;
    Method: CompMethod;
}
