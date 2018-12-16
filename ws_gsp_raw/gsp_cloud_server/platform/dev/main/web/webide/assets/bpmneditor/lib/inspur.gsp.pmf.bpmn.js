var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_1) {
                    var BpmnModelElement = /** @class */ (function () {
                        function BpmnModelElement(model) {
                            if (model == null) {
                                throw new Error("BpmnModel不能为null.");
                            }
                            this.Model = model;
                        }
                        BpmnModelElement.prototype.ConvertToJsonObject = function () {
                            var obj = {};
                            return obj;
                        };
                        BpmnModelElement.prototype.LoadFromJsonObject = function (obj) {
                            this.ResetBeforeLoadFrom();
                        };
                        BpmnModelElement.prototype.ResetBeforeLoadFrom = function () {
                        };
                        BpmnModelElement.prototype.Validate = function (errors) {
                        };
                        return BpmnModelElement;
                    }());
                    model_1.BpmnModelElement = BpmnModelElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BpmnModelElement.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_2) {
                    var BpmnElement = /** @class */ (function (_super) {
                        __extends(BpmnElement, _super);
                        function BpmnElement(model) {
                            return _super.call(this, model) || this;
                        }
                        return BpmnElement;
                    }(model_2.BpmnModelElement));
                    model_2.BpmnElement = BpmnElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BpmnElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_3) {
                    var BaseElement = /** @class */ (function (_super) {
                        __extends(BaseElement, _super);
                        function BaseElement(model) {
                            var _this = _super.call(this, model) || this;
                            _this.Id = model_3.BpmnModelHelper.GenerateElementId();
                            return _this;
                        }
                        BaseElement.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Id = null;
                            this.Documentation = null;
                        };
                        BaseElement.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_3.BpmnModelHelper.SetAttributeValue(obj, "Id", this.Id);
                            model_3.BpmnModelHelper.SetAttributeValue(obj, "Documentation", this.Documentation);
                            if (this.GetExtensionElements4ConvertTo().length > 0) {
                                var extensionElements = new Array();
                                for (var _i = 0, _a = this.GetExtensionElements4ConvertTo(); _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    extensionElements.push(item.ConvertToJsonObject());
                                }
                                model_3.BpmnModelHelper.SetAttributeValue(obj, "extensionElements", extensionElements);
                            }
                            return obj;
                        };
                        BaseElement.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Id = obj.Id;
                            this.Documentation = obj.Documentation;
                            if (obj.hasOwnProperty("extensionElements") && Array.isArray(obj.extensionElements)) {
                                var list = new Array();
                                for (var _i = 0, _a = obj.extensionElements; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var extensionElement = model_3.BpmnModelHelper.GetElementType(item.ClrTypeID);
                                    if (extensionElement != null) {
                                        extensionElement.LoadFromJsonObject(item);
                                        list.push(extensionElement);
                                    }
                                }
                                this.SetExtensionElements4LoadFrom(list);
                            }
                        };
                        BaseElement.prototype.GetExtensionElements4ConvertTo = function () {
                            return new Array();
                        };
                        BaseElement.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                        };
                        return BaseElement;
                    }(model_3.BpmnElement));
                    model_3.BaseElement = BaseElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_4) {
                    var FlowElement = /** @class */ (function (_super) {
                        __extends(FlowElement, _super);
                        function FlowElement(model) {
                            return _super.call(this, model) || this;
                        }
                        FlowElement.prototype.RegisterEvent = function (name, callback, context) {
                            var observers = FlowElement.listeners[name];
                            if (!observers) {
                                FlowElement.listeners[name] = [];
                            }
                            FlowElement.listeners[name].push(new model_4.EventHelper(callback, context));
                        };
                        FlowElement.prototype.FireEvent = function (name) {
                            var observers = FlowElement.listeners[name];
                            if (!observers)
                                return;
                            var length = observers.length;
                            for (var i = 0; i < length; i++) {
                                var observer = observers[i];
                                observer.notify(name);
                            }
                        };
                        FlowElement.prototype.RemoveEvent = function (name, callback, context) {
                            var observers = FlowElement.listeners[name];
                            if (!observers)
                                return;
                            var length = observers.length;
                            for (var i = 0; i < length; i++) {
                                var observer = observers[i];
                                if (observer.compar(context)) {
                                    observers.splice(i, 1);
                                    break;
                                }
                            }
                            if (observers.length == 0) {
                                delete FlowElement.listeners[name];
                            }
                        };
                        FlowElement.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Name = null;
                        };
                        FlowElement.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_4.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                            model_4.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                            return obj;
                        };
                        FlowElement.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Name = obj.Name;
                        };
                        FlowElement.listeners = {};
                        return FlowElement;
                    }(model_4.BaseElement));
                    model_4.FlowElement = FlowElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./FlowElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_5) {
                    var FlowNode = /** @class */ (function (_super) {
                        __extends(FlowNode, _super);
                        function FlowNode(model) {
                            var _this = _super.call(this, model) || this;
                            _this.executionListeners = new Array();
                            _this.IncomingGatewayType = model_5.GatewayType.Exclusive;
                            _this.Incomings = new Array();
                            _this.OutgoingGatewayType = model_5.GatewayType.Exclusive;
                            _this.Outgoings = new Array();
                            _this.MEXTAG = "bpmn.FlowNode";
                            return _this;
                        }
                        FlowNode.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.executionListeners = new Array();
                            this.IncomingGatewayType = model_5.GatewayType.Exclusive;
                            this.Incomings = new Array();
                            this.OutgoingGatewayType = model_5.GatewayType.Exclusive;
                            this.Outgoings = new Array();
                        };
                        FlowNode.prototype.GetExecutionListeners = function () {
                            return this.executionListeners;
                        };
                        FlowNode.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            if ((this instanceof model_5.Gateway) == false) {
                                if (this.IncomingGatewayType != model_5.GatewayType.Exclusive)
                                    model_5.BpmnModelHelper.SetAttributeValue(obj, "IncomingGatewayType", this.IncomingGatewayType);
                                if (this.OutgoingGatewayType != model_5.GatewayType.Exclusive)
                                    model_5.BpmnModelHelper.SetAttributeValue(obj, "OutgoingGatewayType", this.OutgoingGatewayType);
                            }
                            var incomings = new Array();
                            for (var _i = 0, _a = this.Incomings; _i < _a.length; _i++) {
                                var item = _a[_i];
                                incomings.push(item);
                            }
                            if (incomings.length > 0)
                                model_5.BpmnModelHelper.SetAttributeValue(obj, "incomings", incomings);
                            var outgoings = new Array();
                            for (var _b = 0, _c = this.Outgoings; _b < _c.length; _b++) {
                                var item = _c[_b];
                                outgoings.push(item);
                            }
                            if (outgoings.length > 0)
                                model_5.BpmnModelHelper.SetAttributeValue(obj, "outgoings", outgoings);
                            return obj;
                        };
                        FlowNode.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if ((this instanceof model_5.Gateway) == false) {
                                if (obj.hasOwnProperty("IncomingGatewayType"))
                                    this.IncomingGatewayType = obj.IncomingGatewayType;
                                if (obj.hasOwnProperty("OutgoingGatewayType"))
                                    this.OutgoingGatewayType = obj.OutgoingGatewayType;
                            }
                            if (obj.hasOwnProperty("incomings") && Array.isArray(obj.incomings)) {
                                for (var _i = 0, _a = obj.incomings; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    this.Incomings.push(item);
                                }
                            }
                            if (obj.hasOwnProperty("outgoings") && Array.isArray(obj.outgoings)) {
                                for (var _b = 0, _c = obj.outgoings; _b < _c.length; _b++) {
                                    var item = _c[_b];
                                    this.Outgoings.push(item);
                                }
                            }
                        };
                        FlowNode.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            for (var _i = 0, _a = this.executionListeners; _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.MexTag = this.MEXTAG;
                                list.push(item);
                            }
                            return list;
                        };
                        FlowNode.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_1 = extensionElements; _i < extensionElements_1.length; _i++) {
                                var extensionElement = extensionElements_1[_i];
                                if (extensionElement instanceof model_5.ExecutionListener && extensionElement.MexTag == this.MEXTAG) {
                                    this.executionListeners.push(extensionElement);
                                }
                            }
                        };
                        FlowNode.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var _i = 0, _a = this.executionListeners; _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.Validate(errors);
                            }
                            for (var _b = 0, _c = this.Incomings; _b < _c.length; _b++) {
                                var item = _c[_b];
                                var sequenceFlow = this.Model.GetHasIdElement(item);
                                if (sequenceFlow == null) {
                                    var error = new model_5.ValidationError();
                                    error.Element = this;
                                    error.ErrorLevel = model_5.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "\u627E\u4E0D\u5230 id \u4E3A " + item + " \u7684\u8FDE\u7EBF\u3002";
                                    errors.push(error);
                                }
                            }
                            for (var _d = 0, _e = this.Outgoings; _d < _e.length; _d++) {
                                var item = _e[_d];
                                var sequenceFlow = this.Model.GetHasIdElement(item);
                                if (sequenceFlow == null) {
                                    var error = new model_5.ValidationError();
                                    error.Element = this;
                                    error.ErrorLevel = model_5.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "\u627E\u4E0D\u5230 id \u4E3A " + item + " \u7684\u8FDE\u7EBF\u3002";
                                    errors.push(error);
                                }
                            }
                        };
                        return FlowNode;
                    }(model_5.FlowElement));
                    model_5.FlowNode = FlowNode;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./FlowNode.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_6) {
                    var Activity = /** @class */ (function (_super) {
                        __extends(Activity, _super);
                        function Activity(model) {
                            var _this = _super.call(this, model) || this;
                            _this.dataInputAssociationDic = {};
                            _this.dataInputDIc = {};
                            _this.dataOutputAssociationDic = {};
                            _this.dataOutputDIc = {};
                            _this.resourceRoleDIc = {};
                            _this.IsForCompensation = false;
                            return _this;
                        }
                        Activity.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Default = null;
                            this.LoopCharacteristics = null;
                            this.IsForCompensation = false;
                            this.dataInputAssociationDic = {};
                            this.dataInputDIc = {};
                            this.dataOutputAssociationDic = {};
                            this.dataOutputDIc = {};
                            this.resourceRoleDIc = {};
                        };
                        Activity.prototype.AddDataInput = function (item) {
                            this.CheckVariableElement(item);
                            this.dataInputDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        Activity.prototype.GetDataInput = function (dataInputId) {
                            if (dataInputId == null)
                                return null;
                            if (this.dataInputDIc.hasOwnProperty("dataInputId"))
                                return this.dataInputDIc[dataInputId];
                            return null;
                        };
                        Activity.prototype.GetDataInputs = function () {
                            var dataInputs = new Array();
                            for (var item in this.dataInputDIc) {
                                dataInputs.push(this.dataInputDIc[item]);
                            }
                            return dataInputs;
                        };
                        Activity.prototype.RemoveDataInput = function (dataInputId) {
                            delete this.dataInputDIc[dataInputId];
                        };
                        Activity.prototype.AddDataOutput = function (item) {
                            this.CheckVariableElement(item);
                            this.dataOutputDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        Activity.prototype.GetDataOutput = function (dataOutputId) {
                            if (dataOutputId == null)
                                return null;
                            if (this.dataOutputDIc.hasOwnProperty("dataOutputId"))
                                return this.dataOutputDIc[dataOutputId];
                            return null;
                        };
                        Activity.prototype.GetDataOutputs = function () {
                            var dataOutputs = new Array();
                            for (var item in this.dataOutputDIc) {
                                dataOutputs.push(this.dataOutputDIc[item]);
                            }
                            return dataOutputs;
                        };
                        Activity.prototype.RemoveDataOutput = function (dataOutputId) {
                            delete this.dataOutputDIc[dataOutputId];
                        };
                        Activity.prototype.AddDataInputAssociation = function (association) {
                            model_6.ValidateHelper.CheckHasIdElement(association);
                            this.dataInputAssociationDic[association.Id] = association;
                            this.Model.AddHasIdElement(association);
                        };
                        Activity.prototype.GetDataInputAssociation = function (associationId) {
                            if (associationId == null)
                                return null;
                            if (this.dataInputAssociationDic.hasOwnProperty("associationId"))
                                return this.dataInputAssociationDic[associationId];
                            return null;
                        };
                        Activity.prototype.GetDataInputAssociations = function () {
                            var dataInputAssociations = new Array();
                            for (var item in this.dataInputAssociationDic) {
                                dataInputAssociations.push(this.dataInputAssociationDic[item]);
                            }
                            return dataInputAssociations;
                        };
                        Activity.prototype.RemoveDataInputAssociation = function (associationId) {
                            delete this.dataInputAssociationDic[associationId];
                        };
                        Activity.prototype.AddDataOutputAssociation = function (association) {
                            model_6.ValidateHelper.CheckHasIdElement(association);
                            this.dataOutputAssociationDic[association.Id] = association;
                            this.Model.AddHasIdElement(association);
                        };
                        Activity.prototype.GetDataOutputAssociation = function (associationId) {
                            if (associationId == null)
                                return null;
                            if (this.dataOutputAssociationDic.hasOwnProperty("associationId"))
                                return this.dataOutputAssociationDic[associationId];
                            return null;
                        };
                        Activity.prototype.GetDataOutputAssociations = function () {
                            var dataOutputAssociations = new Array();
                            for (var item in this.dataOutputAssociationDic) {
                                dataOutputAssociations.push(this.dataOutputAssociationDic[item]);
                            }
                            return dataOutputAssociations;
                        };
                        Activity.prototype.RemoveDataOutputAssociation = function (associationId) {
                            delete this.dataOutputAssociationDic[associationId];
                        };
                        Activity.prototype.AddResourceRole = function (item) {
                            this.resourceRoleDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        Activity.prototype.GetResourceRole = function (resourceRoleId) {
                            if (resourceRoleId == null)
                                return null;
                            if (this.resourceRoleDIc.hasOwnProperty(resourceRoleId))
                                return this.resourceRoleDIc[resourceRoleId];
                            return null;
                        };
                        Activity.prototype.GetResourceRoles = function () {
                            var resourceRoles = new Array();
                            for (var item in this.resourceRoleDIc) {
                                resourceRoles.push(this.resourceRoleDIc[item]);
                            }
                            return resourceRoles;
                        };
                        Activity.prototype.RemoveResourceRole = function (resourceRoleId) {
                            delete this.resourceRoleDIc[resourceRoleId];
                        };
                        Activity.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_6.BpmnModelHelper.SetAttributeValue(obj, "Default", this.Default);
                            model_6.BpmnModelHelper.SetAttributeValue(obj, "IsForCompensation", this.IsForCompensation);
                            var dataInputs = new Array();
                            for (var item in this.dataInputDIc) {
                                var element = this.dataInputDIc[item].ConvertToJsonObject();
                                dataInputs.push(element);
                            }
                            if (dataInputs.length > 0) {
                                model_6.BpmnModelHelper.SetAttributeValue(obj, "dataInputs", dataInputs);
                            }
                            var dataOutputs = new Array();
                            for (var item in this.dataOutputDIc) {
                                var element = this.dataOutputDIc[item].ConvertToJsonObject();
                                dataOutputs.push(element);
                            }
                            if (dataOutputs.length > 0) {
                                model_6.BpmnModelHelper.SetAttributeValue(obj, "dataOutputs", dataOutputs);
                            }
                            var dataInputAssociations = new Array();
                            for (var item in this.dataInputAssociationDic) {
                                var element = this.dataInputAssociationDic[item].ConvertToJsonObject();
                                dataInputAssociations.push(element);
                            }
                            if (dataInputAssociations.length > 0) {
                                model_6.BpmnModelHelper.SetAttributeValue(obj, "dataInputAssociations", dataInputAssociations);
                            }
                            var dataOutputAssociations = new Array();
                            for (var item in this.dataOutputAssociationDic) {
                                var element = this.dataOutputAssociationDic[item].ConvertToJsonObject();
                                dataOutputAssociations.push(element);
                            }
                            if (dataOutputAssociations.length > 0) {
                                model_6.BpmnModelHelper.SetAttributeValue(obj, "dataOutputAssociations", dataOutputAssociations);
                            }
                            var resourceRoles = new Array();
                            for (var item in this.resourceRoleDIc) {
                                resourceRoles.push(this.resourceRoleDIc[item].ConvertToJsonObject());
                            }
                            if (resourceRoles.length > 0) {
                                model_6.BpmnModelHelper.SetAttributeValue(obj, "resourceRoles", resourceRoles);
                            }
                            if (this.LoopCharacteristics != null) {
                                model_6.BpmnModelHelper.SetAttributeValue(obj, "loopCharacteristics", this.LoopCharacteristics.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        Activity.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Default = obj.Default;
                            this.IsForCompensation = obj.IsForCompensation;
                            if (obj.hasOwnProperty("dataInputs") && Array.isArray(obj.dataInputs)) {
                                for (var _i = 0, _a = obj.dataInputs; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var dataInput = new model_6.DataInput(this.Model);
                                    dataInput.LoadFromJsonObject(item);
                                    this.AddDataInput(dataInput);
                                }
                            }
                            if (obj.hasOwnProperty("dataOutputs") && Array.isArray(obj.dataOutputs)) {
                                for (var _b = 0, _c = obj.dataOutputs; _b < _c.length; _b++) {
                                    var item = _c[_b];
                                    var dataOutput = new model_6.DataOutput(this.Model);
                                    dataOutput.LoadFromJsonObject(item);
                                    this.AddDataOutput(dataOutput);
                                }
                            }
                            if (obj.hasOwnProperty("dataInputAssociations") && Array.isArray(obj.dataInputAssociations)) {
                                for (var _d = 0, _e = obj.dataInputAssociations; _d < _e.length; _d++) {
                                    var item = _e[_d];
                                    var dataInputAssociation = new model_6.DataInputAssociation(this.Model);
                                    dataInputAssociation.LoadFromJsonObject(item);
                                    this.AddDataInputAssociation(dataInputAssociation);
                                }
                            }
                            if (obj.hasOwnProperty("dataOutputAssociations") && Array.isArray(obj.dataOutputAssociations)) {
                                for (var _f = 0, _g = obj.dataOutputAssociations; _f < _g.length; _f++) {
                                    var item = _g[_f];
                                    var dataOutputAssociation = new model_6.DataOutputAssociation(this.Model);
                                    dataOutputAssociation.LoadFromJsonObject(item);
                                    this.AddDataOutputAssociation(dataOutputAssociation);
                                }
                            }
                            if (obj.hasOwnProperty("resourceRoles") && Array.isArray(obj.resourceRoles)) {
                                for (var _h = 0, _j = obj.resourceRoles; _h < _j.length; _h++) {
                                    var item = _j[_h];
                                    var resourceRole = model_6.BpmnModelHelper.GetElementType(item.ClrTypeID);
                                    if (resourceRole == null)
                                        continue;
                                    resourceRole.LoadFromJsonObject(item);
                                    this.AddResourceRole(resourceRole);
                                }
                            }
                            if (obj.hasOwnProperty("loopCharacteristics")) {
                                this.LoopCharacteristics = new model_6.MultiInstanceLoopCharacteristics(this.Model);
                                this.LoopCharacteristics.LoadFromJsonObject(obj.loopCharacteristics);
                            }
                        };
                        Activity.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var item in this.dataInputAssociationDic) {
                                this.dataInputAssociationDic[item].Validate(errors);
                            }
                            for (var item in this.dataOutputAssociationDic) {
                                this.dataOutputAssociationDic[item].Validate(errors);
                            }
                        };
                        Activity.prototype.CheckVariableElement = function (variableElement) {
                            model_6.ValidateHelper.CheckVariableElement(variableElement, this, this, null);
                        };
                        return Activity;
                    }(model_6.FlowNode));
                    model_6.Activity = Activity;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./FlowNode.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_7) {
                    var Event = /** @class */ (function (_super) {
                        __extends(Event, _super);
                        function Event(model) {
                            return _super.call(this, model) || this;
                        }
                        return Event;
                    }(model_7.FlowNode));
                    model_7.Event = Event;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Event.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_8) {
                    var CatchEvent = /** @class */ (function (_super) {
                        __extends(CatchEvent, _super);
                        function CatchEvent(model) {
                            var _this = _super.call(this, model) || this;
                            _this.dataOutputAssociationDic = {};
                            _this.dataOutputDIc = {};
                            return _this;
                        }
                        CatchEvent.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.dataOutputAssociationDic = {};
                            this.dataOutputDIc = {};
                        };
                        CatchEvent.prototype.AddDataOutput = function (item) {
                            this.CheckVariableElement(item);
                            this.dataOutputDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        CatchEvent.prototype.GetDataOutput = function (dataOutputId) {
                            if (dataOutputId == null)
                                return null;
                            if (this.dataOutputDIc.hasOwnProperty("dataOutputId"))
                                return this.dataOutputDIc[dataOutputId];
                            return null;
                        };
                        CatchEvent.prototype.GetDataOutputs = function () {
                            var dataOutputs = new Array();
                            for (var item in this.dataOutputDIc) {
                                dataOutputs.push(this.dataOutputDIc[item]);
                            }
                            return dataOutputs;
                        };
                        CatchEvent.prototype.RemoveDataOutput = function (dataOutputId) {
                            delete this.dataOutputDIc[dataOutputId];
                        };
                        CatchEvent.prototype.AddDataOutputAssociation = function (association) {
                            model_8.ValidateHelper.CheckHasIdElement(association);
                            this.dataOutputAssociationDic[association.Id] = association;
                            this.Model.AddHasIdElement(association);
                        };
                        CatchEvent.prototype.GetDataOutputAssociation = function (associationId) {
                            if (associationId == null)
                                return null;
                            if (this.dataOutputAssociationDic.hasOwnProperty("associationId"))
                                return this.dataOutputAssociationDic[associationId];
                            return null;
                        };
                        CatchEvent.prototype.GetDataOutputAssociations = function () {
                            var dataOutputAssociations = new Array();
                            for (var item in this.dataOutputAssociationDic) {
                                dataOutputAssociations.push(this.dataOutputAssociationDic[item]);
                            }
                            return dataOutputAssociations;
                        };
                        CatchEvent.prototype.RemoveDataOutputAssociation = function (associationId) {
                            delete this.dataOutputAssociationDic[associationId];
                        };
                        CatchEvent.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            var dataOutputs = new Array();
                            for (var item in this.dataOutputDIc) {
                                var element = this.dataOutputDIc[item].ConvertToJsonObject();
                                dataOutputs.push(element);
                            }
                            if (dataOutputs.length > 0) {
                                model_8.BpmnModelHelper.SetAttributeValue(obj, "dataOutputs", dataOutputs);
                            }
                            var dataOutputAssociations = new Array();
                            for (var item in this.dataOutputAssociationDic) {
                                var element = this.dataOutputAssociationDic[item].ConvertToJsonObject();
                                dataOutputAssociations.push(element);
                            }
                            if (dataOutputAssociations.length > 0) {
                                model_8.BpmnModelHelper.SetAttributeValue(obj, "dataOutputAssociations", dataOutputAssociations);
                            }
                            return obj;
                        };
                        CatchEvent.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("dataOutputs") && Array.isArray(obj.dataOutputs)) {
                                for (var _i = 0, _a = obj.dataOutputs; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var dataOutput = new model_8.DataOutput(this.Model);
                                    dataOutput.LoadFromJsonObject(item);
                                    this.AddDataOutput(dataOutput);
                                }
                            }
                            if (obj.hasOwnProperty("dataOutputAssociations") && Array.isArray(obj.dataOutputAssociations)) {
                                for (var item in obj.dataOutputAssociations) {
                                    var dataOutputAssociation = new model_8.DataOutputAssociation(this.Model);
                                    dataOutputAssociation.LoadFromJsonObject(item);
                                    this.AddDataOutputAssociation(dataOutputAssociation);
                                }
                            }
                        };
                        CatchEvent.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var item in this.dataOutputDIc) {
                                this.dataOutputDIc[item].Validate(errors);
                            }
                            for (var item in this.dataOutputAssociationDic) {
                                this.dataOutputAssociationDic[item].Validate(errors);
                            }
                        };
                        CatchEvent.prototype.CheckVariableElement = function (variableElement) {
                            model_8.ValidateHelper.CheckVariableElement(variableElement, null, this, null);
                        };
                        return CatchEvent;
                    }(model_8.Event));
                    model_8.CatchEvent = CatchEvent;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./CatchEvent.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_9) {
                    var BoundaryEvent = /** @class */ (function (_super) {
                        __extends(BoundaryEvent, _super);
                        function BoundaryEvent(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.BoundaryEvent";
                            _this.CancelActivity = true;
                            return _this;
                        }
                        //undo操作临时clone方法
                        BoundaryEvent.prototype.clone = function () {
                            throw new Error("Method not implemented.");
                        };
                        BoundaryEvent.prototype.NewInstance = function () {
                            return new BoundaryEvent(this.Model);
                        };
                        BoundaryEvent.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.AttachedToRef = null;
                            this.CancelActivity = true;
                        };
                        BoundaryEvent.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_9.BpmnModelHelper.SetAttributeValue(obj, "AttachedToRef", this.AttachedToRef);
                            model_9.BpmnModelHelper.SetAttributeValue(obj, "CancelActivity", this.CancelActivity);
                            return obj;
                        };
                        BoundaryEvent.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.AttachedToRef = obj.AttachedToRef;
                            this.CancelActivity = obj.CancelActivity;
                        };
                        return BoundaryEvent;
                    }(model_9.CatchEvent));
                    model_9.BoundaryEvent = BoundaryEvent;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../BpmnModelElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_10) {
                    var OmgdiElement = /** @class */ (function (_super) {
                        __extends(OmgdiElement, _super);
                        function OmgdiElement(model) {
                            var _this = _super.call(this, model) || this;
                            _this.Id = model_10.BpmnModelHelper.GenerateElementId();
                            return _this;
                        }
                        OmgdiElement.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Id = null;
                        };
                        OmgdiElement.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_10.BpmnModelHelper.SetAttributeValue(obj, "Id", this.Id);
                            return obj;
                        };
                        OmgdiElement.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Id = obj.Id;
                        };
                        return OmgdiElement;
                    }(model_10.BpmnModelElement));
                    model_10.OmgdiElement = OmgdiElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./OmgdiElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_11) {
                    var Diagram = /** @class */ (function (_super) {
                        __extends(Diagram, _super);
                        function Diagram(model) {
                            return _super.call(this, model) || this;
                        }
                        Diagram.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Name = null;
                        };
                        Diagram.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_11.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                            return obj;
                        };
                        Diagram.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Name = obj.Name;
                        };
                        return Diagram;
                    }(model_11.OmgdiElement));
                    model_11.Diagram = Diagram;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../Omgdi/Diagram.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_12) {
                    var BPMNDiagram = /** @class */ (function (_super) {
                        __extends(BPMNDiagram, _super);
                        function BPMNDiagram(model) {
                            var _this = _super.call(this, model) || this;
                            _this.bpmnLabelStyleDic = {};
                            _this.BpmnPlane = new model_12.BPMNPlane(model);
                            return _this;
                        }
                        BPMNDiagram.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.BpmnPlane = null;
                            this.bpmnLabelStyleDic = {};
                        };
                        BPMNDiagram.prototype.AddBPMNLabelStyle = function (element) {
                            this.CheckBPMNLabelStyle(element);
                            this.bpmnLabelStyleDic[element.Id] = element;
                            this.Model.AddHasIdElement(element);
                        };
                        BPMNDiagram.prototype.GetBPMNLabelStyle = function (elementId) {
                            if (elementId == null)
                                return null;
                            if (this.bpmnLabelStyleDic.hasOwnProperty(elementId))
                                return this.bpmnLabelStyleDic[elementId];
                            return null;
                        };
                        BPMNDiagram.prototype.GetBPMNLabelStyles = function () {
                            var bpmnLabelStyles = new Array();
                            for (var item in this.bpmnLabelStyleDic) {
                                bpmnLabelStyles.push(this.bpmnLabelStyleDic[item]);
                            }
                            return bpmnLabelStyles;
                        };
                        BPMNDiagram.prototype.RemoveBPMNLabelStyle = function (elementId) {
                            delete this.bpmnLabelStyleDic[elementId];
                        };
                        BPMNDiagram.prototype.CheckBPMNLabelStyle = function (element) {
                            model_12.ValidateHelper.CheckHasIdElement(element);
                        };
                        BPMNDiagram.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            if (this.BpmnPlane != null) {
                                model_12.BpmnModelHelper.SetAttributeValue(obj, "BpmnPlane", this.BpmnPlane.ConvertToJsonObject());
                            }
                            var bpmnLabelStyles = new Array();
                            for (var item in this.bpmnLabelStyleDic) {
                                var bpmnLabelStyle = this.bpmnLabelStyleDic[item].ConvertToJsonObject();
                                bpmnLabelStyles.push(bpmnLabelStyle);
                            }
                            if (bpmnLabelStyles.length > 0) {
                                model_12.BpmnModelHelper.SetAttributeValue(obj, "bpmnLabelStyles", bpmnLabelStyles);
                            }
                            return obj;
                        };
                        BPMNDiagram.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("BpmnPlane")) {
                                this.BpmnPlane = new model_12.BPMNPlane(this.Model);
                                this.BpmnPlane.LoadFromJsonObject(obj.BpmnPlane);
                            }
                            if (obj.hasOwnProperty("bpmnLabelStyles") && Array.isArray(obj.bpmnLabelStyles)) {
                                for (var _i = 0, _a = obj.bpmnLabelStyles; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var bpmnLabelStyle = new model_12.BPMNLabelStyle(this.Model);
                                    bpmnLabelStyle.LoadFromJsonObject(item);
                                    this.AddBPMNLabelStyle(bpmnLabelStyle);
                                }
                            }
                        };
                        return BPMNDiagram;
                    }(model_12.Diagram));
                    model_12.BPMNDiagram = BPMNDiagram;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./OmgdiElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_13) {
                    var DiagramElement = /** @class */ (function (_super) {
                        __extends(DiagramElement, _super);
                        function DiagramElement(model) {
                            return _super.call(this, model) || this;
                        }
                        DiagramElement.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_13.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                            var extensionElementsObj = {};
                            this.WriteExtensionElements(extensionElementsObj);
                            if (Object.getOwnPropertyNames(extensionElementsObj).length > 0) {
                                model_13.BpmnModelHelper.SetAttributeValue(obj, "extensionElements", extensionElementsObj);
                            }
                            return obj;
                        };
                        DiagramElement.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("extensionElements")) {
                                this.LoadExtensionElements(obj.extensionElements);
                            }
                        };
                        DiagramElement.prototype.LoadExtensionElements = function (extensionElementsObj) {
                        };
                        DiagramElement.prototype.WriteExtensionElements = function (extensionElementsObj) {
                        };
                        return DiagramElement;
                    }(model_13.OmgdiElement));
                    model_13.DiagramElement = DiagramElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./DiagramElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_14) {
                    var Edge = /** @class */ (function (_super) {
                        __extends(Edge, _super);
                        function Edge(model) {
                            var _this = _super.call(this, model) || this;
                            _this.Points = new Array();
                            return _this;
                        }
                        Edge.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Points = new Array();
                        };
                        Edge.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            var points = new Array();
                            for (var _i = 0, _a = this.Points; _i < _a.length; _i++) {
                                var item = _a[_i];
                                points.push(item.ConvertToJsonObject());
                            }
                            if (points.length > 0) {
                                model_14.BpmnModelHelper.SetAttributeValue(obj, "points", points);
                            }
                            return obj;
                        };
                        Edge.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("points") && Array.isArray(obj.points)) {
                                for (var _i = 0, _a = obj.points; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var point = new model_14.Point(this.Model);
                                    point.LoadFromJsonObject(item);
                                    this.Points.push(point);
                                }
                            }
                        };
                        return Edge;
                    }(model_14.DiagramElement));
                    model_14.Edge = Edge;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Edge.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_15) {
                    var LabeledEdge = /** @class */ (function (_super) {
                        __extends(LabeledEdge, _super);
                        function LabeledEdge(model) {
                            return _super.call(this, model) || this;
                        }
                        return LabeledEdge;
                    }(model_15.Edge));
                    model_15.LabeledEdge = LabeledEdge;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../Omgdi/LabeledEdge.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_16) {
                    var BPMNEdge = /** @class */ (function (_super) {
                        __extends(BPMNEdge, _super);
                        function BPMNEdge(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.bpmndi.BPMNEdge";
                            _this.LineType = model_16.SequenceFlowLineType.PolyLine;
                            return _this;
                        }
                        BPMNEdge.prototype.NewInstance = function () {
                            return new BPMNEdge(this.Model);
                        };
                        BPMNEdge.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.BpmnElementId = null;
                            this.LineType = model_16.SequenceFlowLineType.PolyLine;
                            this.SourceShapeElementId = null;
                            this.TargetShapeElementId = null;
                            this.BpmnLabel = null;
                            this.RectangularLine = null;
                        };
                        BPMNEdge.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_16.BpmnModelHelper.SetAttributeValue(obj, "BpmnElementId", this.BpmnElementId);
                            model_16.BpmnModelHelper.SetAttributeValue(obj, "SourceShapeElementId", this.SourceShapeElementId);
                            model_16.BpmnModelHelper.SetAttributeValue(obj, "TargetShapeElementId", this.TargetShapeElementId);
                            model_16.BpmnModelHelper.SetAttributeValue(obj, "LineType", this.LineType);
                            if (this.BpmnLabel != null) {
                                model_16.BpmnModelHelper.SetAttributeValue(obj, "BpmnLabel", this.BpmnLabel.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        BPMNEdge.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.BpmnElementId = obj.BpmnElementId;
                            this.SourceShapeElementId = obj.SourceShapeElementId;
                            this.TargetShapeElementId = obj.TargetShapeElementId;
                            this.LineType = obj.LineType;
                            if (obj.hasOwnProperty("BpmnLabel")) {
                                this.BpmnLabel = new model_16.BPMNLabel(this.Model);
                                this.BpmnLabel.LoadFromJsonObject(obj.BpmnLabel);
                            }
                        };
                        BPMNEdge.prototype.LoadExtensionElements = function (extensionElementsObj) {
                            _super.prototype.LoadExtensionElements.call(this, extensionElementsObj);
                            if (extensionElementsObj.hasOwnProperty("RectangularLine")) {
                                this.RectangularLine = new model_16.RectangularLine(this.Model);
                                this.RectangularLine.LoadFromJsonObject(extensionElementsObj.RectangularLine);
                            }
                        };
                        BPMNEdge.prototype.WriteExtensionElements = function (extensionElementsObj) {
                            _super.prototype.WriteExtensionElements.call(this, extensionElementsObj);
                            switch (this.LineType) {
                                case model_16.SequenceFlowLineType.RectangularLineType:
                                    model_16.BpmnModelHelper.SetAttributeValue(extensionElementsObj, "RectangularLine", this.RectangularLine.ConvertToJsonObject());
                                    break;
                                default:
                                    break;
                            }
                        };
                        BPMNEdge.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.Model.GetHasIdElement(this.BpmnElementId) == null) {
                                var error = new model_16.ValidationError();
                                error.Element = this;
                                error.ErrorLevel = model_16.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "\u627E\u4E0D\u5230 id \u4E3A " + this.BpmnElementId + " \u7684\u5143\u7D20";
                                errors.push(error);
                            }
                        };
                        return BPMNEdge;
                    }(model_16.LabeledEdge));
                    model_16.BPMNEdge = BPMNEdge;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./DiagramElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_17) {
                    var Node = /** @class */ (function (_super) {
                        __extends(Node, _super);
                        function Node(model) {
                            return _super.call(this, model) || this;
                        }
                        return Node;
                    }(model_17.DiagramElement));
                    model_17.Node = Node;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Node.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_18) {
                    var Label = /** @class */ (function (_super) {
                        __extends(Label, _super);
                        function Label(model) {
                            return _super.call(this, model) || this;
                        }
                        Label.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Bounds = null;
                        };
                        Label.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            if (this.Bounds != null) {
                                model_18.BpmnModelHelper.SetAttributeValue(obj, "Bounds", this.Bounds.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        Label.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("Bounds")) {
                                this.Bounds = new model_18.Bounds(this.Model);
                                this.Bounds.LoadFromJsonObject(obj.Bounds);
                            }
                        };
                        return Label;
                    }(model_18.Node));
                    model_18.Label = Label;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../Omgdi/Label.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_19) {
                    var BPMNLabel = /** @class */ (function (_super) {
                        __extends(BPMNLabel, _super);
                        function BPMNLabel(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.bpmndi.BPMNLabel";
                            return _this;
                        }
                        BPMNLabel.prototype.NewInstance = function () {
                            return new BPMNLabel(this.Model);
                        };
                        BPMNLabel.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.LabelStyle = null;
                        };
                        BPMNLabel.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_19.BpmnModelHelper.SetAttributeValue(obj, "LabelStyle", this.LabelStyle);
                            return obj;
                        };
                        BPMNLabel.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.LabelStyle = obj.LabelStyle;
                        };
                        return BPMNLabel;
                    }(model_19.Label));
                    model_19.BPMNLabel = BPMNLabel;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./OmgdiElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_20) {
                    var Style = /** @class */ (function (_super) {
                        __extends(Style, _super);
                        function Style(model) {
                            return _super.call(this, model) || this;
                        }
                        return Style;
                    }(model_20.OmgdiElement));
                    model_20.Style = Style;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../Omgdi/Style.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_21) {
                    var BPMNLabelStyle = /** @class */ (function (_super) {
                        __extends(BPMNLabelStyle, _super);
                        function BPMNLabelStyle(model) {
                            return _super.call(this, model) || this;
                        }
                        BPMNLabelStyle.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Font = null;
                        };
                        BPMNLabelStyle.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            if (this.Font != null) {
                                model_21.BpmnModelHelper.SetAttributeValue(obj, "Font", this.Font.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        BPMNLabelStyle.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("Font")) {
                                this.Font = new model_21.Font(this.Model);
                                this.Font.LoadFromJsonObject(obj.Font);
                            }
                        };
                        return BPMNLabelStyle;
                    }(model_21.Style));
                    model_21.BPMNLabelStyle = BPMNLabelStyle;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Node.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_22) {
                    var Plane = /** @class */ (function (_super) {
                        __extends(Plane, _super);
                        function Plane(model) {
                            var _this = _super.call(this, model) || this;
                            _this.diagramElementDic = {};
                            return _this;
                        }
                        Plane.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.diagramElementDic = {};
                        };
                        Plane.prototype.AddDiagramElement = function (element) {
                            this.CheckDiagramElement(element);
                            this.diagramElementDic[element.Id] = element;
                        };
                        Plane.prototype.GetDiagramElement = function (elementId) {
                            if (elementId == null)
                                return null;
                            if (this.diagramElementDic.hasOwnProperty(elementId))
                                return this.diagramElementDic[elementId];
                            return null;
                        };
                        Plane.prototype.GetDiagramElements = function () {
                            var diagramElements = new Array();
                            for (var item in this.diagramElementDic) {
                                var diagramElement = this.diagramElementDic[item];
                                diagramElements.push(diagramElement);
                            }
                            return diagramElements;
                        };
                        Plane.prototype.RemoveDiagramElement = function (elementId) {
                            delete this.diagramElementDic[elementId];
                        };
                        Plane.prototype.CheckDiagramElement = function (element) {
                            model_22.ValidateHelper.CheckHasIdElement(element);
                        };
                        Plane.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            var diagramElements = new Array();
                            for (var item in this.diagramElementDic) {
                                var element = this.diagramElementDic[item].ConvertToJsonObject();
                                diagramElements.push(element);
                            }
                            if (diagramElements.length > 0) {
                                model_22.BpmnModelHelper.SetAttributeValue(obj, "diagramElements", diagramElements);
                            }
                            return obj;
                        };
                        Plane.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("diagramElements") && Array.isArray(obj.diagramElements)) {
                                for (var _i = 0, _a = obj.diagramElements; _i < _a.length; _i++) {
                                    var node = _a[_i];
                                    var diagramElement = model_22.BpmnModelHelper.GetElementType(node.ClrTypeID);
                                    if (diagramElement == null)
                                        continue;
                                    diagramElement.Model = this.Model;
                                    diagramElement.LoadFromJsonObject(node);
                                    this.AddDiagramElement(diagramElement);
                                }
                            }
                        };
                        Plane.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var _i = 0, _a = this.GetDiagramElements(); _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.Validate(errors);
                            }
                        };
                        return Plane;
                    }(model_22.Node));
                    model_22.Plane = Plane;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../Omgdi/Plane.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_23) {
                    var BPMNPlane = /** @class */ (function (_super) {
                        __extends(BPMNPlane, _super);
                        function BPMNPlane(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.bpmndi.BPMNPlane";
                            return _this;
                        }
                        BPMNPlane.prototype.NewInstance = function () {
                            return new BPMNPlane(this.Model);
                        };
                        BPMNPlane.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.BpmnElementId = null;
                        };
                        BPMNPlane.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_23.BpmnModelHelper.SetAttributeValue(obj, "BpmnElementId", this.BpmnElementId);
                            return obj;
                        };
                        BPMNPlane.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.BpmnElementId = obj.BpmnElementId;
                        };
                        return BPMNPlane;
                    }(model_23.Plane));
                    model_23.BPMNPlane = BPMNPlane;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Node.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_24) {
                    var Shape = /** @class */ (function (_super) {
                        __extends(Shape, _super);
                        function Shape(model) {
                            return _super.call(this, model) || this;
                        }
                        Shape.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Bounds = null;
                        };
                        Shape.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            if (this.Bounds != null) {
                                model_24.BpmnModelHelper.SetAttributeValue(obj, "Bounds", this.Bounds.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        Shape.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("Bounds")) {
                                this.Bounds = new model_24.Bounds(this.Model);
                                this.Bounds.LoadFromJsonObject(obj.Bounds);
                            }
                        };
                        return Shape;
                    }(model_24.Node));
                    model_24.Shape = Shape;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Shape.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_25) {
                    var LabeledShape = /** @class */ (function (_super) {
                        __extends(LabeledShape, _super);
                        function LabeledShape(model) {
                            return _super.call(this, model) || this;
                        }
                        return LabeledShape;
                    }(model_25.Shape));
                    model_25.LabeledShape = LabeledShape;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../Omgdi/LabeledShape.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_26) {
                    var BPMNShape = /** @class */ (function (_super) {
                        __extends(BPMNShape, _super);
                        function BPMNShape(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.bpmndi.BPMNShape";
                            return _this;
                        }
                        BPMNShape.prototype.NewInstance = function () {
                            return new BPMNShape(this.Model);
                        };
                        BPMNShape.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.BpmnElementId = null;
                            this.BpmnLabel = null;
                        };
                        BPMNShape.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_26.BpmnModelHelper.SetAttributeValue(obj, "BpmnElementId", this.BpmnElementId);
                            if (this.BpmnLabel != null) {
                                model_26.BpmnModelHelper.SetAttributeValue(obj, "BpmnLabel", this.BpmnLabel.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        BPMNShape.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.BpmnElementId = obj.BpmnElementId;
                            if (obj.hasOwnProperty("BpmnLabel")) {
                                this.BpmnLabel = new model_26.BPMNLabel(this.Model);
                                this.BpmnLabel.LoadFromJsonObject(obj.BpmnLabel);
                            }
                        };
                        BPMNShape.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.Model.GetHasIdElement(this.BpmnElementId) == null) {
                                var error = new model_26.ValidationError();
                                error.Element = this;
                                error.ErrorLevel = model_26.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "\u627E\u4E0D\u5230 id \u4E3A " + this.BpmnElementId + " \u7684\u5143\u7D20";
                                errors.push(error);
                            }
                        };
                        return BPMNShape;
                    }(model_26.LabeledShape));
                    model_26.BPMNShape = BPMNShape;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var SequenceFlowLineType;
                    (function (SequenceFlowLineType) {
                        SequenceFlowLineType["PolyLine"] = "PolyLine";
                        SequenceFlowLineType["RectangularLineType"] = "RectangularLineType";
                    })(SequenceFlowLineType = model.SequenceFlowLineType || (model.SequenceFlowLineType = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_27) {
                    var BpmnModel = /** @class */ (function () {
                        function BpmnModel() {
                            this.hasIdElementDic = {};
                        }
                        BpmnModel.prototype.ResetBeforeLoadFrom = function () {
                            this.hasIdElementDic = {};
                            this.MetadataContentID = null;
                            this.MetadataContentCode = null;
                            this.MetadataContentName = null;
                            this.TargetNamespace = null;
                            this.DefaultProcess = null;
                            this.DefaultDiagram = null;
                        };
                        BpmnModel.prototype.ConvertToJson = function () {
                            var model = {};
                            model.TargetNamespace = this.TargetNamespace;
                            model.MetadataContentID = this.MetadataContentID;
                            model.MetadataContentCode = this.MetadataContentCode;
                            model.MetadataContentName = this.MetadataContentName;
                            if (this.DefaultProcess != null) {
                                model.DefaultProcess = this.DefaultProcess.ConvertToJsonObject();
                            }
                            if (this.DefaultDiagram != null) {
                                model.DefaultDiagram = this.DefaultDiagram.ConvertToJsonObject();
                            }
                            return JSON.stringify(model);
                        };
                        BpmnModel.prototype.LoadFromJson = function (json) {
                            var model = JSON.parse(json);
                            this.TargetNamespace = model.TargetNamespace;
                            this.MetadataContentID = model.MetadataContentID;
                            this.MetadataContentCode = model.MetadataContentCode;
                            this.MetadataContentName = model.MetadataContentName;
                            this.DefaultProcess = new model_27.Process(this);
                            if (model.DefaultProcess)
                                this.DefaultProcess.LoadFromJsonObject(model.DefaultProcess);
                            this.DefaultDiagram = new model_27.BPMNDiagram(this);
                            if (model.DefaultDiagram)
                                this.DefaultDiagram.LoadFromJsonObject(model.DefaultDiagram);
                        };
                        BpmnModel.prototype.AddHasIdElement = function (element) {
                            if (element == null)
                                throw new Error("element is null");
                            if (element.Id == null)
                                throw new Error("元素 Id 不能为 null");
                            if (model_27.ValidateHelper.IsMatchVariableNameRules(element.Id) == false)
                                throw new Error("元素 Id 只能包含字母、数字和下划线，且不能以数字开头。");
                            if (this.hasIdElementDic.hasOwnProperty(element.Id)) {
                                throw new Error("\u5DF2\u7ECF\u5B58\u5728 Id \u4E3A " + element.Id + " \u7684\u6D41\u7A0B\u5143\u7D20\u3002");
                            }
                            this.hasIdElementDic[element.Id] = element;
                        };
                        BpmnModel.prototype.GetHasIdElement = function (elementId) {
                            if (elementId == null)
                                return null;
                            if (this.hasIdElementDic.hasOwnProperty(elementId)) {
                                return this.hasIdElementDic[elementId];
                            }
                            return null;
                        };
                        BpmnModel.prototype.Validate = function () {
                            var errors = new Array();
                            for (var rootElement in this.hasIdElementDic) {
                                //this.hasIdElementDic[rootElement].Validate(errors);
                            }
                            return errors;
                        };
                        return BpmnModel;
                    }());
                    model_27.BpmnModel = BpmnModel;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var BpmnModelHelper = /** @class */ (function () {
                        function BpmnModelHelper() {
                        }
                        BpmnModelHelper.GenerateElementId = function () {
                            ++(this.generatedId);
                            return "_" + model.RadixConvert.Decimal2String(this.generatedId);
                        };
                        BpmnModelHelper.SetAttributeValue = function (obj, name, value) {
                            if (obj == undefined || obj == null || value == undefined || value == null)
                                return;
                            obj[name] = value;
                        };
                        BpmnModelHelper.RegisterElementType = function (typeInstance) {
                            BpmnModelHelper.elementTypeDic[typeInstance.ClrTypeID] = typeInstance;
                        };
                        BpmnModelHelper.GetElementType = function (typeId) {
                            return BpmnModelHelper.elementTypeDic[typeId].NewInstance();
                        };
                        BpmnModelHelper.elementTypeDic = {};
                        BpmnModelHelper.generatedId = parseInt(Date.now().toString());
                        return BpmnModelHelper;
                    }());
                    model.BpmnModelHelper = BpmnModelHelper;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_28) {
                    var RootElement = /** @class */ (function (_super) {
                        __extends(RootElement, _super);
                        function RootElement(model) {
                            return _super.call(this, model) || this;
                        }
                        RootElement.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_28.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                            return obj;
                        };
                        return RootElement;
                    }(model_28.BaseElement));
                    model_28.RootElement = RootElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./RootElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_29) {
                    var CallableElement = /** @class */ (function (_super) {
                        __extends(CallableElement, _super);
                        function CallableElement(model) {
                            var _this = _super.call(this, model) || this;
                            _this.dataInputDIc = {};
                            _this.dataOutputDIc = {};
                            return _this;
                        }
                        CallableElement.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Name = null;
                            this.dataInputDIc = {};
                            this.dataOutputDIc = {};
                        };
                        CallableElement.prototype.AddDataInput = function (item) {
                            this.CheckVariableElement(item);
                            this.dataInputDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        CallableElement.prototype.GetDataInput = function (dataInputId) {
                            if (dataInputId == null)
                                return null;
                            if (this.dataInputDIc.hasOwnProperty(dataInputId))
                                return this.dataInputDIc[dataInputId];
                            return null;
                        };
                        CallableElement.prototype.GetDataInputs = function () {
                            var dataInputs = new Array();
                            for (var dataInput in this.dataInputDIc) {
                                dataInputs.push(this.dataInputDIc[dataInput]);
                            }
                            return dataInputs;
                        };
                        CallableElement.prototype.RemoveDataInput = function (dataInputId) {
                            delete this.dataInputDIc[dataInputId];
                        };
                        CallableElement.prototype.AddDataOutput = function (item) {
                            this.CheckVariableElement(item);
                            this.dataOutputDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        CallableElement.prototype.GetDataOutput = function (dataOutputId) {
                            if (dataOutputId == null)
                                return null;
                            if (this.dataInputDIc.hasOwnProperty(dataOutputId))
                                return this.dataOutputDIc[dataOutputId];
                            return null;
                        };
                        CallableElement.prototype.GetDataOutputs = function () {
                            var dataOutputs = new Array();
                            for (var dataOutput in this.dataOutputDIc) {
                                dataOutputs.push(this.dataOutputDIc[dataOutput]);
                            }
                            return dataOutputs;
                        };
                        CallableElement.prototype.RemoveDataOutput = function (dataOutputId) {
                            delete this.dataOutputDIc[dataOutputId];
                        };
                        CallableElement.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_29.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                            var dataInputs = new Array();
                            for (var item in this.dataInputDIc) {
                                var element = this.dataInputDIc[item].ConvertToJsonObject();
                                dataInputs.push(element);
                            }
                            if (dataInputs.length > 0) {
                                model_29.BpmnModelHelper.SetAttributeValue(obj, "dataInputs", dataInputs);
                            }
                            var dataOutputs = new Array();
                            for (var item in this.dataOutputDIc) {
                                var element = this.dataOutputDIc[item].ConvertToJsonObject();
                                dataOutputs.push(element);
                            }
                            if (dataOutputs.length > 0) {
                                model_29.BpmnModelHelper.SetAttributeValue(obj, "dataOutputs", dataOutputs);
                            }
                            return obj;
                        };
                        CallableElement.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Name = obj.Name;
                            if (obj.hasOwnProperty("dataInputs") && Array.isArray(obj.dataInputs)) {
                                for (var _i = 0, _a = obj.dataInputs; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var dataInput = new model_29.DataInput(this.Model);
                                    dataInput.LoadFromJsonObject(item);
                                    this.AddDataInput(dataInput);
                                }
                            }
                            if (obj.hasOwnProperty("dataOutputs") && Array.isArray(obj.dataOutputs)) {
                                for (var _b = 0, _c = obj.dataOutputs; _b < _c.length; _b++) {
                                    var item = _c[_b];
                                    var dataOutput = new model_29.DataOutput(this.Model);
                                    dataOutput.LoadFromJsonObject(item);
                                    this.AddDataOutput(dataOutput);
                                }
                            }
                        };
                        CallableElement.prototype.CheckVariableElement = function (variableElement) {
                            model_29.ValidateHelper.CheckVariableElement(variableElement, this, this, null);
                        };
                        return CallableElement;
                    }(model_29.RootElement));
                    model_29.CallableElement = CallableElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Activity.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_30) {
                    var CallActivity = /** @class */ (function (_super) {
                        __extends(CallActivity, _super);
                        function CallActivity(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.CallActivity";
                            _this.CALLACTIVITYMEXTAG = "bpmn.CallActivity";
                            _this.SubProcessDataAssociations = new model_30.SubProcessDataAssociations(model);
                            return _this;
                        }
                        //undo操作临时clone方法
                        CallActivity.prototype.clone = function () {
                            throw new Error("Method not implemented.");
                        };
                        CallActivity.prototype.NewInstance = function () {
                            return new CallActivity(this.Model);
                        };
                        CallActivity.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.CalledElement = null;
                            this.SubProcessDataAssociations = null;
                        };
                        CallActivity.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_30.BpmnModelHelper.SetAttributeValue(obj, "CalledElement", this.CalledElement);
                            return obj;
                        };
                        CallActivity.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.CalledElement = obj.CalledElement;
                        };
                        CallActivity.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            if (this.SubProcessDataAssociations != null &&
                                this.SubProcessDataAssociations.GetDataInputAssociations().length > 0 &&
                                this.SubProcessDataAssociations.GetDataOutputAssociations().length > 0) {
                                this.SubProcessDataAssociations.MexTag = this.CALLACTIVITYMEXTAG;
                                list.push(this.SubProcessDataAssociations);
                            }
                            return list;
                        };
                        CallActivity.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_2 = extensionElements; _i < extensionElements_2.length; _i++) {
                                var extensionElement = extensionElements_2[_i];
                                if (extensionElement instanceof model_30.SubProcessDataAssociations && extensionElement.MexTag == this.CALLACTIVITYMEXTAG) {
                                    this.SubProcessDataAssociations = extensionElement;
                                }
                            }
                        };
                        return CallActivity;
                    }(model_30.Activity));
                    model_30.CallActivity = CallActivity;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_31) {
                    var DataAssociation = /** @class */ (function (_super) {
                        __extends(DataAssociation, _super);
                        function DataAssociation(model) {
                            return _super.call(this, model) || this;
                        }
                        DataAssociation.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.TargetRef = null;
                            this.Transformation = null;
                        };
                        DataAssociation.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_31.BpmnModelHelper.SetAttributeValue(obj, "TargetRef", this.TargetRef);
                            if (this.Transformation == null) {
                                throw new Error("Transformation is null.");
                            }
                            else {
                                model_31.BpmnModelHelper.SetAttributeValue(obj, "Transformation", this.Transformation.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        DataAssociation.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.TargetRef = obj.TargetRef;
                            if (obj.hasOwnProperty("Transformation")) {
                                this.Transformation = new model_31.FormalExpression(this.Model);
                                this.Transformation.LoadFromJsonObject(obj.Transformation);
                            }
                        };
                        DataAssociation.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.Transformation != null) {
                                this.Transformation.Validate(errors);
                            }
                            else {
                                var error = new model_31.ValidationError();
                                error.Element = this;
                                error.ErrorLevel = model_31.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "没有设定赋值表达式";
                                errors.push(error);
                            }
                            if (this.TargetRef == null) {
                                var error = new model_31.ValidationError();
                                error.Element = this;
                                error.ErrorLevel = model_31.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "没有设定关联的目标";
                                errors.push(error);
                            }
                        };
                        return DataAssociation;
                    }(model_31.BaseElement));
                    model_31.DataAssociation = DataAssociation;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_32) {
                    var DataInput = /** @class */ (function (_super) {
                        __extends(DataInput, _super);
                        function DataInput(model) {
                            var _this = _super.call(this, model) || this;
                            _this.MEXTAG = "bpmn.DataInput";
                            _this.IsAllowNull = true;
                            _this.IsRequired = true;
                            _this.IsCollection = false;
                            return _this;
                        }
                        DataInput.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.IsAllowNull = true;
                            this.IsRequired = true;
                            this.Name = null;
                            this.DataType = null;
                            this.IsCollection = false;
                        };
                        DataInput.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_32.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                            model_32.BpmnModelHelper.SetAttributeValue(obj, "IsAllowNull", this.IsAllowNull);
                            model_32.BpmnModelHelper.SetAttributeValue(obj, "IsRequired", this.IsRequired);
                            model_32.BpmnModelHelper.SetAttributeValue(obj, "IsCollection", this.IsCollection);
                            return obj;
                        };
                        DataInput.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Name = obj.Name;
                            this.IsAllowNull = obj.IsAllowNull;
                            this.IsRequired = obj.IsRequired;
                            this.IsCollection = obj.IsCollection;
                        };
                        DataInput.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            if (this.DataType != null) {
                                this.DataType.MexTag = this.MEXTAG;
                                list.push(this.DataType);
                            }
                            return list;
                        };
                        DataInput.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_3 = extensionElements; _i < extensionElements_3.length; _i++) {
                                var extensionElement = extensionElements_3[_i];
                                if (extensionElement instanceof model_32.DataType && extensionElement.MexTag == this.MEXTAG) {
                                    this.DataType = extensionElement;
                                }
                            }
                        };
                        DataInput.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.DataType != null) {
                                this.DataType.Validate(errors);
                            }
                            else {
                                var error = new model_32.ValidationError();
                                error.Element = this;
                                error.ErrorLevel = model_32.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "没有设定变量类型";
                                errors.push(error);
                            }
                        };
                        return DataInput;
                    }(model_32.BaseElement));
                    model_32.DataInput = DataInput;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./DataAssociation.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_33) {
                    var DataInputAssociation = /** @class */ (function (_super) {
                        __extends(DataInputAssociation, _super);
                        function DataInputAssociation(model) {
                            return _super.call(this, model) || this;
                        }
                        return DataInputAssociation;
                    }(model_33.DataAssociation));
                    model_33.DataInputAssociation = DataInputAssociation;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./FlowElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_34) {
                    var DataObject = /** @class */ (function (_super) {
                        __extends(DataObject, _super);
                        function DataObject(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.DataObject";
                            _this.MEXTAG = "bpmn.DataObject";
                            _this.IsAllowNull = true;
                            _this.IsCollection = false;
                            return _this;
                        }
                        //undo操作临时clone方法
                        DataObject.prototype.clone = function () {
                            throw new Error("Method not implemented.");
                        };
                        DataObject.prototype.NewInstance = function () {
                            return new DataObject(this.Model);
                        };
                        DataObject.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.DataType = null;
                            this.IsAllowNull = true;
                            this.IsCollection = false;
                        };
                        DataObject.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_34.BpmnModelHelper.SetAttributeValue(obj, "IsAllowNull", this.IsAllowNull);
                            model_34.BpmnModelHelper.SetAttributeValue(obj, "IsCollection", this.IsCollection);
                            return obj;
                        };
                        DataObject.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.IsAllowNull = obj.IsAllowNull;
                            this.IsCollection = obj.IsCollection;
                        };
                        DataObject.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            if (this.DataType != null) {
                                this.DataType.MexTag = this.MEXTAG;
                                list.push(this.DataType);
                            }
                            return list;
                        };
                        DataObject.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_4 = extensionElements; _i < extensionElements_4.length; _i++) {
                                var extensionElement = extensionElements_4[_i];
                                if (extensionElement instanceof model_34.DataType && extensionElement.MexTag == this.MEXTAG) {
                                    this.DataType = extensionElement;
                                }
                            }
                        };
                        DataObject.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.DataType != null) {
                                this.DataType.Validate(errors);
                            }
                            else {
                                var error = new model_34.ValidationError();
                                error.Element = this;
                                error.ErrorLevel = model_34.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "没有设定变量类型";
                                errors.push(error);
                            }
                        };
                        return DataObject;
                    }(model_34.FlowElement));
                    model_34.DataObject = DataObject;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_35) {
                    var DataOutput = /** @class */ (function (_super) {
                        __extends(DataOutput, _super);
                        function DataOutput(model) {
                            var _this = _super.call(this, model) || this;
                            _this.MEXTAG = "bpmn.DataOutput";
                            _this.IsAllowNull = true;
                            _this.IsCollection = false;
                            return _this;
                        }
                        DataOutput.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.IsAllowNull = true;
                            this.Name = null;
                            this.DataType = null;
                            this.IsCollection = false;
                        };
                        DataOutput.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_35.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                            model_35.BpmnModelHelper.SetAttributeValue(obj, "IsAllowNull", this.IsAllowNull);
                            model_35.BpmnModelHelper.SetAttributeValue(obj, "IsCollection", this.IsCollection);
                            return obj;
                        };
                        DataOutput.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Name = obj.Name;
                            this.IsAllowNull = obj.IsAllowNull;
                            this.IsCollection = obj.IsCollection;
                        };
                        DataOutput.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            if (this.DataType != null) {
                                this.DataType.MexTag = this.MEXTAG;
                                list.push(this.DataType);
                            }
                            return list;
                        };
                        DataOutput.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_5 = extensionElements; _i < extensionElements_5.length; _i++) {
                                var extensionElement = extensionElements_5[_i];
                                if (extensionElement instanceof model_35.DataType && extensionElement.MexTag == this.MEXTAG) {
                                    this.DataType = extensionElement;
                                }
                            }
                        };
                        DataOutput.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.DataType != null) {
                                this.DataType.Validate(errors);
                            }
                            else {
                                var error = new model_35.ValidationError();
                                error.Element = this;
                                error.ErrorLevel = model_35.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "没有设定变量类型";
                                errors.push(error);
                            }
                        };
                        return DataOutput;
                    }(model_35.BaseElement));
                    model_35.DataOutput = DataOutput;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./DataAssociation.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_36) {
                    var DataOutputAssociation = /** @class */ (function (_super) {
                        __extends(DataOutputAssociation, _super);
                        function DataOutputAssociation(model) {
                            return _super.call(this, model) || this;
                        }
                        return DataOutputAssociation;
                    }(model_36.DataAssociation));
                    model_36.DataOutputAssociation = DataOutputAssociation;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Event.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_37) {
                    var ThrowEvent = /** @class */ (function (_super) {
                        __extends(ThrowEvent, _super);
                        function ThrowEvent(model) {
                            var _this = _super.call(this, model) || this;
                            _this.dataInputAssociationDic = {};
                            _this.dataInputDIc = {};
                            return _this;
                        }
                        ThrowEvent.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.dataInputAssociationDic = {};
                            this.dataInputDIc = {};
                        };
                        ThrowEvent.prototype.AddDataInput = function (item) {
                            this.CheckVariableElement(item);
                            this.dataInputDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        ThrowEvent.prototype.GetDataInput = function (dataInputId) {
                            if (dataInputId == null)
                                return null;
                            if (this.dataInputDIc.hasOwnProperty("dataInputId"))
                                return this.dataInputDIc[dataInputId];
                            return null;
                        };
                        ThrowEvent.prototype.GetDataInputs = function () {
                            var dataInputs = new Array();
                            for (var item in this.dataInputDIc) {
                                dataInputs.push(this.dataInputDIc[item]);
                            }
                            return dataInputs;
                        };
                        ThrowEvent.prototype.RemoveDataInput = function (dataInputId) {
                            delete this.dataInputDIc[dataInputId];
                        };
                        ThrowEvent.prototype.AddDataInputAssociation = function (association) {
                            model_37.ValidateHelper.CheckHasIdElement(association);
                            this.dataInputAssociationDic[association.Id] = association;
                            this.Model.AddHasIdElement(association);
                        };
                        ThrowEvent.prototype.GetDataInputAssociation = function (associationId) {
                            if (associationId == null)
                                return null;
                            if (this.dataInputAssociationDic.hasOwnProperty("associationId"))
                                return this.dataInputAssociationDic[associationId];
                            return null;
                        };
                        ThrowEvent.prototype.GetDataInputAssociations = function () {
                            var dataInputAssociations = new Array();
                            for (var item in this.dataInputAssociationDic) {
                                dataInputAssociations.push(this.dataInputAssociationDic[item]);
                            }
                            return dataInputAssociations;
                        };
                        ThrowEvent.prototype.RemoveDataInputAssociation = function (associationId) {
                            delete this.dataInputAssociationDic[associationId];
                        };
                        ThrowEvent.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            var dataInputs = new Array();
                            for (var item in this.dataInputDIc) {
                                var element = this.dataInputDIc[item].ConvertToJsonObject();
                                dataInputs.push(element);
                            }
                            if (dataInputs.length > 0) {
                                model_37.BpmnModelHelper.SetAttributeValue(obj, "dataInputs", dataInputs);
                            }
                            var dataInputAssociations = new Array();
                            for (var item in this.dataInputAssociationDic) {
                                var element = this.dataInputAssociationDic[item].ConvertToJsonObject();
                                dataInputAssociations.push(element);
                            }
                            if (dataInputAssociations.length > 0) {
                                model_37.BpmnModelHelper.SetAttributeValue(obj, "dataInputAssociations", dataInputAssociations);
                            }
                            return obj;
                        };
                        ThrowEvent.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("dataInputs") && Array.isArray(obj.dataInputs)) {
                                for (var _i = 0, _a = obj.dataInputs; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var dataInput = new model_37.DataInput(this.Model);
                                    dataInput.LoadFromJsonObject(item);
                                    this.AddDataInput(dataInput);
                                }
                            }
                            if (obj.hasOwnProperty("dataInputAssociations") && Array.isArray(obj.dataInputAssociations)) {
                                for (var item in obj.dataInputAssociations) {
                                    var dataInputAssociation = new model_37.DataInputAssociation(this.Model);
                                    dataInputAssociation.LoadFromJsonObject(item);
                                    this.AddDataInputAssociation(dataInputAssociation);
                                }
                            }
                        };
                        ThrowEvent.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var item in this.dataInputDIc) {
                                this.dataInputDIc[item].Validate(errors);
                            }
                            for (var item in this.dataInputAssociationDic) {
                                this.dataInputAssociationDic[item].Validate(errors);
                            }
                        };
                        ThrowEvent.prototype.CheckVariableElement = function (variableElement) {
                            model_37.ValidateHelper.CheckVariableElement(variableElement, this, null, null);
                        };
                        return ThrowEvent;
                    }(model_37.Event));
                    model_37.ThrowEvent = ThrowEvent;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./ThrowEvent.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_38) {
                    var EndEvent = /** @class */ (function (_super) {
                        __extends(EndEvent, _super);
                        function EndEvent(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.EndEvent";
                            return _this;
                        }
                        //undo操作临时clone方法
                        EndEvent.prototype.clone = function () {
                            var endEvent = new EndEvent(this.Model);
                            endEvent.Name = this.Name;
                            return endEvent;
                        };
                        EndEvent.prototype.NewInstance = function () {
                            return new EndEvent(this.Model);
                        };
                        return EndEvent;
                    }(model_38.ThrowEvent));
                    model_38.EndEvent = EndEvent;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var EventHelper = /** @class */ (function () {
                        function EventHelper(callback, context) {
                            /** 回调函数 */
                            this.callback = null;
                            /** 上下文 */
                            this.context = null;
                            var self = this;
                            self.callback = callback;
                            self.context = context;
                        }
                        /**
                         * 发送通知
                         * @param args 不定参数
                         */
                        EventHelper.prototype.notify = function (name) {
                            var self = this;
                            self.callback.call(self.context, name);
                        };
                        /**
                         * 上下文比较
                         * @param context 上下文
                         */
                        EventHelper.prototype.compar = function (context) {
                            return context == this.context;
                        };
                        return EventHelper;
                    }());
                    model.EventHelper = EventHelper;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./FlowNode.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_39) {
                    var Gateway = /** @class */ (function (_super) {
                        __extends(Gateway, _super);
                        function Gateway(model) {
                            return _super.call(this, model) || this;
                        }
                        //undo操作临时clone方法
                        Gateway.prototype.clone = function () {
                            throw new Error("Method not implemented.");
                        };
                        return Gateway;
                    }(model_39.FlowNode));
                    model_39.Gateway = Gateway;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Gateway.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_40) {
                    var ExclusiveGateway = /** @class */ (function (_super) {
                        __extends(ExclusiveGateway, _super);
                        function ExclusiveGateway(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.ExclusiveGateway";
                            _this.IncomingGatewayType = model_40.GatewayType.Exclusive;
                            _this.OutgoingGatewayType = model_40.GatewayType.Exclusive;
                            return _this;
                        }
                        ExclusiveGateway.prototype.NewInstance = function () {
                            return new ExclusiveGateway(this.Model);
                        };
                        ExclusiveGateway.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Default = null;
                        };
                        ExclusiveGateway.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_40.BpmnModelHelper.SetAttributeValue(obj, "Default", this.Default);
                            return obj;
                        };
                        ExclusiveGateway.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Default = obj.Default;
                        };
                        return ExclusiveGateway;
                    }(model_40.Gateway));
                    model_40.ExclusiveGateway = ExclusiveGateway;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_41) {
                    var Expression = /** @class */ (function (_super) {
                        __extends(Expression, _super);
                        function Expression(model) {
                            var _this = _super.call(this, model) || this;
                            _this.MEXTAG = "bpmn.Expression";
                            return _this;
                        }
                        Expression.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.MexExpression = null;
                        };
                        Expression.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            if (this.MexExpression != null) {
                                this.MexExpression.MexTag = this.MEXTAG;
                                list.push(this.MexExpression);
                            }
                            return list;
                        };
                        Expression.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_6 = extensionElements; _i < extensionElements_6.length; _i++) {
                                var extensionElement = extensionElements_6[_i];
                                if (extensionElement instanceof model_41.MexExpression && extensionElement.MexTag == this.MEXTAG) {
                                    this.MexExpression = extensionElement;
                                }
                            }
                        };
                        Expression.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.MexExpression != null) {
                                this.MexExpression.Validate(errors);
                            }
                        };
                        return Expression;
                    }(model_41.BaseElement));
                    model_41.Expression = Expression;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BpmnModelElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_42) {
                    var ExtensionElement = /** @class */ (function (_super) {
                        __extends(ExtensionElement, _super);
                        function ExtensionElement(model) {
                            return _super.call(this, model) || this;
                        }
                        ExtensionElement.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.MexTag = null;
                        };
                        ExtensionElement.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_42.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                            model_42.BpmnModelHelper.SetAttributeValue(obj, "MexTag", this.MexTag);
                            return obj;
                        };
                        ExtensionElement.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.MexTag = obj.MexTag;
                        };
                        return ExtensionElement;
                    }(model_42.BpmnModelElement));
                    model_42.ExtensionElement = ExtensionElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Expression.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_43) {
                    var FormalExpression = /** @class */ (function (_super) {
                        __extends(FormalExpression, _super);
                        function FormalExpression(model) {
                            return _super.call(this, model) || this;
                        }
                        return FormalExpression;
                    }(model_43.Expression));
                    model_43.FormalExpression = FormalExpression;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_44) {
                    var ResourceRole = /** @class */ (function (_super) {
                        __extends(ResourceRole, _super);
                        function ResourceRole(model) {
                            return _super.call(this, model) || this;
                        }
                        ResourceRole.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Name = null;
                            this.ResourceAssignmentExpression = null;
                        };
                        ResourceRole.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_44.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                            model_44.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                            if (this.ResourceAssignmentExpression != null) {
                                model_44.BpmnModelHelper.SetAttributeValue(obj, "ResourceAssignmentExpression", this.ResourceAssignmentExpression.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        ResourceRole.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Name = obj.Name;
                            if (obj.hasOwnProperty("ResourceAssignmentExpression")) {
                                this.ResourceAssignmentExpression = new model_44.ResourceAssignmentExpression(this.Model);
                                this.ResourceAssignmentExpression.LoadFromJsonObject(obj.ResourceAssignmentExpression);
                            }
                        };
                        return ResourceRole;
                    }(model_44.BaseElement));
                    model_44.ResourceRole = ResourceRole;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./ResourceRole.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_45) {
                    var Performer = /** @class */ (function (_super) {
                        __extends(Performer, _super);
                        function Performer(model) {
                            return _super.call(this, model) || this;
                        }
                        return Performer;
                    }(model_45.ResourceRole));
                    model_45.Performer = Performer;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Performer.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_46) {
                    var HumanPerformer = /** @class */ (function (_super) {
                        __extends(HumanPerformer, _super);
                        function HumanPerformer(model) {
                            return _super.call(this, model) || this;
                        }
                        return HumanPerformer;
                    }(model_46.Performer));
                    model_46.HumanPerformer = HumanPerformer;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Gateway.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_47) {
                    var InclusiveGateway = /** @class */ (function (_super) {
                        __extends(InclusiveGateway, _super);
                        function InclusiveGateway(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.InclusiveGateway";
                            _this.IncomingGatewayType = model_47.GatewayType.Inclusive;
                            _this.OutgoingGatewayType = model_47.GatewayType.Inclusive;
                            return _this;
                        }
                        InclusiveGateway.prototype.NewInstance = function () {
                            return new InclusiveGateway(this.Model);
                        };
                        InclusiveGateway.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Default = null;
                        };
                        InclusiveGateway.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_47.BpmnModelHelper.SetAttributeValue(obj, "Default", this.Default);
                            return obj;
                        };
                        InclusiveGateway.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Default = obj.Default;
                        };
                        return InclusiveGateway;
                    }(model_47.Gateway));
                    model_47.InclusiveGateway = InclusiveGateway;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_48) {
                    var LoopCharacteristics = /** @class */ (function (_super) {
                        __extends(LoopCharacteristics, _super);
                        function LoopCharacteristics(model) {
                            return _super.call(this, model) || this;
                        }
                        return LoopCharacteristics;
                    }(model_48.BaseElement));
                    model_48.LoopCharacteristics = LoopCharacteristics;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../ExtensionElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_49) {
                    var MexExtensionElement = /** @class */ (function (_super) {
                        __extends(MexExtensionElement, _super);
                        function MexExtensionElement(model) {
                            return _super.call(this, model) || this;
                        }
                        return MexExtensionElement;
                    }(model_49.ExtensionElement));
                    model_49.MexExtensionElement = MexExtensionElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexExtensionElement.ts"/>
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_50) {
                    var MexExpression = /** @class */ (function (_super) {
                        __extends(MexExpression, _super);
                        function MexExpression(model) {
                            return _super.call(this, model) || this;
                        }
                        return MexExpression;
                    }(model_50.MexExtensionElement));
                    model_50.MexExpression = MexExpression;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexExpression.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_51) {
                    var ConstantExpression = /** @class */ (function (_super) {
                        __extends(ConstantExpression, _super);
                        function ConstantExpression(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.Mex.ConstantExpression";
                            return _this;
                        }
                        ConstantExpression.prototype.NewInstance = function () {
                            return new ConstantExpression(this.Model);
                        };
                        ConstantExpression.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Value = null;
                        };
                        ConstantExpression.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_51.BpmnModelHelper.SetAttributeValue(obj, "Value", this.Value);
                            return obj;
                        };
                        ConstantExpression.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Value = obj.Value;
                        };
                        return ConstantExpression;
                    }(model_51.MexExpression));
                    model_51.ConstantExpression = ConstantExpression;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../BpmnModelElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_52) {
                    var MexElement = /** @class */ (function (_super) {
                        __extends(MexElement, _super);
                        function MexElement(model) {
                            return _super.call(this, model) || this;
                        }
                        return MexElement;
                    }(model_52.BpmnModelElement));
                    model_52.MexElement = MexElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_53) {
                    var CustomType = /** @class */ (function (_super) {
                        __extends(CustomType, _super);
                        function CustomType(model) {
                            return _super.call(this, model) || this;
                        }
                        CustomType.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.AssemblyName = null;
                            this.TypeName = null;
                        };
                        CustomType.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_53.BpmnModelHelper.SetAttributeValue(obj, "AssemblyName", this.AssemblyName);
                            model_53.BpmnModelHelper.SetAttributeValue(obj, "TypeName", this.TypeName);
                            return obj;
                        };
                        CustomType.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.AssemblyName = obj.AssemblyName;
                            this.TypeName = obj.TypeName;
                        };
                        CustomType.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                        };
                        return CustomType;
                    }(model_53.MexElement));
                    model_53.CustomType = CustomType;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var ExpressionTypes;
                    (function (ExpressionTypes) {
                        ExpressionTypes["ConstantExpression"] = "ConstantExpression";
                        ExpressionTypes["VariableExpression"] = "VariableExpression";
                        ExpressionTypes["SemanticExpression"] = "SemanticExpression";
                    })(ExpressionTypes = model.ExpressionTypes || (model.ExpressionTypes = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var GatewayType;
                    (function (GatewayType) {
                        GatewayType["Exclusive"] = "Exclusive";
                        GatewayType["Inclusive"] = "Inclusive";
                        GatewayType["Parallel"] = "Parallel";
                    })(GatewayType = model.GatewayType || (model.GatewayType = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./IFlowElementContainer.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var BasicDataTypes;
                    (function (BasicDataTypes) {
                        BasicDataTypes["String"] = "String";
                        BasicDataTypes["Integer"] = "Integer";
                        BasicDataTypes["Decimal"] = "Decimal";
                        BasicDataTypes["Boolean"] = "Boolean";
                        BasicDataTypes["DateTime"] = "DateTime";
                    })(BasicDataTypes = model.BasicDataTypes || (model.BasicDataTypes = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_54) {
                    var BeSchema = /** @class */ (function (_super) {
                        __extends(BeSchema, _super);
                        function BeSchema(model) {
                            return _super.call(this, model) || this;
                        }
                        BeSchema.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.BeId = null;
                        };
                        BeSchema.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_54.BpmnModelHelper.SetAttributeValue(obj, "BeId", this.BeId);
                            return obj;
                        };
                        BeSchema.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.BeId = obj.BeId;
                        };
                        return BeSchema;
                    }(model_54.MexElement));
                    model_54.BeSchema = BeSchema;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexExtensionElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_55) {
                    var DataType = /** @class */ (function (_super) {
                        __extends(DataType, _super);
                        function DataType(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.Mex.DataType";
                            _this.BasicType = model_55.BasicDataTypes.String;
                            _this.Category = model_55.DataTypes.BasicType;
                            return _this;
                        }
                        DataType.prototype.NewInstance = function () {
                            return new DataType(this.Model);
                        };
                        DataType.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.BasicType = model_55.BasicDataTypes.String;
                            this.Category = model_55.DataTypes.BasicType;
                            this.Description = null;
                            this.InitialValue = null;
                            this.SchemaType = null;
                            this.CustomType = null;
                        };
                        DataType.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_55.BpmnModelHelper.SetAttributeValue(obj, "Category", this.Category);
                            model_55.BpmnModelHelper.SetAttributeValue(obj, "Description", this.Description);
                            switch (this.Category) {
                                case model_55.DataTypes.BasicType:
                                    {
                                        model_55.BpmnModelHelper.SetAttributeValue(obj, "BasicType", this.BasicType);
                                        if (this.InitialValue != null) {
                                            try {
                                                switch (this.BasicType) {
                                                    case model_55.BasicDataTypes.String:
                                                        model_55.BpmnModelHelper.SetAttributeValue(obj, "InitialValue", this.InitialValue);
                                                        break;
                                                    case model_55.BasicDataTypes.Integer:
                                                    case model_55.BasicDataTypes.Decimal:
                                                        model_55.BpmnModelHelper.SetAttributeValue(obj, "InitialValue", this.InitialValue);
                                                        break;
                                                    case model_55.BasicDataTypes.DateTime:
                                                        model_55.BpmnModelHelper.SetAttributeValue(obj, "InitialValue", this.DateFormat("yyyyMMddhhmmssS", this.InitialValue));
                                                        break;
                                                    case model_55.BasicDataTypes.Boolean:
                                                        model_55.BpmnModelHelper.SetAttributeValue(obj, "InitialValue", this.InitialValue);
                                                        break;
                                                    //case "ByteArray":
                                                    //    {
                                                    //        obj.InitialValue = <Array<any>>this.InitialValue;
                                                    //        break;
                                                    //    }
                                                    default:
                                                        throw new Error("Invalid argument!");
                                                }
                                            }
                                            catch (err) {
                                                throw new Error("\u65E0\u6CD5\u5C06\u7ED9\u5B9A\u7684\u503C\u8F6C\u6210 " + this.BasicType.toString() + " \u57FA\u672C\u6570\u636E\u7C7B\u578B.");
                                            }
                                        }
                                        break;
                                    }
                                case model_55.DataTypes.SchemaType:
                                    {
                                        if (this.SchemaType != null)
                                            obj.SchemaType = this.SchemaType.ConvertToJsonObject();
                                        if (this.InitialValue != null)
                                            obj.InitialValue = this.InitialValue;
                                        break;
                                    }
                                case model_55.DataTypes.CustomType:
                                    {
                                        if (this.CustomType != null)
                                            obj.CustomType = this.CustomType.ConvertToJsonObject();
                                        break;
                                    }
                                default:
                                    throw new Error("Invalid argument!");
                            }
                            return obj;
                        };
                        DataType.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Category = obj.Category;
                            this.Description = obj.Description;
                            switch (this.Category) {
                                case model_55.DataTypes.BasicType:
                                    {
                                        this.BasicType = obj.BasicType;
                                        if (obj.hasOwnProperty("InitialValue")) {
                                            switch (this.BasicType) {
                                                case model_55.BasicDataTypes.String:
                                                    this.InitialValue = obj.InitialValue;
                                                    break;
                                                case model_55.BasicDataTypes.Integer:
                                                case model_55.BasicDataTypes.Decimal:
                                                    this.InitialValue = obj.InitialValue;
                                                    break;
                                                case model_55.BasicDataTypes.DateTime:
                                                    //this.InitialValue = new Date((<number>obj.InitialValue - 621355968000000000) / 10000);
                                                    this.InitialValue = this.DateParse(obj.InitialValue);
                                                    break;
                                                case model_55.BasicDataTypes.Boolean:
                                                    this.InitialValue = obj.InitialValue;
                                                    break;
                                                //case "ByteArray":
                                                //    {
                                                //        this.InitialValue = <Array<any>>obj.InitialValue;
                                                //        break;
                                                //    }
                                                default:
                                                    throw new Error("Invalid argument!");
                                            }
                                        }
                                        break;
                                    }
                                case model_55.DataTypes.SchemaType:
                                    {
                                        if (obj.hasOwnProperty("SchemaType")) {
                                            this.SchemaType = new model_55.SchemaType(this.Model);
                                            this.SchemaType.LoadFromJsonObject(obj.SchemaType);
                                        }
                                        this.InitialValue = obj.InitialValue;
                                        break;
                                    }
                                case model_55.DataTypes.CustomType:
                                    {
                                        if (obj.hasOwnProperty("CustomType")) {
                                            this.CustomType = new model_55.CustomType(this.Model);
                                            this.CustomType.LoadFromJsonObject(obj.CustomType);
                                        }
                                        break;
                                    }
                                default:
                                    throw new Error("Invalid argument!");
                            }
                        };
                        DataType.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.Category == model_55.DataTypes.SchemaType) {
                                if (this.SchemaType == null) {
                                    var error = new model_55.ValidationError();
                                    error.Element = this;
                                    error.ErrorLevel = model_55.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "没有设定 Schema 数据类型";
                                    errors.push(error);
                                }
                                else {
                                    this.SchemaType.Validate(errors);
                                }
                            }
                        };
                        DataType.prototype.DateFormat = function (fmt, value) {
                            var o = {
                                "M+": value.getUTCMonth() + 1,
                                "d+": value.getUTCDate(),
                                "h+": value.getUTCHours(),
                                "m+": value.getUTCMinutes(),
                                "s+": value.getUTCSeconds(),
                                "q+": Math.floor((value.getMonth() + 3) / 3),
                                "S": value.getUTCMilliseconds()
                            };
                            if (/(y+)/.test(fmt))
                                fmt = fmt.replace(RegExp.$1, (value.getFullYear() + "").substr(4 - RegExp.$1.length));
                            for (var k in o)
                                if (new RegExp("(" + k + ")").test(fmt))
                                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                            return fmt;
                        };
                        DataType.prototype.DateParse = function (dt) {
                            var date = new Date();
                            date.setUTCFullYear(parseInt(dt.slice(0, 4)), parseInt(dt.slice(4, 6)) - 1, parseInt(dt.slice(6, 8)));
                            date.setUTCHours(parseInt(dt.slice(8, 10)), parseInt(dt.slice(10, 12)), parseInt(dt.slice(12, 14)), parseInt(dt.slice(14, 17)));
                            return date;
                        };
                        return DataType;
                    }(model_55.MexExtensionElement));
                    model_55.DataType = DataType;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var DataTypes;
                    (function (DataTypes) {
                        DataTypes["BasicType"] = "BasicType";
                        DataTypes["SchemaType"] = "SchemaType";
                        DataTypes["CustomType"] = "CustomType";
                        //DeclaredType,
                        //ExternalReference,
                        //RecordType,
                        //UnionType,
                        //EnumerationType,
                        //ArrayType,
                        //ListType,
                    })(DataTypes = model.DataTypes || (model.DataTypes = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexExtensionElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_56) {
                    var ExecutionListener = /** @class */ (function (_super) {
                        __extends(ExecutionListener, _super);
                        function ExecutionListener(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.Mex.ExecutionListener";
                            return _this;
                        }
                        ExecutionListener.prototype.NewInstance = function () {
                            return new ExecutionListener(this.Model);
                        };
                        ExecutionListener.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Class = null;
                            this.Event = null;
                            ;
                        };
                        ExecutionListener.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_56.BpmnModelHelper.SetAttributeValue(obj, "Event", this.Event);
                            model_56.BpmnModelHelper.SetAttributeValue(obj, "Class", this.Class);
                            return obj;
                        };
                        ExecutionListener.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Event = obj.Event;
                            this.Class = obj.Class;
                        };
                        return ExecutionListener;
                    }(model_56.MexExtensionElement));
                    model_56.ExecutionListener = ExecutionListener;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_57) {
                    var RectangularLine = /** @class */ (function (_super) {
                        __extends(RectangularLine, _super);
                        function RectangularLine(model) {
                            var _this = _super.call(this, model) || this;
                            _this.LineType = model_57.RectangularLineType.H2V;
                            return _this;
                        }
                        RectangularLine.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.LineType = model_57.RectangularLineType.H2V;
                        };
                        RectangularLine.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_57.BpmnModelHelper.SetAttributeValue(obj, "LineType", this.LineType);
                            return obj;
                        };
                        RectangularLine.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.LineType = obj.LineType;
                        };
                        return RectangularLine;
                    }(model_57.MexElement));
                    model_57.RectangularLine = RectangularLine;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var RectangularLineType;
                    (function (RectangularLineType) {
                        RectangularLineType["V2H"] = "V2H";
                        RectangularLineType["H2V"] = "H2V";
                    })(RectangularLineType = model.RectangularLineType || (model.RectangularLineType = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_58) {
                    var SchemaType = /** @class */ (function (_super) {
                        __extends(SchemaType, _super);
                        function SchemaType(model) {
                            var _this = _super.call(this, model) || this;
                            _this.Category = model_58.SchemaTypes.BeSchema;
                            return _this;
                        }
                        SchemaType.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Category = model_58.SchemaTypes.BeSchema;
                            this.BeSchema = null;
                            this.XmlSchema = null;
                        };
                        SchemaType.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_58.BpmnModelHelper.SetAttributeValue(obj, "Category", this.Category);
                            switch (this.Category) {
                                case model_58.SchemaTypes.BeSchema:
                                    {
                                        if (this.BeSchema) {
                                            model_58.BpmnModelHelper.SetAttributeValue(obj, "BeSchema", this.BeSchema.ConvertToJsonObject());
                                        }
                                        break;
                                    }
                                case model_58.SchemaTypes.XmlSchema:
                                    {
                                        if (this.XmlSchema) {
                                            model_58.BpmnModelHelper.SetAttributeValue(obj, "XmlSchema", this.XmlSchema.ConvertToJsonObject());
                                        }
                                        break;
                                    }
                                default:
                                    throw new Error("Invalid argument!");
                            }
                            return obj;
                        };
                        SchemaType.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Category = obj.Category;
                            switch (this.Category) {
                                case model_58.SchemaTypes.BeSchema:
                                    {
                                        if (obj.BeSchema) {
                                            this.BeSchema = new model_58.BeSchema(this.Model);
                                            this.BeSchema.LoadFromJsonObject(obj.BeSchema);
                                        }
                                        break;
                                    }
                                case model_58.SchemaTypes.XmlSchema:
                                    {
                                        if (obj.XmlSchema) {
                                            this.XmlSchema = new model_58.XmlSchema(this.Model);
                                            this.XmlSchema.LoadFromJsonObject(obj.XmlSchema);
                                        }
                                        break;
                                    }
                                default:
                                    throw new Error("Invalid argument!");
                            }
                        };
                        SchemaType.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            if (this.Category == model_58.SchemaTypes.BeSchema) {
                                if (this.BeSchema == null) {
                                    var error = new model_58.ValidationError();
                                    error.Element = this;
                                    error.ErrorLevel = model_58.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "没有设定 BeSchema";
                                    errors.push(error);
                                }
                                else {
                                    this.BeSchema.Validate(errors);
                                }
                            }
                            if (this.Category == model_58.SchemaTypes.XmlSchema) {
                                if (this.XmlSchema == null) {
                                    var error = new model_58.ValidationError();
                                    error.Element = this;
                                    error.ErrorLevel = model_58.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "没有设定 XmlSchema";
                                    errors.push(error);
                                }
                                else {
                                    this.XmlSchema.Validate(errors);
                                }
                            }
                        };
                        return SchemaType;
                    }(model_58.MexElement));
                    model_58.SchemaType = SchemaType;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var SchemaTypes;
                    (function (SchemaTypes) {
                        SchemaTypes["BeSchema"] = "BeSchema";
                        SchemaTypes["XmlSchema"] = "XmlSchema";
                    })(SchemaTypes = model.SchemaTypes || (model.SchemaTypes = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexExtensionElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_59) {
                    var SubProcessDataAssociations = /** @class */ (function (_super) {
                        __extends(SubProcessDataAssociations, _super);
                        function SubProcessDataAssociations(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.Mex.SubProcessDataAssociations";
                            _this.dataInputAssociationDic = {};
                            _this.dataOutputAssociationDic = {};
                            return _this;
                        }
                        SubProcessDataAssociations.prototype.NewInstance = function () {
                            return new SubProcessDataAssociations(this.Model);
                        };
                        SubProcessDataAssociations.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.dataInputAssociationDic = {};
                            this.dataOutputAssociationDic = {};
                        };
                        SubProcessDataAssociations.prototype.AddDataInputAssociation = function (association) {
                            model_59.ValidateHelper.CheckHasIdElement(association);
                            this.dataInputAssociationDic[association.Id] = association;
                            this.Model.AddHasIdElement(association);
                        };
                        SubProcessDataAssociations.prototype.GetDataInputAssociation = function (associationId) {
                            if (associationId == null)
                                return null;
                            if (this.dataInputAssociationDic.hasOwnProperty(associationId))
                                return this.dataInputAssociationDic[associationId];
                            return null;
                        };
                        SubProcessDataAssociations.prototype.GetDataInputAssociations = function () {
                            var dataInputAssociations = new Array();
                            for (var item in this.dataInputAssociationDic) {
                                dataInputAssociations.push(this.dataInputAssociationDic[item]);
                            }
                            return dataInputAssociations;
                        };
                        SubProcessDataAssociations.prototype.RemoveSubProcessDataInputAssociation = function (associationId) {
                            delete this.dataInputAssociationDic[associationId];
                        };
                        SubProcessDataAssociations.prototype.AddDataOutputAssociation = function (association) {
                            model_59.ValidateHelper.CheckHasIdElement(association);
                            this.dataOutputAssociationDic[association.Id] = association;
                            this.Model.AddHasIdElement(association);
                        };
                        SubProcessDataAssociations.prototype.GetDataOutputAssociation = function (associationId) {
                            if (associationId == null)
                                return null;
                            if (this.dataOutputAssociationDic.hasOwnProperty(associationId))
                                return this.dataOutputAssociationDic[associationId];
                            return null;
                        };
                        SubProcessDataAssociations.prototype.GetDataOutputAssociations = function () {
                            var dataOutputAssociations = new Array();
                            for (var item in this.dataOutputAssociationDic) {
                                dataOutputAssociations.push(this.dataOutputAssociationDic[item]);
                            }
                            return dataOutputAssociations;
                        };
                        SubProcessDataAssociations.prototype.RemoveDataOutputAssociation = function (associationId) {
                            delete this.dataOutputAssociationDic[associationId];
                        };
                        SubProcessDataAssociations.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            var dataInputAssociations = new Array();
                            for (var item in this.dataInputAssociationDic) {
                                dataInputAssociations.push(this.dataInputAssociationDic[item].ConvertToJsonObject());
                            }
                            if (dataInputAssociations.length > 0) {
                                model_59.BpmnModelHelper.SetAttributeValue(obj, "dataInputAssociations", dataInputAssociations);
                            }
                            var dataOutputAssociations = new Array();
                            for (var item in this.dataOutputAssociationDic) {
                                dataOutputAssociations.push(this.dataOutputAssociationDic[item].ConvertToJsonObject());
                            }
                            if (dataOutputAssociations.length > 0) {
                                model_59.BpmnModelHelper.SetAttributeValue(obj, "dataOutputAssociations", dataOutputAssociations);
                            }
                            return obj;
                        };
                        SubProcessDataAssociations.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("dataInputAssociations") && Array.isArray(obj.dataInputAssociations)) {
                                for (var _i = 0, _a = obj.dataInputAssociations; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var dataInputAssociation = new model_59.DataInputAssociation(this.Model);
                                    dataInputAssociation.LoadFromJsonObject(item);
                                    this.AddDataInputAssociation(dataInputAssociation);
                                }
                            }
                            if (obj.hasOwnProperty("dataOutputAssociations") && Array.isArray(obj.dataOutputAssociations)) {
                                for (var _b = 0, _c = obj.dataOutputAssociations; _b < _c.length; _b++) {
                                    var item = _c[_b];
                                    var dataOutputAssociation = new model_59.DataOutputAssociation(this.Model);
                                    dataOutputAssociation.LoadFromJsonObject(item);
                                    this.AddDataOutputAssociation(dataOutputAssociation);
                                }
                            }
                        };
                        return SubProcessDataAssociations;
                    }(model_59.MexExtensionElement));
                    model_59.SubProcessDataAssociations = SubProcessDataAssociations;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexExpression.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_60) {
                    var VariableExpression = /** @class */ (function (_super) {
                        __extends(VariableExpression, _super);
                        function VariableExpression(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.Mex.VariableExpression";
                            _this.Direction = model_60.VariableExpressionDirection.ActivityDataInputAssociation;
                            return _this;
                        }
                        VariableExpression.prototype.NewInstance = function () {
                            return new VariableExpression(this.Model);
                        };
                        VariableExpression.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Direction = null;
                            this.SourceRef = null;
                        };
                        VariableExpression.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_60.BpmnModelHelper.SetAttributeValue(obj, "SourceRef", this.SourceRef);
                            model_60.BpmnModelHelper.SetAttributeValue(obj, "Direction", this.Direction);
                            return obj;
                        };
                        VariableExpression.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.SourceRef = obj.SourceRef;
                            this.Direction = obj.Direction;
                        };
                        return VariableExpression;
                    }(model_60.MexExpression));
                    model_60.VariableExpression = VariableExpression;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var VariableExpressionDirection;
                    (function (VariableExpressionDirection) {
                        VariableExpressionDirection["ActivityDataInputAssociation"] = "ActivityDataInputAssociation";
                        VariableExpressionDirection["ActivityDataOutputAssociation"] = "ActivityDataOutputAssociation";
                        VariableExpressionDirection["SubProcessDataInputAssociation"] = "SubProcessDataInputAssociation";
                        VariableExpressionDirection["SubProcessDataOutputAssociation"] = "SubProcessDataOutputAssociation";
                        VariableExpressionDirection["TransitionCondition"] = "TransitionCondition";
                    })(VariableExpressionDirection = model.VariableExpressionDirection || (model.VariableExpressionDirection = {}));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./MexElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_61) {
                    var XmlSchema = /** @class */ (function (_super) {
                        __extends(XmlSchema, _super);
                        function XmlSchema(model) {
                            return _super.call(this, model) || this;
                        }
                        XmlSchema.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Xsd = null;
                        };
                        XmlSchema.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_61.BpmnModelHelper.SetAttributeValue(obj, "Xsd", this.Xsd);
                            return obj;
                        };
                        XmlSchema.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Xsd = obj.Xsd;
                        };
                        return XmlSchema;
                    }(model_61.MexElement));
                    model_61.XmlSchema = XmlSchema;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./LoopCharacteristics.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_62) {
                    var MultiInstanceLoopCharacteristics = /** @class */ (function (_super) {
                        __extends(MultiInstanceLoopCharacteristics, _super);
                        function MultiInstanceLoopCharacteristics(model) {
                            return _super.call(this, model) || this;
                        }
                        return MultiInstanceLoopCharacteristics;
                    }(model_62.LoopCharacteristics));
                    model_62.MultiInstanceLoopCharacteristics = MultiInstanceLoopCharacteristics;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="../BpmnModelElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_63) {
                    var OmgdcElement = /** @class */ (function (_super) {
                        __extends(OmgdcElement, _super);
                        function OmgdcElement(model) {
                            return _super.call(this, model) || this;
                        }
                        return OmgdcElement;
                    }(model_63.BpmnModelElement));
                    model_63.OmgdcElement = OmgdcElement;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./OmgdcElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_64) {
                    var Bounds = /** @class */ (function (_super) {
                        __extends(Bounds, _super);
                        function Bounds(model) {
                            return _super.call(this, model) || this;
                        }
                        Bounds.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Height = 0;
                            this.Width = 0;
                            this.X = 0;
                            this.Y = 0;
                        };
                        Bounds.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_64.BpmnModelHelper.SetAttributeValue(obj, "Height", this.Height);
                            model_64.BpmnModelHelper.SetAttributeValue(obj, "Width", this.Width);
                            model_64.BpmnModelHelper.SetAttributeValue(obj, "X", this.X);
                            model_64.BpmnModelHelper.SetAttributeValue(obj, "Y", this.Y);
                            return obj;
                        };
                        Bounds.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Height = obj.Height;
                            this.Width = obj.Width;
                            this.X = obj.X;
                            this.Y = obj.Y;
                        };
                        return Bounds;
                    }(model_64.OmgdcElement));
                    model_64.Bounds = Bounds;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./OmgdcElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_65) {
                    var Font = /** @class */ (function (_super) {
                        __extends(Font, _super);
                        function Font(model) {
                            var _this = _super.call(this, model) || this;
                            _this.IsBold = false;
                            _this.IsItalic = false;
                            _this.IsStrikeThrough = false;
                            _this.IsUnderline = false;
                            return _this;
                        }
                        Font.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.IsBold = false;
                            this.IsItalic = false;
                            this.IsStrikeThrough = false;
                            this.IsUnderline = false;
                            this.Name = null;
                            this.Size = 0;
                        };
                        Font.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_65.BpmnModelHelper.SetAttributeValue(obj, "IsBold", this.IsBold);
                            model_65.BpmnModelHelper.SetAttributeValue(obj, "IsItalic", this.IsItalic);
                            model_65.BpmnModelHelper.SetAttributeValue(obj, "IsStrikeThrough", this.IsStrikeThrough);
                            model_65.BpmnModelHelper.SetAttributeValue(obj, "IsUnderline", this.IsUnderline);
                            model_65.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                            model_65.BpmnModelHelper.SetAttributeValue(obj, "Size", this.Size);
                            return obj;
                        };
                        Font.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.IsBold = obj.IsBold;
                            this.IsItalic = obj.IsItalic;
                            this.IsStrikeThrough = obj.IsStrikeThrough;
                            this.IsUnderline = obj.IsUnderline;
                            this.Name = obj.Name;
                            this.Size = obj.Size;
                        };
                        return Font;
                    }(model_65.OmgdcElement));
                    model_65.Font = Font;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./OmgdcElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_66) {
                    var Point = /** @class */ (function (_super) {
                        __extends(Point, _super);
                        function Point(model) {
                            return _super.call(this, model) || this;
                        }
                        Point.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.X = 0;
                            this.Y = 0;
                        };
                        Point.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_66.BpmnModelHelper.SetAttributeValue(obj, "X", this.X);
                            model_66.BpmnModelHelper.SetAttributeValue(obj, "Y", this.Y);
                            return obj;
                        };
                        Point.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.X = obj.X;
                            this.Y = obj.Y;
                        };
                        return Point;
                    }(model_66.OmgdcElement));
                    model_66.Point = Point;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Gateway.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_67) {
                    var ParallelGateway = /** @class */ (function (_super) {
                        __extends(ParallelGateway, _super);
                        function ParallelGateway(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.ParallelGateway";
                            _this.IncomingGatewayType = model_67.GatewayType.Parallel;
                            _this.OutgoingGatewayType = model_67.GatewayType.Parallel;
                            return _this;
                        }
                        ParallelGateway.prototype.NewInstance = function () {
                            return new ParallelGateway(this.Model);
                        };
                        return ParallelGateway;
                    }(model_67.Gateway));
                    model_67.ParallelGateway = ParallelGateway;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Performer.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_68) {
                    var PotentialOwner = /** @class */ (function (_super) {
                        __extends(PotentialOwner, _super);
                        function PotentialOwner(model) {
                            return _super.call(this, model) || this;
                        }
                        return PotentialOwner;
                    }(model_68.Performer));
                    model_68.PotentialOwner = PotentialOwner;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./CallableElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_69) {
                    var Process = /** @class */ (function (_super) {
                        __extends(Process, _super);
                        function Process(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.Process";
                            _this.flowElementsDic = {};
                            _this.resourceRoleDIc = {};
                            _this.executionListeners = new Array();
                            _this.extensionElements = new Array();
                            _this.MEXTAG = "bpmn.Process";
                            return _this;
                        }
                        Process.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Key = null;
                            this.flowElementsDic = {};
                            this.resourceRoleDIc = {};
                            this.executionListeners = new Array();
                            this.extensionElements = new Array();
                        };
                        Process.prototype.NewInstance = function () {
                            return new Process(this.Model);
                        };
                        Process.prototype.AddDataObject = function (dataObject) {
                            this.CheckVariableElement(dataObject);
                            this.InnerAddFlowElement(dataObject);
                        };
                        Process.prototype.GetDataObject = function (dataObjectId) {
                            if (dataObjectId == null)
                                return null;
                            if (this.flowElementsDic.hasOwnProperty(dataObjectId))
                                return this.flowElementsDic[dataObjectId];
                            return null;
                        };
                        Process.prototype.GetDataObjects = function () {
                            var dataObjects = new Array();
                            for (var item in this.flowElementsDic) {
                                var obj = this.flowElementsDic[item];
                                if (obj != null)
                                    dataObjects.push(obj);
                            }
                            return dataObjects;
                        };
                        Process.prototype.RemoveDataObject = function (dataObjectId) {
                            this.RemoveFlowElement(dataObjectId);
                        };
                        Process.prototype.AddFlowElement = function (element) {
                            if (element instanceof model_69.DataObject)
                                throw new Error("请使用 AddDataObjcet 方法添加流程变量");
                            model_69.ValidateHelper.CheckHasIdElement(element);
                            this.InnerAddFlowElement(element);
                        };
                        Process.prototype.GetFlowElement = function (elementId) {
                            if (elementId == null)
                                return null;
                            if (this.flowElementsDic.hasOwnProperty(elementId))
                                return this.flowElementsDic[elementId];
                            return null;
                        };
                        Process.prototype.GetFlowElements = function () {
                            return this.flowElementsDic;
                        };
                        Process.prototype.RemoveFlowElement = function (elementId) {
                            var element = this.GetFlowElement(elementId);
                            if (element == null)
                                return;
                            if (element instanceof model_69.SequenceFlow) {
                                this.RemoveSequenceFlow(element);
                            }
                            if (element instanceof model_69.FlowNode) {
                                this.RemoveFlowNode(element);
                            }
                            if (element instanceof model_69.DataObject) {
                                this.InnerRemoveDataObject(element);
                            }
                            delete this.flowElementsDic[elementId];
                        };
                        Process.prototype.GetExecutionListeners = function () {
                            return this.executionListeners;
                        };
                        Process.prototype.AddResourceRole = function (item) {
                            this.resourceRoleDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        Process.prototype.GetResourceRole = function (resourceRoleId) {
                            if (resourceRoleId == null)
                                return null;
                            if (this.resourceRoleDIc.hasOwnProperty(resourceRoleId))
                                return this.resourceRoleDIc[resourceRoleId];
                            return null;
                        };
                        Process.prototype.GetResourceRoles = function () {
                            var resourceRoles = new Array();
                            for (var item in this.resourceRoleDIc) {
                                resourceRoles.push(this.resourceRoleDIc[item]);
                            }
                            return resourceRoles;
                        };
                        Process.prototype.RemoveResourceRole = function (resourceRoleId) {
                            delete this.resourceRoleDIc[resourceRoleId];
                        };
                        Process.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_69.BpmnModelHelper.SetAttributeValue(obj, "Key", this.Key);
                            var flowElements = [];
                            for (var elementId in this.flowElementsDic) {
                                var element = this.flowElementsDic[elementId].ConvertToJsonObject();
                                flowElements.push(element);
                            }
                            model_69.BpmnModelHelper.SetAttributeValue(obj, "flowElements", flowElements);
                            var resourceRoles = new Array();
                            for (var item in this.resourceRoleDIc) {
                                resourceRoles.push(this.resourceRoleDIc[item].ConvertToJsonObject());
                            }
                            if (resourceRoles.length > 0) {
                                model_69.BpmnModelHelper.SetAttributeValue(obj, "resourceRoles", resourceRoles);
                            }
                            return obj;
                        };
                        Process.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.Key = obj.Key;
                            if (obj.hasOwnProperty("flowElements") && Array.isArray(obj.flowElements)) {
                                for (var _i = 0, _a = obj.flowElements; _i < _a.length; _i++) {
                                    var elementObj = _a[_i];
                                    var element = model_69.BpmnModelHelper.GetElementType(elementObj.ClrTypeID);
                                    if (element == null)
                                        continue;
                                    element.Model = this.Model;
                                    element.LoadFromJsonObject(elementObj);
                                    this.InnerAddFlowElement(element);
                                }
                            }
                            if (obj.hasOwnProperty("resourceRoles") && Array.isArray(obj.resourceRoles)) {
                                for (var _b = 0, _c = obj.resourceRoles; _b < _c.length; _b++) {
                                    var item = _c[_b];
                                    var resourceRole = model_69.BpmnModelHelper.GetElementType(item.ClrTypeID);
                                    if (resourceRole == null)
                                        continue;
                                    resourceRole.LoadFromJsonObject(item);
                                    this.AddResourceRole(resourceRole);
                                }
                            }
                        };
                        Process.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            for (var _i = 0, _a = this.executionListeners; _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.MexTag = this.MEXTAG;
                                list.push(item);
                            }
                            for (var _b = 0, _c = this.extensionElements; _b < _c.length; _b++) {
                                var item = _c[_b];
                                item.MexTag = this.MEXTAG;
                                list.push(item);
                            }
                            return list;
                        };
                        Process.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_7 = extensionElements; _i < extensionElements_7.length; _i++) {
                                var extensionElement = extensionElements_7[_i];
                                if ((extensionElement instanceof model_69.ExecutionListener) && extensionElement.MexTag == this.MEXTAG) {
                                    this.executionListeners.push(extensionElement);
                                }
                                else if (extensionElement.MexTag == this.MEXTAG) {
                                    this.extensionElements.push(extensionElement);
                                }
                            }
                        };
                        Process.prototype.GetExtensionElements = function () {
                            return this.extensionElements;
                        };
                        Process.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var _i = 0, _a = this.executionListeners; _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.Validate(errors);
                            }
                            for (var item in this.flowElementsDic) {
                                this.flowElementsDic[item].Validate(errors);
                            }
                            model_69.ValidateHelper.ValidateProcess(this, errors);
                        };
                        Process.prototype.CheckVariableElement = function (variableElement) {
                            _super.prototype.CheckVariableElement.call(this, variableElement);
                            model_69.ValidateHelper.CheckVariableElement(variableElement, null, null, this);
                        };
                        Process.prototype.InnerAddFlowElement = function (element) {
                            this.flowElementsDic[element.Id] = element;
                            this.Model.AddHasIdElement(element);
                        };
                        Process.prototype.RemoveSequenceFlow = function (element) {
                        };
                        Process.prototype.InnerRemoveDataObject = function (element) {
                        };
                        Process.prototype.RemoveFlowNode = function (element) {
                            var list = new Array();
                            for (var item in this.GetFlowElements()) {
                                var itemElement = this.GetFlowElements()[item];
                                if (itemElement == null)
                                    continue;
                                if (itemElement.SourceRef == element.Id || itemElement.TargetRef == element.Id)
                                    list.push(itemElement);
                            }
                            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                                var item = list_1[_i];
                                delete this.flowElementsDic[item.Id];
                            }
                        };
                        return Process;
                    }(model_69.CallableElement));
                    model_69.Process = Process;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var RadixConvert = /** @class */ (function () {
                        function RadixConvert() {
                        }
                        RadixConvert.Decimal2String = function (value) {
                            var result = "";
                            do {
                                var index = value % this.exponent;
                                result = this.keys[index] + result;
                                value = (value - index) / this.exponent;
                            } while (value > 0);
                            return result;
                        };
                        RadixConvert.Pow = function (baseNo, x) {
                            var value = 1;
                            while (x > 0) {
                                value = value * baseNo;
                                x--;
                            }
                            return value;
                        };
                        RadixConvert.exponent = 34;
                        RadixConvert.keys = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
                        return RadixConvert;
                    }());
                    model.RadixConvert = RadixConvert;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./FlowElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_70) {
                    var SequenceFlow = /** @class */ (function (_super) {
                        __extends(SequenceFlow, _super);
                        function SequenceFlow(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.SequenceFlow";
                            _this.executionListeners = new Array();
                            _this.MEXTAG = "bpmn.SequenceFlow";
                            return _this;
                        }
                        //undo操作临时clone方法
                        SequenceFlow.prototype.clone = function () {
                            var sequenceFlow = new SequenceFlow(this.Model);
                            sequenceFlow.Name = this.Name;
                            return sequenceFlow;
                        };
                        SequenceFlow.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.ConditionExpression = null;
                            this.SkipExpression = null;
                            this.SourceRef = null;
                            this.TargetRef = null;
                            this.executionListeners = new Array();
                        };
                        SequenceFlow.prototype.NewInstance = function () {
                            return new SequenceFlow(this.Model);
                        };
                        SequenceFlow.prototype.GetExecutionListeners = function () {
                            return this.executionListeners;
                        };
                        SequenceFlow.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_70.BpmnModelHelper.SetAttributeValue(obj, "SkipExpression", this.SkipExpression);
                            model_70.BpmnModelHelper.SetAttributeValue(obj, "SourceRef", this.SourceRef);
                            model_70.BpmnModelHelper.SetAttributeValue(obj, "TargetRef", this.TargetRef);
                            if (this.ConditionExpression != null) {
                                model_70.BpmnModelHelper.SetAttributeValue(obj, "ConditionExpression", this.ConditionExpression.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        SequenceFlow.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            this.SkipExpression = obj.SkipExpression;
                            this.SourceRef = obj.SourceRef;
                            this.TargetRef = obj.TargetRef;
                            if (obj.hasOwnProperty("ConditionExpression")) {
                                this.ConditionExpression = new model_70.Expression(this.Model);
                                this.ConditionExpression.LoadFromJsonObject(obj.ConditionExpression);
                            }
                        };
                        SequenceFlow.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            for (var _i = 0, _a = this.executionListeners; _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.MexTag = this.MEXTAG;
                                list.push(item);
                            }
                            return list;
                        };
                        SequenceFlow.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_8 = extensionElements; _i < extensionElements_8.length; _i++) {
                                var extensionElement = extensionElements_8[_i];
                                if (extensionElement instanceof model_70.ExecutionListener && extensionElement.MexTag == this.MEXTAG) {
                                    this.executionListeners.push(extensionElement);
                                }
                            }
                        };
                        SequenceFlow.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var _i = 0, _a = this.executionListeners; _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.Validate(errors);
                            }
                        };
                        return SequenceFlow;
                    }(model_70.FlowElement));
                    model_70.SequenceFlow = SequenceFlow;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./CatchEvent.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_71) {
                    var StartEvent = /** @class */ (function (_super) {
                        __extends(StartEvent, _super);
                        function StartEvent(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.StartEvent";
                            return _this;
                        }
                        //undo操作临时clone方法
                        StartEvent.prototype.clone = function () {
                            var startEvent = new StartEvent(this.Model);
                            startEvent.Name = this.Name;
                            return startEvent;
                        };
                        StartEvent.prototype.NewInstance = function () {
                            return new StartEvent(this.Model);
                        };
                        return StartEvent;
                    }(model_71.CatchEvent));
                    model_71.StartEvent = StartEvent;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Activity.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_72) {
                    var SubProcess = /** @class */ (function (_super) {
                        __extends(SubProcess, _super);
                        function SubProcess(model) {
                            var _this = _super.call(this, model) || this;
                            _this.ClrTypeID = "bpmn.SubProcess";
                            _this.extensionElements = new Array();
                            _this.flowElementsDic = {};
                            _this.SubProcessMEXTAG = "bpmn.SubProcess";
                            return _this;
                        }
                        //undo操作临时clone方法
                        SubProcess.prototype.clone = function () {
                            var subProcess = new SubProcess(this.Model);
                            subProcess.Name = this.Name;
                            return subProcess;
                        };
                        SubProcess.prototype.NewInstance = function () {
                            return new SubProcess(this.Model);
                        };
                        SubProcess.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.extensionElements = [];
                            this.flowElementsDic = {};
                        };
                        SubProcess.prototype.AddDataObject = function (dataObject) {
                            this.CheckVariableElement(dataObject);
                            this.InnerAddFlowElement(dataObject);
                        };
                        SubProcess.prototype.GetDataObject = function (dataObjectId) {
                            if (dataObjectId == null)
                                return null;
                            if (this.flowElementsDic.hasOwnProperty(dataObjectId))
                                return this.flowElementsDic[dataObjectId];
                            return null;
                        };
                        SubProcess.prototype.GetDataObjects = function () {
                            var list = new Array();
                            for (var item in this.flowElementsDic) {
                                var obj = this.flowElementsDic[item];
                                if (obj != null)
                                    list.push(obj);
                            }
                            return list;
                        };
                        SubProcess.prototype.RemoveDataObject = function (dataObjectId) {
                            this.RemoveFlowElement(dataObjectId);
                        };
                        SubProcess.prototype.AddFlowElement = function (element) {
                            if (element instanceof model_72.DataObject)
                                throw new Error("请使用 AddDataObjcet 方法添加流程变量");
                            model_72.ValidateHelper.CheckHasIdElement(element);
                            this.InnerAddFlowElement(element);
                        };
                        SubProcess.prototype.GetFlowElement = function (elementId) {
                            if (elementId == null)
                                return null;
                            if (this.flowElementsDic.hasOwnProperty(elementId))
                                return this.flowElementsDic[elementId];
                            return null;
                        };
                        SubProcess.prototype.GetFlowElements = function () {
                            return this.flowElementsDic;
                        };
                        SubProcess.prototype.RemoveFlowElement = function (elementId) {
                            var element = this.GetFlowElement(elementId);
                            if (element == null)
                                return;
                            if (element instanceof model_72.SequenceFlow) {
                                this.RemoveSequenceFlow(element);
                            }
                            if (element instanceof model_72.FlowNode) {
                                this.RemoveFlowNode(element);
                            }
                            if (element instanceof model_72.DataObject) {
                                this.InnerRemoveDataObject(element);
                            }
                            delete this.flowElementsDic[elementId];
                        };
                        SubProcess.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            var flowElements = [];
                            for (var elementId in this.flowElementsDic) {
                                var element = this.flowElementsDic[elementId].ConvertToJsonObject();
                                flowElements.push(element);
                            }
                            model_72.BpmnModelHelper.SetAttributeValue(obj, "flowElements", flowElements);
                            return obj;
                        };
                        SubProcess.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("flowElements") && Array.isArray(obj.FlowElements)) {
                                for (var _i = 0, _a = obj.FlowElements; _i < _a.length; _i++) {
                                    var elementObj = _a[_i];
                                    var element = model_72.BpmnModelHelper.GetElementType(elementObj.ClrTypeID);
                                    if (element == null)
                                        continue;
                                    element.Model = this.Model;
                                    element.LoadFromJsonObject(elementObj);
                                    this.InnerAddFlowElement(element);
                                }
                            }
                        };
                        SubProcess.prototype.GetExtensionElements4ConvertTo = function () {
                            var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                            for (var _i = 0, _a = this.extensionElements; _i < _a.length; _i++) {
                                var item = _a[_i];
                                item.MexTag = this.SubProcessMEXTAG;
                                list.push(item);
                            }
                            return list;
                        };
                        SubProcess.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                            _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                            for (var _i = 0, extensionElements_9 = extensionElements; _i < extensionElements_9.length; _i++) {
                                var extensionElement = extensionElements_9[_i];
                                if (extensionElement.MexTag == this.SubProcessMEXTAG) {
                                    this.extensionElements.push(extensionElement);
                                }
                            }
                        };
                        SubProcess.prototype.GetExtensionElements = function () {
                            return this.extensionElements;
                        };
                        SubProcess.prototype.Validate = function (errors) {
                            _super.prototype.Validate.call(this, errors);
                            for (var item in this.flowElementsDic) {
                                this.flowElementsDic[item].Validate(errors);
                            }
                            model_72.ValidateHelper.ValidateProcess(this, errors);
                        };
                        SubProcess.prototype.CheckVariableElement = function (variableElement) {
                            _super.prototype.CheckVariableElement.call(this, variableElement);
                            model_72.ValidateHelper.CheckVariableElement(variableElement, null, null, this);
                        };
                        SubProcess.prototype.RemoveSequenceFlow = function (element) { };
                        SubProcess.prototype.InnerRemoveDataObject = function (element) { };
                        SubProcess.prototype.RemoveFlowNode = function (element) {
                            var list = new Array();
                            for (var item in this.GetFlowElements()) {
                                var itemElement = this.GetFlowElements()[item];
                                if (itemElement == null)
                                    continue;
                                if (itemElement.SourceRef == element.Id || itemElement.TargetRef == element.Id)
                                    list.push(itemElement);
                            }
                            for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                                var item = list_2[_i];
                                delete this.flowElementsDic[item.Id];
                            }
                        };
                        SubProcess.prototype.InnerAddFlowElement = function (element) {
                            this.flowElementsDic[element.Id] = element;
                            this.Model.AddHasIdElement(element);
                        };
                        return SubProcess;
                    }(model_72.Activity));
                    model_72.SubProcess = SubProcess;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./SequenceFlow.ts"/>
