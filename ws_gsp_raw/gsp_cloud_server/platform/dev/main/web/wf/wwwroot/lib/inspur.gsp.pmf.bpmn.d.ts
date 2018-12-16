declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class BpmnModelElement {
        constructor(model: BpmnModel);
        Model: BpmnModel;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        protected ResetBeforeLoadFrom(): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class BpmnElement extends BpmnModelElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class BaseElement extends BpmnElement implements IHasIdElement {
        constructor(model: BpmnModel);
        Id: string;
        Documentation: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class FlowElement extends BaseElement implements IClrTypeElement, IHasNameElement {
        private static listeners;
        RegisterEvent(name: string, callback: Function, context: any): void;
        FireEvent(name: string): void;
        RemoveEvent(name: string, callback: Function, context: any): void;
        abstract clone(): BpmnElement;
        constructor(model: BpmnModel);
        abstract ClrTypeID: string;
        Name: string;
        abstract NewInstance(): BpmnModelElement;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class FlowNode extends FlowElement implements IExecutionListenerContainer {
        constructor(model: BpmnModel);
        executionListeners: Array<ExecutionListener>;
        IncomingGatewayType: string;
        Incomings: Array<string>;
        OutgoingGatewayType: string;
        Outgoings: Array<string>;
        protected ResetBeforeLoadFrom(): void;
        GetExecutionListeners(): ExecutionListener[];
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly MEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Activity extends FlowNode implements IDataInputContainer, IDataOutputContainer, IDataInputAssociationContainer, IDataOutputAssociationContainer, IHasDefaultSequenceFlow, IResourceRoleContainer {
        constructor(model: BpmnModel);
        Default: string;
        IsForCompensation: boolean;
        private dataInputAssociationDic;
        private dataInputDIc;
        private dataOutputAssociationDic;
        private dataOutputDIc;
        private resourceRoleDIc;
        private LoopCharacteristics;
        protected ResetBeforeLoadFrom(): void;
        AddDataInput(item: DataInput): void;
        GetDataInput(dataInputId: string): DataInput;
        GetDataInputs(): Array<DataInput>;
        RemoveDataInput(dataInputId: string): void;
        AddDataOutput(item: DataOutput): void;
        GetDataOutput(dataOutputId: string): DataOutput;
        GetDataOutputs(): Array<DataOutput>;
        RemoveDataOutput(dataOutputId: string): void;
        AddDataInputAssociation(association: DataInputAssociation): void;
        GetDataInputAssociation(associationId: string): DataInputAssociation;
        GetDataInputAssociations(): Array<DataInputAssociation>;
        RemoveDataInputAssociation(associationId: string): void;
        AddDataOutputAssociation(association: DataOutputAssociation): void;
        GetDataOutputAssociation(associationId: string): DataOutputAssociation;
        GetDataOutputAssociations(): Array<DataOutputAssociation>;
        RemoveDataOutputAssociation(associationId: string): void;
        AddResourceRole(item: ResourceRole): void;
        GetResourceRole(resourceRoleId: string): ResourceRole;
        GetResourceRoles(): Array<ResourceRole>;
        RemoveResourceRole(resourceRoleId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
        CheckVariableElement(variableElement: IVariableElement): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Event extends FlowNode {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class CatchEvent extends Event implements IDataOutputAssociationContainer, IDataOutputContainer {
        constructor(model: BpmnModel);
        private dataOutputAssociationDic;
        private dataOutputDIc;
        protected ResetBeforeLoadFrom(): void;
        AddDataOutput(item: DataOutput): void;
        GetDataOutput(dataOutputId: string): DataOutput;
        GetDataOutputs(): Array<DataOutput>;
        RemoveDataOutput(dataOutputId: string): void;
        AddDataOutputAssociation(association: DataOutputAssociation): void;
        GetDataOutputAssociation(associationId: string): DataOutputAssociation;
        GetDataOutputAssociations(): Array<DataOutputAssociation>;
        RemoveDataOutputAssociation(associationId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
        CheckVariableElement(variableElement: IVariableElement): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BoundaryEvent extends CatchEvent {
        clone(): FlowElement;
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        AttachedToRef: string;
        CancelActivity: boolean;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class OmgdiElement extends BpmnModelElement implements IHasIdElement {
        constructor(model: BpmnModel);
        Id: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Diagram extends OmgdiElement implements IHasNameElement {
        constructor(model: BpmnModel);
        Name: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BPMNDiagram extends Diagram {
        constructor(model: BpmnModel);
        BpmnPlane: BPMNPlane;
        bpmnLabelStyleDic: {
            [Key: string]: BPMNLabelStyle;
        };
        protected ResetBeforeLoadFrom(): void;
        AddBPMNLabelStyle(element: any): void;
        GetBPMNLabelStyle(elementId: string): any;
        GetBPMNLabelStyles(): Array<BPMNLabelStyle>;
        RemoveBPMNLabelStyle(elementId: string): void;
        CheckBPMNLabelStyle(element: BPMNLabelStyle): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class DiagramElement extends OmgdiElement implements IClrTypeElement {
        constructor(model: BpmnModel);
        abstract ClrTypeID: string;
        abstract NewInstance(): BpmnModelElement;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        LoadExtensionElements(extensionElementsObj: any): void;
        WriteExtensionElements(extensionElementsObj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Edge extends DiagramElement {
        constructor(model: BpmnModel);
        Points: Array<Point>;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class LabeledEdge extends Edge {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BPMNEdge extends LabeledEdge {
        constructor(model: BpmnModel);
        ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        BpmnElementId: string;
        LineType: string;
        SourceShapeElementId: string;
        TargetShapeElementId: string;
        BpmnLabel: BPMNLabel;
        RectangularLine: RectangularLine;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        LoadExtensionElements(extensionElementsObj: any): void;
        WriteExtensionElements(extensionElementsObj: any): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Node extends DiagramElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Label extends Node {
        constructor(model: BpmnModel);
        Bounds: Bounds;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BPMNLabel extends Label {
        constructor(model: BpmnModel);
        ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        LabelStyle: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Style extends OmgdiElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BPMNLabelStyle extends Style {
        constructor(model: BpmnModel);
        Font: Font;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Plane extends Node {
        constructor(model: BpmnModel);
        diagramElementDic: {
            [Key: string]: DiagramElement;
        };
        protected ResetBeforeLoadFrom(): void;
        AddDiagramElement(element: DiagramElement): void;
        GetDiagramElement(elementId: string): any;
        GetDiagramElements(): Array<DiagramElement>;
        RemoveDiagramElement(elementId: string): void;
        CheckDiagramElement(element: DiagramElement): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BPMNPlane extends Plane {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        BpmnElementId: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Shape extends Node {
        constructor(model: BpmnModel);
        Bounds: Bounds;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class LabeledShape extends Shape {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BPMNShape extends LabeledShape {
        constructor(model: BpmnModel);
        ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        BpmnElementId: string;
        BpmnLabel: BPMNLabel;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum SequenceFlowLineType {
        PolyLine = "PolyLine",
        RectangularLineType = "RectangularLineType"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BpmnModel {
        constructor();
        MetadataContentID: string;
        MetadataContentCode: string;
        MetadataContentName: string;
        TargetNamespace: string;
        DefaultProcess: Process;
        DefaultDiagram: BPMNDiagram;
        private hasIdElementDic;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJson(): string;
        LoadFromJson(json: string): void;
        AddHasIdElement(element: IHasIdElement): void;
        RemoveHasIdElement(elementId: string): void;
        GetHasIdElement(elementId: string): IHasIdElement;
        Validate(): Array<ValidationError>;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BpmnModelHelper {
        private static elementTypeDic;
        private static generatedId;
        static GenerateElementId(): string;
        static SetAttributeValue(obj: any, name: string, value: any): void;
        static RegisterElementType(typeInstance: IClrTypeElement): void;
        static GetElementType(typeId: string): BpmnModelElement;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class RootElement extends BaseElement implements IClrTypeElement {
        constructor(model: BpmnModel);
        abstract ClrTypeID: string;
        abstract NewInstance(): BpmnModelElement;
        ConvertToJsonObject(): any;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class CallableElement extends RootElement implements IDataInputContainer, IDataOutputContainer, IHasNameElement {
        constructor(model: BpmnModel);
        Name: string;
        private dataInputDIc;
        private dataOutputDIc;
        protected ResetBeforeLoadFrom(): void;
        AddDataInput(item: DataInput): void;
        GetDataInput(dataInputId: string): DataInput;
        GetDataInputs(): Array<DataInput>;
        RemoveDataInput(dataInputId: string): void;
        AddDataOutput(item: any): void;
        GetDataOutput(dataOutputId: string): DataOutput;
        GetDataOutputs(): Array<DataOutput>;
        RemoveDataOutput(dataOutputId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        CheckVariableElement(variableElement: IVariableElement): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class CallActivity extends Activity {
        clone(): FlowElement;
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        CalledElement: string;
        SubProcessDataAssociations: SubProcessDataAssociations;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly CALLACTIVITYMEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class DataAssociation extends BaseElement {
        constructor(model: BpmnModel);
        TargetRef: string;
        Transformation: FormalExpression;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class DataInput extends BaseElement implements IVariableElement, IHasNameElement {
        constructor(model: BpmnModel);
        IsAllowNull: boolean;
        IsRequired: boolean;
        Name: string;
        DataType: DataType;
        IsCollection: boolean;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly MEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class DataInputAssociation extends DataAssociation {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class DataObject extends FlowElement implements IVariableElement {
        clone(): FlowElement;
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        DataType: DataType;
        IsAllowNull: boolean;
        IsCollection: boolean;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly MEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class DataOutput extends BaseElement implements IVariableElement, IHasNameElement {
        constructor(model: BpmnModel);
        IsAllowNull: boolean;
        Name: string;
        DataType: DataType;
        IsCollection: boolean;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly MEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class DataOutputAssociation extends DataAssociation {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class ThrowEvent extends Event implements IDataInputAssociationContainer, IDataInputContainer {
        constructor(model: BpmnModel);
        private dataInputAssociationDic;
        private dataInputDIc;
        protected ResetBeforeLoadFrom(): void;
        AddDataInput(item: DataInput): void;
        GetDataInput(dataInputId: string): DataInput;
        GetDataInputs(): Array<DataInput>;
        RemoveDataInput(dataInputId: string): void;
        AddDataInputAssociation(association: DataInputAssociation): void;
        GetDataInputAssociation(associationId: string): DataInputAssociation;
        GetDataInputAssociations(): Array<DataInputAssociation>;
        RemoveDataInputAssociation(associationId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
        CheckVariableElement(variableElement: IVariableElement): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class EndEvent extends ThrowEvent {
        clone(): BpmnElement;
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class EventHelper {
        /** 回调函数 */
        private callback;
        /** 上下文 */
        private context;
        constructor(callback: Function, context: any);
        /**
         * 发送通知
         * @param args 不定参数
         */
        notify(name: string): void;
        /**
         * 上下文比较
         * @param context 上下文
         */
        compar(context: any): boolean;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Gateway extends FlowNode {
        clone(): FlowElement;
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ExclusiveGateway extends Gateway implements IHasDefaultSequenceFlow {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        IncomingGatewayType: string;
        OutgoingGatewayType: string;
        NewInstance(): BpmnModelElement;
        Default: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class Expression extends BaseElement {
        constructor(model: BpmnModel);
        MexExpression: MexExpression;
        protected ResetBeforeLoadFrom(): void;
        private readonly MEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class ExtensionElement extends BpmnModelElement implements IClrTypeElement {
        constructor(model: BpmnModel);
        abstract ClrTypeID: string;
        abstract NewInstance(): BpmnModelElement;
        MexTag: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class FormalExpression extends Expression {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class ResourceRole extends BaseElement implements IClrTypeElement, IHasNameElement {
        constructor(model: BpmnModel);
        abstract ClrTypeID: string;
        abstract NewInstance(): BpmnModelElement;
        Name: string;
        ResourceAssignmentExpression: ResourceAssignmentExpression;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Performer extends ResourceRole {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class HumanPerformer extends Performer {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IDataInputAssociationContainer extends IHasIdElement, IDataInputContainer {
        AddDataInputAssociation(association: DataInputAssociation): void;
        GetDataInputAssociation(associationId: string): DataInputAssociation;
        GetDataInputAssociations(): Array<DataInputAssociation>;
        RemoveDataInputAssociation(associationId: string): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IDataInputContainer {
        AddDataInput(dataInput: DataInput): void;
        GetDataInput(dataInputId: string): DataInput;
        GetDataInputs(): Array<DataInput>;
        RemoveDataInput(dataInputId: string): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IDataObjectContainer {
        AddDataObject(dataObject: DataObject): void;
        GetDataObject(dataObjectId: string): DataObject;
        GetDataObjects(): Array<DataObject>;
        RemoveDataObject(dataObjectId: string): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IDataOutputAssociationContainer extends IHasIdElement, IDataOutputContainer {
        AddDataOutputAssociation(association: DataOutputAssociation): void;
        GetDataOutputAssociation(associationId: string): DataOutputAssociation;
        GetDataOutputAssociations(): Array<DataOutputAssociation>;
        RemoveDataOutputAssociation(associationId: string): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IDataOutputContainer {
        AddDataOutput(dataOutput: DataOutput): void;
        GetDataOutput(dataOutputId: string): DataOutput;
        GetDataOutputs(): Array<DataOutput>;
        RemoveDataOutput(dataOutputId: string): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IExecutionListenerContainer {
        GetExecutionListeners(): Array<ExecutionListener>;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IHasDefaultSequenceFlow {
        Default: string;
        Model: BpmnModel;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IHasNameElement {
        Name: string;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class InclusiveGateway extends Gateway implements IHasDefaultSequenceFlow {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        IncomingGatewayType: string;
        OutgoingGatewayType: string;
        NewInstance(): BpmnModelElement;
        Default: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IResourceRoleContainer {
        AddResourceRole(resourceRole: ResourceRole): void;
        GetResourceRole(resourceRoleId: string): ResourceRole;
        GetResourceRoles(): Array<ResourceRole>;
        RemoveResourceRole(resourceRoleId: string): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IVariableElement extends IHasIdElement {
        Name: string;
        DataType: DataType;
        IsAllowNull: boolean;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class LoopCharacteristics extends BaseElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class MexExtensionElement extends ExtensionElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class MexExpression extends MexExtensionElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ConstantExpression extends MexExpression {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        Value: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class MexElement extends BpmnModelElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class CustomType extends MexElement {
        constructor(model: BpmnModel);
        AssemblyName: string;
        TypeName: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum ExpressionTypes {
        ConstantExpression = "ConstantExpression",
        VariableExpression = "VariableExpression",
        SemanticExpression = "SemanticExpression"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum GatewayType {
        Exclusive = "Exclusive",
        Inclusive = "Inclusive",
        Parallel = "Parallel"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IClrTypeElement {
        ClrTypeID: string;
        NewInstance(): BpmnModelElement;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IFlowElementContainer {
        GetFlowElements(): {
            [key: string]: FlowElement;
        };
        GetFlowElement(elementId: string): FlowElement;
        AddFlowElement(element: FlowElement): void;
        RemoveFlowElement(elementId: string): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IHasIdElement {
        Id: string;
        Model: BpmnModel;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    interface IProcess extends IFlowElementContainer, IDataObjectContainer, IDataInputContainer, IDataOutputContainer {
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum BasicDataTypes {
        String = "String",
        Integer = "Integer",
        Decimal = "Decimal",
        Boolean = "Boolean",
        DateTime = "DateTime"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class BeSchema extends MexElement {
        constructor(model: BpmnModel);
        BeId: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class DataType extends MexExtensionElement {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        BasicType: BasicDataTypes;
        Category: string;
        Description: string;
        InitialValue: any;
        SchemaType: SchemaType;
        CustomType: CustomType;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
        private DateFormat;
        private DateParse;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum DataTypes {
        BasicType = "BasicType",
        SchemaType = "SchemaType",
        CustomType = "CustomType"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ExecutionListener extends MexExtensionElement {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        Class: string;
        Event: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class RectangularLine extends MexElement {
        constructor(model: BpmnModel);
        LineType: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum RectangularLineType {
        V2H = "V2H",
        H2V = "H2V"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class SchemaType extends MexElement {
        constructor(model: BpmnModel);
        Category: string;
        BeSchema: BeSchema;
        XmlSchema: XmlSchema;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum SchemaTypes {
        BeSchema = "BeSchema",
        XmlSchema = "XmlSchema"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class SubProcessDataAssociations extends MexExtensionElement {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        private dataInputAssociationDic;
        private dataOutputAssociationDic;
        protected ResetBeforeLoadFrom(): void;
        AddDataInputAssociation(association: DataInputAssociation): void;
        GetDataInputAssociation(associationId: string): DataInputAssociation;
        GetDataInputAssociations(): Array<DataInputAssociation>;
        RemoveSubProcessDataInputAssociation(associationId: string): void;
        AddDataOutputAssociation(association: DataOutputAssociation): void;
        GetDataOutputAssociation(associationId: string): DataOutputAssociation;
        GetDataOutputAssociations(): Array<DataOutputAssociation>;
        RemoveDataOutputAssociation(associationId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class VariableExpression extends MexExpression {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        Direction: string;
        SourceRef: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    enum VariableExpressionDirection {
        ActivityDataInputAssociation = "ActivityDataInputAssociation",
        ActivityDataOutputAssociation = "ActivityDataOutputAssociation",
        SubProcessDataInputAssociation = "SubProcessDataInputAssociation",
        SubProcessDataOutputAssociation = "SubProcessDataOutputAssociation",
        TransitionCondition = "TransitionCondition"
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class XmlSchema extends MexElement {
        constructor(model: BpmnModel);
        Xsd: string;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class MultiInstanceLoopCharacteristics extends LoopCharacteristics {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class OmgdcElement extends BpmnModelElement {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class Bounds extends OmgdcElement {
        constructor(model: BpmnModel);
        Height: number;
        Width: number;
        X: number;
        Y: number;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class Font extends OmgdcElement implements IHasNameElement {
        constructor(model: BpmnModel);
        IsBold: boolean;
        IsItalic: boolean;
        IsStrikeThrough: boolean;
        IsUnderline: boolean;
        Name: string;
        Size: number;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class Point extends OmgdcElement {
        constructor(model: BpmnModel);
        X: number;
        Y: number;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ParallelGateway extends Gateway {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        IncomingGatewayType: string;
        OutgoingGatewayType: string;
        NewInstance(): BpmnModelElement;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class PotentialOwner extends Performer {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class Process extends CallableElement implements IProcess, IExecutionListenerContainer {
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        Key: string;
        private flowElementsDic;
        private resourceRoleDIc;
        private executionListeners;
        private extensionElements;
        protected ResetBeforeLoadFrom(): void;
        NewInstance(): BpmnModelElement;
        AddDataObject(dataObject: DataObject): void;
        GetDataObject(dataObjectId: string): DataObject;
        GetDataObjects(): DataObject[];
        RemoveDataObject(dataObjectId: string): void;
        AddFlowElement(element: FlowElement): void;
        GetFlowElement(elementId: string): FlowElement;
        GetFlowElements(): {
            [key: string]: FlowElement;
        };
        RemoveFlowElement(elementId: string): void;
        GetExecutionListeners(): ExecutionListener[];
        AddResourceRole(item: ResourceRole): void;
        GetResourceRole(resourceRoleId: string): ResourceRole;
        GetResourceRoles(): Array<ResourceRole>;
        RemoveResourceRole(resourceRoleId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly MEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        GetExtensionElements(): Array<ExtensionElement>;
        Validate(errors: Array<ValidationError>): void;
        CheckVariableElement(variableElement: IVariableElement): void;
        private InnerAddFlowElement;
        private RemoveSequenceFlow;
        private InnerRemoveDataObject;
        private RemoveFlowNode;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class RadixConvert {
        private static exponent;
        private static keys;
        static Decimal2String(value: number): string;
        private static Pow;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class SequenceFlow extends FlowElement implements IExecutionListenerContainer {
        clone(): FlowElement;
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        ConditionExpression: Expression;
        SkipExpression: string;
        SourceRef: string;
        TargetRef: string;
        private executionListeners;
        protected ResetBeforeLoadFrom(): void;
        NewInstance(): BpmnModelElement;
        GetExecutionListeners(): Array<ExecutionListener>;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly MEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        Validate(errors: Array<ValidationError>): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class StartEvent extends CatchEvent {
        clone(): BpmnElement;
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class SubProcess extends Activity implements IProcess {
        clone(): BpmnElement;
        constructor(model: BpmnModel);
        readonly ClrTypeID: string;
        NewInstance(): BpmnModelElement;
        private extensionElements;
        private flowElementsDic;
        protected ResetBeforeLoadFrom(): void;
        AddDataObject(dataObject: DataObject): void;
        GetDataObject(dataObjectId: string): DataObject;
        GetDataObjects(): Array<DataObject>;
        RemoveDataObject(dataObjectId: string): void;
        AddFlowElement(element: FlowElement): void;
        GetFlowElement(elementId: string): FlowElement;
        GetFlowElements(): {
            [key: string]: FlowElement;
        };
        RemoveFlowElement(elementId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
        private readonly SubProcessMEXTAG;
        protected GetExtensionElements4ConvertTo(): Array<ExtensionElement>;
        protected SetExtensionElements4LoadFrom(extensionElements: Array<ExtensionElement>): void;
        GetExtensionElements(): Array<ExtensionElement>;
        Validate(errors: Array<ValidationError>): void;
        CheckVariableElement(variableElement: IVariableElement): void;
        private RemoveSequenceFlow;
        private InnerRemoveDataObject;
        private RemoveFlowNode;
        private InnerAddFlowElement;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Rendering extends BaseElement {
        constructor(model: BpmnModel);
        abstract ClrTypeID: string;
        ConvertToJsonObject(): any;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ResourceAssignmentExpression extends BaseElement {
        constructor(model: BpmnModel);
        Expression: Expression;
        protected ResetBeforeLoadFrom(): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class Task extends Activity {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class ServiceTask extends Task {
        constructor(model: BpmnModel);
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    abstract class UserTask extends Task {
        constructor(model: BpmnModel);
        private renderingDIc;
        ResetBeforeLoadFrom(): void;
        AddRendering(item: Rendering): void;
        GetRendering(renderingId: string): Rendering;
        GetRenderings(): Array<Rendering>;
        RemoveRendering(renderingId: string): void;
        ConvertToJsonObject(): any;
        LoadFromJsonObject(obj: any): void;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ValidateHelper {
        static CheckHasIdElement(element: IHasIdElement): void;
        static IsMatchVariableNameRules(str: string): boolean;
        static ValidateProcess(process: IProcess, errors: Array<ValidationError>): void;
        static CheckVariableElement(variableElement: IVariableElement, dataInputContainer: IDataInputContainer, dataOutputContainer: IDataOutputContainer, dataObjectContainer: IDataObjectContainer): void;
        private static ValidateEndEvents;
        private static ValidateFlowNode;
        private static ValidateIDataInputAssociationContainer;
        private static ValidateIDataOutputAssociationContainer;
        private static ValidateSequenceFlow;
        private static ValidateStartEvents;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ValidationError {
        Element: BpmnModelElement;
        ErrorLevel: ValidationLevel;
        ErrorCode: string;
        ErrorMessage: string;
    }
}
declare namespace inspur.gsp.pmf.bpmn.model {
    class ValidationLevel {
        static readonly $_Error: string;
        static readonly $_Warning: string;
    }
}
