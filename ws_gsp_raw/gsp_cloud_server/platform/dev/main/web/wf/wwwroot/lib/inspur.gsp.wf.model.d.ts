declare namespace inspur.gsp.wf.model {
    interface FlowElementDesigner {
        getShowableProperty(): any[];
    }
}
declare namespace inspur.gsp.wf.model {
    class EndEvent extends inspur.gsp.pmf.bpmn.model.EndEvent implements FlowElementDesigner {
        getShowableProperty(): any[];
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        Id: string;
        Name: string;
    }
}
declare namespace inspur.gsp.wf.model {
    class CompletionStrategyEx extends pmf.bpmn.model.ExtensionElement {
        ClrTypeID: string;
        NewInstance(): pmf.bpmn.model.BpmnModelElement;
        private participantCoefficientSet;
        private workitemCoefficientSet;
        constructor(model: pmf.bpmn.model.BpmnModel);
        ParticipantCoefficientSet: ParticipantCoefficient[];
        WorkitemCoefficientSet: WorkitemCoefficient[];
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    class ParticipantCoefficient extends pmf.bpmn.model.MexElement {
        private participantId;
        private participantName;
        private participantCode;
        private participantType;
        private mustCompleted;
        private coefficient;
        constructor(model: pmf.bpmn.model.BpmnModel, id?: string, name?: string, code?: string, type?: string, mustCompleted?: boolean, coefficient?: number);
        ParticipantId: string;
        ParticipantName: string;
        ParticipantCode: string;
        ParticipantType: string;
        MustCompleted: boolean;
        Coefficient: number;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    class WorkitemCoefficient extends pmf.bpmn.model.MexElement {
        private coefficient;
        private workitemCoeff;
        private attrName;
        private attrValue;
        constructor(model: pmf.bpmn.model.BpmnModel);
        Coefficient: number;
        WorkitemCoeff: CoefficientType;
        AttrName: string;
        AttrValue: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
    enum CoefficientType {
        通过 = 0,
        不通过 = 1
    }
}
declare namespace inspur.gsp.wf.model {
    class ConclusionItem extends pmf.bpmn.model.ExtensionElement {
        ClrTypeID: string;
        NewInstance(): pmf.bpmn.model.BpmnModelElement;
        constructor(model: pmf.bpmn.model.BpmnModel);
        Code: string;
        DisplayName: string;
        FlowDirection: FlowDirection;
        IsDefault: boolean;
        Enable: boolean;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    class ExecuteForm extends pmf.bpmn.model.ExtensionElement {
        ClrTypeID: string;
        NewInstance(): pmf.bpmn.model.BpmnModelElement;
        private id;
        private name;
        private actualParameters;
        private _componentId;
        private formtype;
        constructor(model: pmf.bpmn.model.BpmnModel, id?: string, name?: string, actualParameters?: WFActualParameter[]);
        FormType: string;
        Id: string;
        Name: string;
        CompontentId: string;
        ActualParameters: WFActualParameter[];
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    abstract class WFExtensionElement extends pmf.bpmn.model.ExtensionElement {
        Id: string;
        Code: string;
        Name: string;
        Description: string;
        ExtendedAttributes: {
            [key: string]: string;
        };
        protected ResetBeforeLoadFrom(): void;
        protected constructor(model: pmf.bpmn.model.BpmnModel, id?: string, name?: string);
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        protected GetMexExtensionElements4ConvertTo(): pmf.bpmn.model.MexExtensionElement[];
        protected SetMexExtensionElements4LoadFrom(list: pmf.bpmn.model.MexExtensionElement[]): void;
        GetExtendedAttributes(): {
            [key: string]: string;
        };
    }
}
declare namespace inspur.gsp.wf.model {
    class Tool extends WFExtensionElement {
        ClrTypeID: string;
        NewInstance(): pmf.bpmn.model.BpmnModelElement;
        constructor(model: pmf.bpmn.model.BpmnModel);
        ActualParameters: Array<WFActualParameter>;
        Execution: ExecutionType;
        AsyncCallBackType: AsyncCallBackType;
        Time: ToolTime;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    class AssignmentStrategyDef extends inspur.gsp.pmf.bpmn.model.ExtensionElement {
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        ClrTypeID: string;
        MexTag: string;
        NewInstance(): inspur.gsp.pmf.bpmn.model.BpmnModelElement;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    class ManualActivity extends inspur.gsp.pmf.bpmn.model.UserTask {
        clone(): inspur.gsp.pmf.bpmn.model.BpmnElement;
        getShowableProperty(): any[];
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        Name: string;
        ClrTypeID: string;
        private static MEXTAG;
        NewInstance(): inspur.gsp.pmf.bpmn.model.BpmnModelElement;
        ParticipantSchemes: ParticipantScheme[];
        ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): any;
        protected GetExtensionElements4ConvertTo(): pmf.bpmn.model.ExtensionElement[];
        protected SetExtensionElements4LoadFrom(extensionElements: pmf.bpmn.model.ExtensionElement[]): void;
    }
}
declare namespace inspur.gsp.wf.model {
    enum AsyncCallBackType {
        NO = 0,
        DEFAULT = 1
    }
}
declare namespace inspur.gsp.wf.model {
    class BizActivity {
        BizActivityID: string;
        BizActivityName: string;
        Conclusions: Array<ConclusionItem>;
        Tools: Array<Tool>;
        BizParameters: Array<FormalParameter>;
    }
}
declare namespace inspur.gsp.wf.model {
    enum ExcuteWorkItemMode {
        Sequential = 0,
        Parallel = 1
    }
}
declare namespace inspur.gsp.wf.model {
    enum ExecutionType {
        SYNCHRONOUS = 0,
        ASYNCHRONOUS = 1
    }
}
declare namespace inspur.gsp.wf.model {
    enum FlowDirection {
        Forward = 0,
        Opposite = 1,
        Abort = 2
    }
}
declare namespace inspur.gsp.wf.model {
    enum ToolTime {
        PROCESSINSTANCE_ALARM = 0,
        PROCESSINSTANCE_TIMEOUT = 1,
        PROCESSINSTANCE_ABORT = 2,
        PROCESSINSTANCE_COMPLETE = 3,
        PROCESSINSTANCE_CREATE = 4,
        PROCESSINSTANCE_DELETE = 5,
        PROCESSINSTANCE_RESUME = 6,
        PROCESSINSTANCE_START = 7,
        PROCESSINSTANCE_SUSPEND = 8,
        PROCESSINSTANCE_TERMINATE = 9,
        ACTIVITY_ABORTED = 10,
        ACTIVITY_COMPLETED = 11,
        ACTIVITY_CREATED = 12,
        ACTIVITY_RESUMED = 13,
        ACTIVITY_STARTED = 14,
        ACTIVITY_STOPPED = 15,
        ACTIVITY_SUSPENDED = 16,
        ACTIVITY_TERMINATED = 17,
        WORKITEM_ABORTED = 18,
        WORKITEM_ASSIGNED = 19,
        WORKITEM_COMPLETED = 20,
        WORKITEM_CREATED = 21,
        WORKITEM_RESUMED = 22,
        WORKITEM_STARTED = 23,
        WORKITEM_STOPPED = 24,
        WORKITEM_SUSPENDED = 25,
        WORKITEM_TERMINATED = 26,
        WORKITEM_ALARM = 27,
        WORKITEM_TIMEOUT = 28,
        UNDEFINITION = 29
    }
}
declare namespace inspur.gsp.wf.model {
    class FormalParameter extends pmf.bpmn.model.MexElement {
        private index;
        constructor(model: pmf.bpmn.model.BpmnModel, id?: string, code?: string, name?: string, desc?: string, index?: number, datatype?: pmf.bpmn.model.DataType, mode?: ParameterMode);
        Id: string;
        Code: string;
        Name: string;
        Description: string;
        Index: number;
        DataType: pmf.bpmn.model.DataType;
        Mode: ParameterMode;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    enum ParameterMode {
        IN = 0,
        OUT = 1,
        INOUT = 2
    }
}
declare namespace inspur.gsp.wf.model {
    class WFActualParameter extends pmf.bpmn.model.MexElement {
        DisplayName: string;
        Text: string;
        constructor(model: pmf.bpmn.model.BpmnModel, text?: string, name?: string);
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    abstract class Participant extends inspur.gsp.pmf.bpmn.model.HumanPerformer {
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        ClrTypeID: string;
        MexTag: string;
        ParserId: string;
        extensionElements: pmf.bpmn.model.ExtensionElement[];
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): any;
        protected GetExtensionElements4ConvertTo(): any;
        protected SetExtensionElements4LoadFrom(extensionElements: pmf.bpmn.model.ExtensionElement[]): void;
        GetExtensionElements(): pmf.bpmn.model.ExtensionElement[];
    }
}
declare namespace inspur.gsp.wf.model {
    class ParticipantScheme extends pmf.bpmn.model.ExtensionElement implements pmf.bpmn.model.IClrTypeElement, pmf.bpmn.model.IHasNameElement {
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        ClrTypeID: string;
        MexTag: string;
        Id: string;
        Name: string;
        Performers: string;
        ExclusionPerformers: string;
        NewInstance(): pmf.bpmn.model.BpmnModelElement;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): any;
        protected ResetBeforeLoadFrom(): void;
    }
}
declare namespace inspur.gsp.wf.model {
    class UserParticipant extends Participant {
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        ClrTypeID: string;
        OrgId: string;
        OrgName: string;
        OrgType: string;
        NewInstance(): inspur.gsp.pmf.bpmn.model.BpmnModelElement;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): any;
    }
}
declare namespace inspur.gsp.wf.model {
    class StartActivity extends inspur.gsp.pmf.bpmn.model.StartEvent {
        clone(): inspur.gsp.pmf.bpmn.model.BpmnElement;
        getShowableProperty(): any[];
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        Id: string;
        Name: string;
        ClrTypeID: string;
        NewInstance(): inspur.gsp.pmf.bpmn.model.BpmnModelElement;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.wf.model {
    class UserActivity extends inspur.gsp.pmf.bpmn.model.UserTask {
        constructor(model: inspur.gsp.pmf.bpmn.model.BpmnModel);
        ClrTypeID: string;
        private static MEXTAG;
        NewInstance(): inspur.gsp.pmf.bpmn.model.BpmnModelElement;
        PerformerNotFundExecption: boolean;
        IsRetrieve: boolean;
        IsRollback: boolean;
        Priority: string;
        ExcuteWorkItemMode: ExcuteWorkItemMode;
        ExecuteForms: ExecuteForm[];
        ParticipantSchemes: ParticipantScheme[];
        CompletionStrategy: string;
        CompletionStrategyEx: CompletionStrategyEx;
        AdhocActivitySecurities: string[];
        NotificationList: wf.model.Notification[];
        BizActivityID: string;
        BizActivityName: string;
        ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): any;
        protected GetExtensionElements4ConvertTo(): pmf.bpmn.model.ExtensionElement[];
        protected SetExtensionElements4LoadFrom(extensionElements: pmf.bpmn.model.ExtensionElement[]): void;
        clone(): inspur.gsp.pmf.bpmn.model.BpmnElement;
    }
}
declare namespace inspur.gsp.wf.model {
    class Notification extends pmf.bpmn.model.ExtensionElement {
        ClrTypeID: string;
        NewInstance(): inspur.gsp.pmf.bpmn.model.BpmnModelElement;
        constructor(model: pmf.bpmn.model.BpmnModel);
        Id: string;
        Name: string;
        Time: NotifyTime;
        Condition: string;
        SenderName: string;
        Receiver: string;
        Way: string;
        Header: string;
        Body: string;
        Footer: string;
        SendTempAssMessage: boolean;
        Execution: ExecutionType;
        protected ResetBeforeLoadFrom(): void;
        ToString(): string;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
    enum NotifyTime {
        PROCESSINSTANCE_ALARM = 0,
        PROCESSINSTANCE_TIMEOUT = 1,
        PROCESSINSTANCE_ABORT = 2,
        PROCESSINSTANCE_COMPLETE = 3,
        PROCESSINSTANCE_CREATE = 4,
        PROCESSINSTANCE_DELETE = 5,
        PROCESSINSTANCE_RESUME = 6,
        PROCESSINSTANCE_START = 7,
        PROCESSINSTANCE_SUSPEND = 8,
        PROCESSINSTANCE_TERMINATE = 9,
        ACTIVITY_ABORTED = 10,
        ACTIVITY_COMPLETED = 11,
        ACTIVITY_CREATED = 12,
        ACTIVITY_RESUMED = 13,
        ACTIVITY_STARTED = 14,
        ACTIVITY_STOPPED = 15,
        ACTIVITY_SUSPENDED = 16,
        ACTIVITY_TERMINATED = 17,
        ACTIVITY_RETRIEVED = 18,
        ACTIVITY_RETRIEVED_FROM = 19,
        ACTIVITY_ROLLBACK = 20,
        ACTIVITY_ROLLBACK_TO = 21,
        WORKITEM_ABORTED = 22,
        WORKITEM_ASSIGNED = 23,
        WORKITEM_COMPLETED = 24,
        WORKITEM_CREATED = 25,
        WORKITEM_RESUMED = 26,
        WORKITEM_STARTED = 27,
        WORKITEM_STOPPED = 28,
        WORKITEM_SUSPENDED = 29,
        WORKITEM_TERMINATED = 30,
        WORKITEM_ALARM = 31,
        WORKITEM_TIMEOUT = 32,
        UNDEFINITION = 33
    }
}
