import { ICompMethod } from './ICompMethod';

export class IGSPComponent {
    ComponentID: string;
    ComponentCode: string;
    ComponentName: string;
    ComponentDescription: string;
    ComponentType: string;
    Method: ICompMethod;
}