///<reference path="./StartEvent.ts"/>
///<reference path="./SubProcess.ts"/>
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var registerElementTypeModel = new model.BpmnModel();
                    model.BpmnModelHelper.RegisterElementType(new model.Process(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.SequenceFlow(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.DataObject(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.SubProcess(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.CallActivity(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.EndEvent(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.StartEvent(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.ExclusiveGateway(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.InclusiveGateway(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.ParallelGateway(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.DataType(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.BPMNPlane(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.BPMNShape(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.BPMNLabel(registerElementTypeModel));
                    model.BpmnModelHelper.RegisterElementType(new model.BPMNEdge(registerElementTypeModel));
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_73) {
                    var Rendering = /** @class */ (function (_super) {
                        __extends(Rendering, _super);
                        function Rendering(model) {
                            return _super.call(this, model) || this;
                        }
                        Rendering.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            model_73.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                            return obj;
                        };
                        return Rendering;
                    }(model_73.BaseElement));
                    model_73.Rendering = Rendering;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./BaseElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_74) {
                    var ResourceAssignmentExpression = /** @class */ (function (_super) {
                        __extends(ResourceAssignmentExpression, _super);
                        function ResourceAssignmentExpression(model) {
                            return _super.call(this, model) || this;
                        }
                        ResourceAssignmentExpression.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.Expression = null;
                        };
                        ResourceAssignmentExpression.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            if (this.Expression != null) {
                                model_74.BpmnModelHelper.SetAttributeValue(obj, "Expression", this.Expression.ConvertToJsonObject());
                            }
                            return obj;
                        };
                        ResourceAssignmentExpression.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("Expression")) {
                                this.Expression = new model_74.Expression(this.Model);
                                this.Expression.LoadFromJsonObject(obj.Expression);
                            }
                        };
                        return ResourceAssignmentExpression;
                    }(model_74.BaseElement));
                    model_74.ResourceAssignmentExpression = ResourceAssignmentExpression;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Activity.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_75) {
                    var Task = /** @class */ (function (_super) {
                        __extends(Task, _super);
                        function Task(model) {
                            return _super.call(this, model) || this;
                        }
                        return Task;
                    }(model_75.Activity));
                    model_75.Task = Task;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Task.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_76) {
                    var ServiceTask = /** @class */ (function (_super) {
                        __extends(ServiceTask, _super);
                        function ServiceTask(model) {
                            return _super.call(this, model) || this;
                        }
                        return ServiceTask;
                    }(model_76.Task));
                    model_76.ServiceTask = ServiceTask;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
///<reference path="./Task.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model_77) {
                    var UserTask = /** @class */ (function (_super) {
                        __extends(UserTask, _super);
                        function UserTask(model) {
                            var _this = _super.call(this, model) || this;
                            _this.renderingDIc = {};
                            return _this;
                        }
                        UserTask.prototype.ResetBeforeLoadFrom = function () {
                            _super.prototype.ResetBeforeLoadFrom.call(this);
                            this.renderingDIc = {};
                        };
                        UserTask.prototype.AddRendering = function (item) {
                            this.renderingDIc[item.Id] = item;
                            this.Model.AddHasIdElement(item);
                        };
                        UserTask.prototype.GetRendering = function (renderingId) {
                            if (renderingId == null)
                                return null;
                            if (this.renderingDIc.hasOwnProperty(renderingId))
                                return this.renderingDIc[renderingId];
                            return null;
                        };
                        UserTask.prototype.GetRenderings = function () {
                            var renderings = new Array();
                            for (var item in this.renderingDIc) {
                                renderings.push(this.renderingDIc[item]);
                            }
                            return renderings;
                        };
                        UserTask.prototype.RemoveRendering = function (renderingId) {
                            delete this.renderingDIc[renderingId];
                        };
                        UserTask.prototype.ConvertToJsonObject = function () {
                            var obj = _super.prototype.ConvertToJsonObject.call(this);
                            var renderings = new Array();
                            for (var item in this.renderingDIc) {
                                renderings.push(this.renderingDIc[item].ConvertToJsonObject());
                            }
                            if (renderings.length > 0) {
                                model_77.BpmnModelHelper.SetAttributeValue(obj, "renderings", renderings);
                            }
                            return obj;
                        };
                        UserTask.prototype.LoadFromJsonObject = function (obj) {
                            _super.prototype.LoadFromJsonObject.call(this, obj);
                            if (obj.hasOwnProperty("renderings") && Array.isArray(obj.renderings)) {
                                for (var _i = 0, _a = obj.renderings; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var rendering = model_77.BpmnModelHelper.GetElementType(item.ClrTypeID);
                                    if (rendering == null)
                                        continue;
                                    rendering.LoadFromJsonObject(item);
                                    this.AddRendering(rendering);
                                }
                            }
                        };
                        return UserTask;
                    }(model_77.Task));
                    model_77.UserTask = UserTask;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var ValidateHelper = /** @class */ (function () {
                        function ValidateHelper() {
                        }
                        ValidateHelper.CheckHasIdElement = function (element) {
                            if (element == null)
                                throw new Error("流程元素不能为 null.");
                            if (element.Id == null)
                                throw new Error("流程元素 id 不能为 null.");
                            if (ValidateHelper.IsMatchVariableNameRules(element.Id) == false)
                                throw new Error("流程元素 id 只能包含字母、数字和下划线，且不能以数字开头。");
                            if (element.Model.GetHasIdElement(element.Id) != null)
                                throw new Error("\u5DF2\u7ECF\u5B58\u5728 id \u4E3A " + element.Id + " \u7684\u6D41\u7A0B\u5143\u7D20\u3002");
                        };
                        ValidateHelper.IsMatchVariableNameRules = function (str) {
                            var Regx = /^[a-zA-Z_][a-zA-Z_0-9]{0,}/;
                            if (Regx.test(str)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        };
                        ValidateHelper.ValidateProcess = function (process, errors) {
                            this.ValidateStartEvents(process, errors);
                            this.ValidateEndEvents(process, errors);
                            this.ValidateSequenceFlow(process, errors);
                            this.ValidateFlowNode(process, errors);
                            for (var item in process.GetFlowElements()) {
                                //let associationContainer: IDataInputAssociationContainer = process.GetFlowElements()[item] as IDataInputAssociationContainer;
                                //if (associationContainer == null)
                                //    continue;
                                //this.ValidateIDataInputAssociationContainer(process, errors, associationContainer);
                            }
                            for (var item in process.GetFlowElements()) {
                                //let associationContainer: IDataOutputAssociationContainer = process.GetFlowElements()[item] as IDataOutputAssociationContainer;
                                //if (associationContainer == null)
                                //    continue;
                                //this.ValidateIDataOutputAssociationContainer(process, errors, associationContainer);
                            }
                        };
                        ValidateHelper.CheckVariableElement = function (variableElement, dataInputContainer, dataOutputContainer, dataObjectContainer) {
                            this.CheckHasIdElement(variableElement);
                            if (variableElement.Name == null)
                                throw new Error("变量名、参数名不能为 null.");
                            if (ValidateHelper.IsMatchVariableNameRules(variableElement.Name) == false)
                                throw new Error("变量名、参数名只能包含字母、数字和下划线，且不能以数字开头。");
                            if (dataInputContainer != null) {
                                for (var _i = 0, _a = dataInputContainer.GetDataInputs(); _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    if (variableElement.Name == item.Name)
                                        throw new Error("\u5DF2\u5B58\u5728\u540D\u4E3A " + variableElement.Name + " \u7684\u8F93\u5165\u53C2\u6570");
                                }
                            }
                            if (dataOutputContainer != null) {
                                for (var _b = 0, _c = dataOutputContainer.GetDataOutputs(); _b < _c.length; _b++) {
                                    var item = _c[_b];
                                    if (variableElement.Name == item.Name)
                                        throw new Error("\u5DF2\u5B58\u5728\u540D\u4E3A " + variableElement.Name + " \u7684\u8F93\u51FA\u53C2\u6570");
                                }
                            }
                            if (dataObjectContainer != null) {
                                for (var _d = 0, _e = dataObjectContainer.GetDataObjects(); _d < _e.length; _d++) {
                                    var item = _e[_d];
                                    if (variableElement.Name == item.Name)
                                        throw new Error("\u5DF2\u5B58\u5728\u540D\u4E3A " + variableElement.Name + " \u7684\u6D41\u7A0B\u53D8\u91CF");
                                }
                            }
                        };
                        ValidateHelper.ValidateEndEvents = function (process, errors) {
                            var endEvents = new Array();
                            for (var item in process.GetFlowElements()) {
                                var endEvent = process.GetFlowElements()[item];
                                if (endEvent != null)
                                    endEvents.push(endEvent);
                            }
                            if (endEvents.length == 0) {
                                var error = new model.ValidationError();
                                //error.Element = process as BpmnModelElement;
                                error.ErrorLevel = model.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "未设置结束活动";
                                errors.push(error);
                            }
                        };
                        ValidateHelper.ValidateFlowNode = function (process, errors) {
                            for (var item in process.GetFlowElements()) {
                                var flowNode = process.GetFlowElements()[item];
                                if (flowNode == null)
                                    continue;
                                var incomings = new Array();
                                var outgoings = new Array();
                                for (var item2 in process.GetFlowElements()) {
                                    var sequenceFlow = process.GetFlowElements()[item2];
                                    if (sequenceFlow == null)
                                        continue;
                                    if (sequenceFlow.SourceRef == flowNode.Id)
                                        outgoings.push(sequenceFlow);
                                    if (sequenceFlow.TargetRef == flowNode.Id)
                                        incomings.push(sequenceFlow);
                                }
                                if (incomings.length == 0 && (flowNode.constructor == model.StartEvent) == false) {
                                    var error = new model.ValidationError();
                                    error.Element = flowNode;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "没有入口连线";
                                    errors.push(error);
                                }
                                if (incomings.length > 0 && (flowNode.constructor == model.StartEvent) == true) {
                                    var error = new model.ValidationError();
                                    error.Element = flowNode;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "开始活动不能有入口连线";
                                    errors.push(error);
                                }
                                if (outgoings.length == 0 && (flowNode.constructor == model.EndEvent) == false) {
                                    var error = new model.ValidationError();
                                    error.Element = flowNode;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "没有出口连线";
                                    errors.push(error);
                                }
                                if (outgoings.length > 0 && (flowNode.constructor == model.EndEvent) == true) {
                                    if (outgoings.length > 0 && (flowNode.constructor == model.EndEvent) == true) {
                                        var error = new model.ValidationError();
                                        error.Element = flowNode;
                                        error.ErrorLevel = model.ValidationLevel.$_Error;
                                        error.ErrorCode = "";
                                        error.ErrorMessage = "结束活动不能有出口连线";
                                        errors.push(error);
                                    }
                                }
                            }
                        };
                        ValidateHelper.ValidateIDataInputAssociationContainer = function (process, errors, associationContainer) {
                            for (var _i = 0, _a = associationContainer.GetDataInputAssociations(); _i < _a.length; _i++) {
                                var association = _a[_i];
                                var targetRefDataInputContainer = associationContainer;
                                if (targetRefDataInputContainer == null) {
                                    var error = new model.ValidationError();
                                    error.Element = association;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "id \u4E3A " + associationContainer.Id + " \u7684\u5143\u7D20\u6CA1\u6709\u5B9E\u73B0\u63A5\u53E3 IDataInputContainer\u3002";
                                    errors.push();
                                }
                                if (targetRefDataInputContainer.GetDataInput(association.TargetRef) == null) {
                                    var error = new model.ValidationError();
                                    error.Element = association;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "\u6CA1\u6709\u627E\u5230 id \u4E3A " + association.TargetRef + " \u7684\u53C2\u6570\u3002";
                                    errors.push(error);
                                }
                            }
                            for (var _b = 0, _c = associationContainer.GetDataInputs(); _b < _c.length; _b++) {
                                var dataInput = _c[_b];
                                if (dataInput.IsRequired == false)
                                    continue;
                                var findAssociation = null;
                                for (var _d = 0, _e = associationContainer.GetDataInputAssociations(); _d < _e.length; _d++) {
                                    var association = _e[_d];
                                    if (association.TargetRef == dataInput.Id) {
                                        findAssociation = association;
                                        break;
                                    }
                                }
                                if (findAssociation == null) {
                                    var error = new model.ValidationError();
                                    //error.Element = associationContainer as BpmnModelElement;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "\u6CA1\u6709\u627E\u5230 id \u4E3A " + dataInput.Id + " \uFF0C\u540D\u79F0\u4E3A " + dataInput.Name + " \u7684\u8F93\u5165\u53C2\u6570\u7684\u8D4B\u503C\u8868\u8FBE\u5F0F\u3002";
                                    errors.push(error);
                                }
                            }
                        };
                        ValidateHelper.ValidateIDataOutputAssociationContainer = function (process, errors, associationContainer) {
                            for (var _i = 0, _a = associationContainer.GetDataOutputAssociations(); _i < _a.length; _i++) {
                                var association = _a[_i];
                                var SourceRefDataOutputContainer = associationContainer;
                                if (SourceRefDataOutputContainer == null) {
                                    var error = new model.ValidationError();
                                    error.Element = association;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "id \u4E3A " + associationContainer.Id + " \u7684\u5143\u7D20\u6CA1\u6709\u5B9E\u73B0\u63A5\u53E3 IDataOutputContainer\u3002";
                                    errors.push();
                                }
                                if (process.GetDataObject(association.TargetRef) == null &&
                                    process.GetDataInput(association.TargetRef) == null &&
                                    process.GetDataOutput(association.TargetRef) == null) {
                                    var error = new model.ValidationError();
                                    error.Element = association;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "\u6CA1\u6709\u627E\u5230 id \u4E3A " + association.TargetRef + " \u7684\u53C2\u6570\u6216\u6D41\u7A0B\u53D8\u91CF\u3002";
                                    errors.push();
                                }
                            }
                        };
                        ValidateHelper.ValidateSequenceFlow = function (process, errors) {
                            for (var item in process.GetFlowElements()) {
                                var sequenceFlow = process.GetFlowElements()[item];
                                if (sequenceFlow == null)
                                    continue;
                                if (sequenceFlow.SourceRef == null) {
                                    var error = new model.ValidationError();
                                    error.Element = sequenceFlow;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "没有设定连线的来源";
                                    errors.push(error);
                                }
                                else {
                                    if (process.GetFlowElement(sequenceFlow.SourceRef) == null) {
                                        var error = new model.ValidationError();
                                        error.Element = sequenceFlow;
                                        error.ErrorLevel = model.ValidationLevel.$_Error;
                                        error.ErrorCode = "";
                                        error.ErrorMessage = "\u8FDE\u7EBF\u7684\u6765\u6E90\u8BBE\u7F6E\u6709\u8BEF\uFF0C\u6CA1\u6709\u627E\u5230 id \u4E3A " + sequenceFlow.SourceRef + " \u7684\u6D3B\u52A8";
                                        errors.push(error);
                                    }
                                }
                                if (sequenceFlow.TargetRef == null) {
                                    var error = new model.ValidationError();
                                    error.Element = sequenceFlow;
                                    error.ErrorLevel = model.ValidationLevel.$_Error;
                                    error.ErrorCode = "";
                                    error.ErrorMessage = "没有设定连线的目标";
                                    errors.push(error);
                                }
                                else {
                                    if (process.GetFlowElement(sequenceFlow.TargetRef) == null) {
                                        var error = new model.ValidationError();
                                        error.Element = sequenceFlow;
                                        error.ErrorLevel = model.ValidationLevel.$_Error;
                                        error.ErrorCode = "";
                                        error.ErrorMessage = "\u8FDE\u7EBF\u7684\u76EE\u6807\u8BBE\u7F6E\u6709\u8BEF\uFF0C\u6CA1\u6709\u627E\u5230 id \u4E3A " + sequenceFlow.TargetRef + " \u7684\u6D3B\u52A8";
                                        errors.push(error);
                                    }
                                }
                            }
                        };
                        ValidateHelper.ValidateStartEvents = function (process, errors) {
                            var startEvents = new Array();
                            for (var item in process.GetFlowElements()) {
                                var startEvent = process.GetFlowElements()[item];
                                if (startEvent != null)
                                    startEvents.push(startEvent);
                            }
                            if (startEvents.length == 0) {
                                var error = new model.ValidationError();
                                //error.Element = process as BpmnModelElement;
                                error.ErrorLevel = model.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "未设置开始活动";
                                errors.push(error);
                            }
                            else if (startEvents.length > 1) {
                                var error = new model.ValidationError();
                                //error.Element = process as BpmnModelElement;
                                error.ErrorLevel = model.ValidationLevel.$_Error;
                                error.ErrorCode = "";
                                error.ErrorMessage = "只能设置1个开始活动";
                                errors.push(error);
                            }
                        };
                        return ValidateHelper;
                    }());
                    model.ValidateHelper = ValidateHelper;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var ValidationError = /** @class */ (function () {
                        function ValidationError() {
                        }
                        return ValidationError;
                    }());
                    model.ValidationError = ValidationError;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var pmf;
        (function (pmf) {
            var bpmn;
            (function (bpmn) {
                var model;
                (function (model) {
                    var ValidationLevel = /** @class */ (function () {
                        function ValidationLevel() {
                        }
                        ValidationLevel.$_Error = "Error";
                        ValidationLevel.$_Warning = "Warning";
                        return ValidationLevel;
                    }());
                    model.ValidationLevel = ValidationLevel;
                })(model = bpmn.model || (bpmn.model = {}));
            })(bpmn = pmf.bpmn || (pmf.bpmn = {}));
        })(pmf = gsp.pmf || (gsp.pmf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
//# sourceMappingURL=inspur.gsp.pmf.bpmn.js.map