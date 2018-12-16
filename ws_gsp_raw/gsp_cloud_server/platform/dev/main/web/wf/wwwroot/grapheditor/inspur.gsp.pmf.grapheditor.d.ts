declare namespace inspur.gsp.pmf.grapheditor {
    class Action extends mxEventSource {
        constructor(key: string, enabled?: boolean);
        shortcutKeyCode: number;
        shortcutControlKey: boolean;
        shortcutShiftKey: boolean;
        shortcutAltKey: boolean;
        shortcut: string;
        readonly key: string;
        private enabled;
        private toggleAction;
        isEnabled(): boolean;
        isToggleAction(): boolean;
        isSelected(editorUi: EditorUi): boolean;
        setEnabled(value: boolean): void;
        getShortcut(): string;
        setToggleAction(value: boolean): void;
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    enum ActionKeys {
        pmf_save = "pmf_save",
        pmf_export = "pmf_export",
        pmf_undo = "pmf_undo",
        pmf_redo = "pmf_redo",
        pmf_cut = "pmf_cut",
        pmf_copy = "pmf_copy",
        pmf_paste = "pmf_paste",
        pmf_pasteHere = "pmf_pasteHere",
        pmf_delete = "pmf_delete",
        pmf_deleteAll = "pmf_deleteAll",
        pmf_duplicate = "pmf_duplicate",
        pmf_selectVertices = "pmf_selectVertices",
        pmf_selectEdges = "pmf_selectEdges",
        pmf_selectAll = "pmf_selectAll",
        pmf_selectNone = "pmf_selectNone",
        pmf_lockUnlock = "pmf_lockUnlock",
        pmf_formatPanel = "pmf_formatPanel",
        pmf_outline = "pmf_outline",
        pmf_layers = "pmf_layers",
        pmf_pageView = "pmf_pageView",
        pmf_grid = "pmf_grid",
        pmf_connectionArrows = "pmf_connectionArrows",
        pmf_connectionPoints = "pmf_connectionPoints",
        pmf_resetView = "pmf_resetView",
        pmf_zoomIn = "pmf_zoomIn",
        pmf_zoomOut = "pmf_zoomOut",
        pmf_view_25 = "pmf_view_25",
        pmf_view_50 = "pmf_view_50",
        pmf_view_75 = "pmf_view_75",
        pmf_view_100 = "pmf_view_100",
        pmf_view_125 = "pmf_view_125",
        pmf_view_150 = "pmf_view_150",
        pmf_view_200 = "pmf_view_200",
        pmf_view_300 = "pmf_view_300",
        pmf_view_400 = "pmf_view_400",
        pmf_fitWindow = "pmf_fitWindow",
        pmf_fitPage = "pmf_fitPage",
        pmf_fitTwoPages = "pmf_fitTwoPages",
        pmf_fitPageWidth = "pmf_fitPageWidth",
        pmf_customZoom = "pmf_customZoom",
        pmf_toFront = "pmf_toFront",
        pmf_toBack = "pmf_toBack",
        pmf_leftAlign = "pmf_leftAlign",
        pmf_center = "pmf_center",
        pmf_rightAlign = "pmf_rightAlign",
        pmf_topAlign = "pmf_topAlign",
        pmf_middle = "pmf_middle",
        pmf_bottomAlign = "pmf_bottomAlign",
        pmf_horizontal = "pmf_horizontal",
        pmf_vertical = "pmf_vertical",
        pmf_clearWaypoints = "pmf_clearWaypoints",
        pmf_autosize = "pmf_autosize",
        pmf_help = "pmf_help",
        pmf_about = "pmf_about",
        pmf_viewModelXml = "pmf_viewModelXml",
        pmf_release = "pmf_release"
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class Actions {
        constructor(editorUi: EditorUi);
        editorUi: EditorUi;
        private actionDic;
        addAction(action: Action): void;
        getAction(key: string): Action;
        private addShortcut;
        private init;
        private addCutAction;
        private addCopyAction;
        private addPasteAction;
        private addDeleteAction;
        private addDuplicateAction;
        private addSelectVerticesAction;
        private addSelectEdgesAction;
        private addSelectAllAction;
        private addSelectNoneAction;
        private addLockUnlockAction;
        private addToFrontAction;
        private addToBackAction;
        private addAlignLeftAction;
        private addAlignCenterAction;
        private addAlignRightAction;
        private addAlignTopAction;
        private addAlignMiddleAction;
        private addAlignBottomAction;
        private addDistributeHorizontalAction;
        private addDistributeVerticalAction;
        private addClearWaypointsAction;
        private addAutosizeAction;
        private isUnlocked;
        private isVertexSelected;
        private isEdgeSelected;
        private isAlignActionEnabled;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AboutAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AlignBottomAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AlignCenterAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AlignLeftAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AlignMiddleAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AlignRightAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AlignTopAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class AutosizeAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ClearWaypointsAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class CopyAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class CutAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class DeleteAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class DistributeHorizontalAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class DistributeVerticalAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class DuplicateAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class FitWindowAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class FormatPanelAction extends Action {
        constructor();
        isSelected(ui: EditorUi): boolean;
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class HelpAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class LockUnlockAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class OutlineAction extends Action {
        constructor();
        private outlineWindow;
        isSelected(ui: EditorUi): boolean;
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class PasteAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class RedoAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ReleaseAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ResetViewAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class SaveAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class SelectAllAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class SelectEdgesAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class SelectNoneAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class SelectVerticesAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToBackAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToFrontAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class UndoAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_100_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_125_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_150_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_200_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_25_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_300_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_400_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_50_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class View_75_Action extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ViewGridAction extends Action {
        constructor();
        isSelected(ui: EditorUi): boolean;
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ViewModelXmlAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ZoomInAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ZoomOutAction extends Action {
        constructor();
        execute(ui?: EditorUi, evt?: PointerEvent | KeyboardEvent): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class BpmnMxGraphAdaper {
        constructor();
        private static diagramDicForFlowElement;
        private static resourceRoleIds;
        static setBpmnModelIntoGraph(graph: Graph, bpmnModelJsonStr?: string): void;
        static flowElement2MxGraphCell(flowElementsMap: {
            [key: string]: bpmn.model.FlowElement;
        }): mxCell[];
        private static createVertex;
        private static addDiagramDicForFlowElement;
        private static setBpmnElementGetShowablePropertyMethod;
        private static setVertexStyle;
        private static createEdge;
        static setBpmnElementIntoMxEdge(graph: Graph, cells: mxCell[]): void;
        static setBpmnElementIntoMxCell(graph: Graph, cells: mxCell[]): void;
        private static judgeBpmnElement;
        GraphModel2BpmnModel(graphModel: mxGraphModel): void;
        private static setEdgeFromFlow;
        private static setCellBounds;
        static setExtensionElements(bpmnModel: bpmn.model.BpmnModel, bpmnElment: bpmn.model.BpmnElement, obj: object): void;
        private static test;
        static saveIntoMetadata(graph: Graph): void;
        static removeMxCell(graph: Graph, cells: mxCell[]): void;
        private static setParticipantElements;
        private static getResourceRoleIds;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class PropertyAdapter {
        constructor();
        static getPropertyConfigAndData(graph: Graph, cell?: mxCell): object;
        private static getCellPropertyConfigAndData;
        private static getStartActivityProperty;
        private static getEndActivityProperty;
        private static getSequenceFlowActivityProperty;
        private static getManualActivityProperty;
        private static getUserActivityProperty;
        private static getProcessPropertyConfigAndData;
        private static setProcessPropertyData;
        private static setManualActPropertyData;
        private static setUserActPropertyData;
        private static getProcessHeadProperties;
        private static getUsualPropertyConfigFromVertex;
        private static getUsualPropertyConfigFromEdge;
        static getCustomPropertyConfig(cell: mxCell, propertyData: object): PropertyEntity[];
        private static getShowablePropertyWithoutGetMothod;
        private static judgePropertyType;
        static updateCellProperty(graph: Graph, obj: object, cell: mxCell): void;
        static updateProcessProperty(graph: Graph, obj: object): void;
        static updateVertexGeometry(graph: Graph, cell: mxCell): void;
        static updateEdgeGeometry(graph: Graph, cell: mxCell): void;
    }
    class ElementPropertyConfig {
        categoryId: string;
        categoryName: string;
        properties: PropertyEntity[];
        setPropertyRelates?(propertyID: any, propertyValue: any): any;
    }
    class PropertyEntity {
        propertyID: string;
        propertyName: string;
        propertyType: "string" | "number" | "boolean" | "select" | "modal";
        description?: string;
        defaultValue?: any;
        readonly?: boolean;
        visible?: boolean;
        iterator?: KeyMap[];
        editor?: any;
        converter?: TypeConverter;
    }
    interface KeyMap {
        key: string;
        value: any;
    }
    interface TypeConverter {
        convertTo(data: any): string;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class CellEditor extends mxCellEditor {
        constructor(graph: Graph);
        isContentEditing(): boolean;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    abstract class Init {
        static IMAGE_PATH: string;
        static STYLE_PATH: string;
        static MAX_REQUEST_SIZE: number;
        static SAVE_URL: string;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class EditorUi extends mxEventSource {
        static originalNoForeignObject: boolean;
        static ctrlKey: string;
        static checkmarkImage: string;
        static transparentImage: string;
        static pageCounter: number;
        constructor(defaultToolStrip?: ToolStrip, defaultToolBox?: ToolBox);
        container: HTMLElement;
        defaultToolStrip: ToolStrip;
        defaultToolBox: ToolBox;
        graph: Graph;
        actions: Actions;
        keyHandler: KeyHandler;
        menubarEnabled: boolean;
        footerEnabled: boolean;
        formatEnabled: boolean;
        splitSize: number;
        private menubarContainer;
        private toolbarContainer;
        private sidebarContainer;
        private sidebarSplit;
        private diagramContainer;
        private formatContainer;
        private footerContainer;
        private toolbar;
        private sidebar;
        private format;
        private menubarHeight;
        private toolbarHeight;
        private footerHeight;
        private formatWidth;
        private sidebarSplitPosition;
        private sidebarSplitSize;
        private destroyFunctions;
        private layersDialog;
        private currentMenuElt;
        private currentMenu;
        private gestureHandler;
        show(): void;
        resetToolbar(toolStrip: ToolStrip): void;
        resetToolBox(toolBox: ToolBox): void;
        setCurrentMenu(menu: mxPopupMenu, elt: HTMLAnchorElement): void;
        resetCurrentMenu(): void;
        hideCurrentMenu(): void;
        refresh(sizeDidChange?: boolean): void;
        resetScrollbars(): void;
        private createGraph;
        setConnectionPorts(graph: Graph): void;
        private createDivs;
        private createUi;
        private createFormat;
        private createDiv;
        private sidebarSplitOnChange;
        private addSplitHandler;
        private createFooter;
        private createSidebar;
        private createToolbar;
        private destroy;
        menus: Menus;
        private createMenus;
        getGraphXml(ignoreSelection?: boolean): any;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    const IFRAMEID: string;
    class Format {
        container: HTMLDivElement;
        editorUi: EditorUi;
        graph: Graph;
        selectionState: any;
        panels: any[];
        constructor(editorUi: EditorUi, container: HTMLDivElement);
        private click;
        private update;
        private connect;
        private remove;
        private addMessageListener;
        private updateCellValue;
        private init;
        private testEvent;
        private test;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class Graph extends mxGraph {
        constructor(container?: HTMLDivElement, model?: mxGraphModel, renderHint?: renderingHint, stylesheet?: mxStylesheet, themes?: Element);
        background: string;
        private scrollTileSize;
        private autoTranslate;
        private themes;
        view: GraphView;
        cellEditor: CellEditor;
        connectionArrowsEnabled: boolean;
        createGraphView(): mxGraphView;
        createCellEditor(): CellEditor;
        sizeDidChange(): void;
        getPreferredPageSize(bounds: any, width: any, height: any): mxRectangle;
        loadStylesheet(): void;
        getPagePadding(): mxPoint;
        getPageSize(): mxRectangle;
        getPageLayout(): mxRectangle;
        getScrollTileSize(): mxRectangle;
        distributeCells(horizontal: boolean, cells?: mxCell[]): mxCell[];
        currentEdgeStyle: {
            [key: string]: string;
        };
        zapGremlins(text: string): string;
        convertValueToString(cell: mxCell): string;
        encodeCells(cells: mxCell[]): any;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class GraphView extends mxGraphView {
        constructor(graph: Graph);
        x0: number;
        y0: number;
        private gridSteps;
        private minGridSize;
        private gridImage;
        private gridColor;
        validateBackgroundImage(): void;
        validate(cell?: mxCell): void;
        getBackgroundPageBounds(): any;
        private createSvgGrid;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class KeyHandler extends mxKeyHandler {
        constructor(graph: Graph);
        private altKeys;
        private ctrlAltKeys;
        private shiftAltKeys;
        private ctrlShiftAltKeys;
        isControlDown(evt: KeyboardEvent): boolean;
        getFunction(evt: KeyboardEvent): any;
        bindAltKey(code: number, funct: Function): void;
        bindCtrlAltKey(code: number, funct: Function): void;
        bindShiftAltKey(code: number, funct: Function): void;
        bindCtrlShiftAltKey(code: number, funct: Function): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class Menu extends mxPopupMenu {
        addItem(title: string, image: string, funct: any, parent: any, iconCls: any, enabled?: boolean): any;
    }
    class Menus {
        edgeStyleChange(menu: Menu, label: string, keys: string[], values: string[], sprite: any, parent: HTMLElement, reset: boolean): HTMLElement;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class OutlineWindow {
        window: mxWindow;
        constructor(editorUi: EditorUi, x: number, y: number, w: number, h: number);
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    enum PmfEvents {
        ResizeGraphView = "ResizeGraphView",
        SelectionModelChanged = "SelectionModelChanged",
        LockedChanged = "LockedChanged"
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    enum ResourceKeys {
        pmf_file = "file",
        pmf_save = "save",
        pmf_export = "export",
        pmf_edit = "edit",
        pmf_undo = "undo",
        pmf_redo = "redo",
        pmf_cut = "cut",
        pmf_copy = "copy",
        pmf_paste = "paste",
        pmf_pasteHere = "pasteHere",
        pmf_delete = "delete",
        pmf_deleteAll = "deleteAll",
        pmf_duplicate = "duplicate",
        pmf_selectVertices = "selectVertices",
        pmf_selectEdges = "selectEdges",
        pmf_selectAll = "selectAll",
        pmf_selectNone = "selectNone",
        pmf_lockUnlock = "lockUnlock",
        pmf_view = "view",
        pmf_formatPanel = "formatPanel",
        pmf_outline = "outline",
        pmf_layers = "layers",
        pmf_pageView = "pageView",
        pmf_grid = "grid",
        pmf_connectionArrows = "connectionArrows",
        pmf_connectionPoints = "connectionPoints",
        pmf_resetView = "resetView",
        pmf_zoom = "zoom",
        pmf_zoomIn = "zoomIn",
        pmf_zoomOut = "zoomOut",
        pmf_fitWindow = "fitWindow",
        pmf_fitPage = "fitPage",
        pmf_fitTwoPages = "fitTwoPages",
        pmf_fitPageWidth = "fitPageWidth",
        pmf_customZoom = "custom",
        pmf_arrange = "arrange",
        pmf_toFront = "toFront",
        pmf_toBack = "toBack",
        pmf_align = "align",
        pmf_leftAlign = "leftAlign",
        pmf_center = "center",
        pmf_rightAlign = "rightAlign",
        pmf_topAlign = "topAlign",
        pmf_middle = "middle",
        pmf_bottomAlign = "bottomAlign",
        pmf_distribute = "distribute",
        pmf_horizontal = "horizontal",
        pmf_vertical = "vertical",
        pmf_clearWaypoints = "clearWaypoints",
        pmf_autosize = "autosize",
        pmf_help = "help",
        pmf_about = "about",
        pmf_mainMenu = "pmf_mainMenu",
        pmf_viewModelXml = "pmf_viewModelXml"
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class PlusShape extends mxRectangleShape {
        constructor(rectangle?: mxRectangle);
        isHtmlAllowed(): boolean;
        paintForeground(c: any, x: number, y: number, w: number, h: number): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    abstract class Shape {
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    const POST_MESSAGE_URL: string;
    class Sidebar {
        constructor(editorUi: EditorUi, container: HTMLDivElement);
        private editorUi;
        private container;
        private sidebarTitleSize;
        private sidebarTitles;
        private enableTooltips;
        private showTooltips;
        private tooltip;
        private tooltipDelay;
        private tooltipImageSrc;
        private tooltipImage;
        private tooltipBorder;
        private maxTooltipWidth;
        private maxTooltipHeight;
        private tooltipTitles;
        private tooltipTitle;
        private thread;
        private currentElt;
        private palettes;
        private taglist;
        private collapsedImage;
        private expandedImage;
        private thumbWidth;
        private thumbHeight;
        private thumbPadding;
        private thumbBorder;
        private graph;
        private graph2;
        private defaultImageHeight;
        private defaultImageWidth;
        reset(toolBox: ToolBox): void;
        destroy(): void;
        addGeneralPalette(expand: boolean): void;
        private hideTooltip;
        private createTemporaryGraph;
        private addPaletteFunctions;
        private addPalette;
        private createPaletteTitle;
        private addFoldingHandler;
        private createVertexTemplateEntryFromToolBoxItem;
        private createVertexTemplateEntry;
        private createVertexTemplate;
        private createVertexTemplateFromCells;
        private createEdgeTemplateEntry;
        private createEdgeTemplate;
        private createEdgeTemplateFromCells;
        private addEntry;
        private createItem;
        private createThumb;
        private showTooltip;
        private createDragPreview;
        private createDragSource;
        private addImagePalette;
        private addBpmnPalette;
        private getTagsForStencil;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class Toolbar {
        constructor(editorUi: EditorUi, container: HTMLDivElement);
        editorUi: EditorUi;
        container: HTMLDivElement;
        dropdownImage: string;
        edgeShapeMenu: HTMLElement;
        edgeStyleMenu: HTMLElement;
        reset(toolStrip: ToolStrip): void;
        destroy(): void;
        private buildToolbarButton;
        private addPopupMenuItems;
        private createToolbarButton;
        private createToolbarButtonImage;
        private createToolbarButtonText;
        private createToolbarButtonDropdownImage;
        private addToolStripSeparator;
        appendSeparator(c?: HTMLDivElement): HTMLDivElement;
        private addShortcut;
        private addToolStripButtonHandler;
        private addToolStripDropDownButtonHandler;
        private initEdgeStyleMenu;
        private addMenuFunction;
        private addMenuFunctionInContainer;
        private createLabel;
        private createButton;
        private initElement;
        private addEnabledState;
        private addMenuHandler;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolBox {
        constructor();
        groups: List<ToolBoxGroup>;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class DefaultToolBox extends ToolBox {
        constructor();
        init(): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolBoxGroup {
        constructor();
        items: List<ToolBoxItem>;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolBoxItem {
        constructor(style?: string, width?: number, height?: number, value?: string, title?: string, showLabel?: boolean, showTitle?: boolean, tags?: string);
        style: string;
        width: number;
        height: number;
        value: string;
        title: string;
        showLabel: boolean;
        showTitle: boolean;
        tags: string;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolStrip {
        constructor();
        items: List<ToolStripButton | ToolStripDropDownButton | ToolStripSeparator>;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class DefaultToolStrip extends ToolStrip {
        constructor();
        private init;
        mainMenu: ToolStripDropDownButton;
        private init_mainMenu;
        btn_release: ToolStripButton;
        private init_btn_release;
        mainMenu_file: ToolStripDropDownMenuItem;
        private init_mainMenu_file;
        mainMenu_file_save: ToolStripMenuItem;
        private init_mainMenu_file_save;
        mainMenu_file_export: ToolStripMenuItem;
        private init_mainMenu_file_export;
        mainMenu_edit: ToolStripDropDownMenuItem;
        private init_mainMenu_edit;
        mainMenu_edit_undo: ToolStripMenuItem;
        private init_mainMenu_edit_undo;
        mainMenu_edit_redo: ToolStripMenuItem;
        private init_mainMenu_edit_redo;
        mainMenu_edit_cut: ToolStripMenuItem;
        private init_mainMenu_edit_cut;
        mainMenu_edit_copy: ToolStripMenuItem;
        private init_mainMenu_edit_copy;
        mainMenu_edit_paste: ToolStripMenuItem;
        private init_mainMenu_edit_paste;
        mainMenu_edit_delete: ToolStripMenuItem;
        private init_mainMenu_edit_delete;
        mainMenu_edit_duplicate: ToolStripMenuItem;
        private init_mainMenu_edit_duplicate;
        mainMenu_edit_selectVertices: ToolStripMenuItem;
        private init_mainMenu_edit_selectVertices;
        mainMenu_edit_selectEdges: ToolStripMenuItem;
        private init_mainMenu_edit_selectEdges;
        mainMenu_edit_selectAll: ToolStripMenuItem;
        private init_mainMenu_edit_selectAll;
        mainMenu_edit_selectNone: ToolStripMenuItem;
        private init_mainMenu_edit_selectNone;
        mainMenu_edit_lockUnlock: ToolStripMenuItem;
        private init_mainMenu_edit_lockUnlock;
        mainMenu_view: ToolStripDropDownMenuItem;
        private init_mainMenu_view;
        mainMenu_view_formatPanel: ToolStripMenuItem;
        private init_mainMenu_view_formatPanel;
        mainMenu_view_outline: ToolStripMenuItem;
        private init_mainMenu_view_outline;
        mainMenu_view_layers: ToolStripMenuItem;
        private init_mainMenu_view_layers;
        mainMenu_view_pageView: ToolStripMenuItem;
        private init_mainMenu_view_pageView;
        mainMenu_view_grid: ToolStripMenuItem;
        private init_mainMenu_view_grid;
        mainMenu_view_connectionArrows: ToolStripMenuItem;
        private init_mainMenu_view_connectionArrows;
        mainMenu_view_connectionPoints: ToolStripMenuItem;
        private init_mainMenu_view_connectionPoints;
        mainMenu_view_resetView: ToolStripMenuItem;
        private init_mainMenu_view_resetView;
        mainMenu_view_zoomIn: ToolStripMenuItem;
        private init_mainMenu_view_zoomIn;
        mainMenu_view_zoomOut: ToolStripMenuItem;
        private init_mainMenu_view_zoomOut;
        mainMenu_arrange: ToolStripDropDownMenuItem;
        private init_mainMenu_arrange;
        mainMenu_arrange_toFront: ToolStripMenuItem;
        private init_mainMenu_arrange_toFront;
        mainMenu_arrange_toBack: ToolStripMenuItem;
        private init_mainMenu_arrange_toBack;
        mainMenu_arrange_align: ToolStripDropDownMenuItem;
        private init_mainMenu_arrange_align;
        mainMenu_arrange_align_leftAlign: ToolStripMenuItem;
        private init_mainMenu_arrange_align_leftAlign;
        mainMenu_arrange_align_center: ToolStripMenuItem;
        private init_mainMenu_arrange_align_center;
        mainMenu_arrange_align_rightAlign: ToolStripMenuItem;
        private init_mainMenu_arrange_align_rightAlign;
        mainMenu_arrange_align_topAlign: ToolStripMenuItem;
        private init_mainMenu_arrange_align_topAlign;
        mainMenu_arrange_align_middle: ToolStripMenuItem;
        private init_mainMenu_arrange_align_middle;
        mainMenu_arrange_align_bottomAlign: ToolStripMenuItem;
        private init_mainMenu_arrange_align_bottomAlign;
        mainMenu_arrange_distribute: ToolStripDropDownMenuItem;
        private init_mainMenu_arrange_distribute;
        mainMenu_arrange_distribute_horizontal: ToolStripMenuItem;
        private init_mainMenu_arrange_distribute_horizontal;
        mainMenu_arrange_distribute_vertical: ToolStripMenuItem;
        private init_mainMenu_arrange_distribute_vertical;
        mainMenu_arrange_clearWaypoints: ToolStripMenuItem;
        private init_mainMenu_arrange_clearWaypoints;
        mainMenu_arrange_autosize: ToolStripMenuItem;
        private init_mainMenu_arrange_autosize;
        mainMenu_help: ToolStripDropDownMenuItem;
        private init_mainMenu_help;
        mainMenu_help_help: ToolStripMenuItem;
        private init_mainMenu_help_help;
        mainMenu_help_viewModelXml: ToolStripMenuItem;
        private init_mainMenu_help_viewModelXml;
        mainMenu_help_about: ToolStripMenuItem;
        private init_mainMenu_help_about;
        btn_save: ToolStripButton;
        private init_btn_save;
        btn_viewPanels: ToolStripDropDownButton;
        private init_btn_viewPanels;
        btn_zoom: ToolStripDropDownButton;
        private init_btn_zoom;
        view_25: ToolStripMenuItem;
        private init_view_25;
        view_50: ToolStripMenuItem;
        private init_view_50;
        view_75: ToolStripMenuItem;
        private init_view_75;
        view_100: ToolStripMenuItem;
        private init_view_100;
        view_125: ToolStripMenuItem;
        private init_view_125;
        view_150: ToolStripMenuItem;
        private init_view_150;
        view_200: ToolStripMenuItem;
        private init_view_200;
        view_300: ToolStripMenuItem;
        private init_view_300;
        view_400: ToolStripMenuItem;
        private init_view_400;
        view_fitWindow: ToolStripMenuItem;
        private init_view_fitWindow;
        view_fitPage: ToolStripMenuItem;
        private init_view_fitPage;
        view_fitTwoPages: ToolStripMenuItem;
        private init_view_fitTwoPages;
        view_fitPageWidth: ToolStripMenuItem;
        private init_view_fitPageWidth;
        view_customZoom: ToolStripMenuItem;
        private init_view_customZoom;
        btn_zoomIn: ToolStripButton;
        private init_btn_zoomIn;
        btn_zoomOut: ToolStripButton;
        private init_btn_zoomOut;
        btn_undo: ToolStripButton;
        private init_btn_undo;
        btn_redo: ToolStripButton;
        private init_btn_redo;
        btn_delete: ToolStripButton;
        private init_btn_delete;
        btn_align: ToolStripDropDownButton;
        private init_btn_align;
        btn_distribute: ToolStripDropDownButton;
        private init_btn_distribute;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    abstract class ToolStripItem {
        resourceKey: string;
        toolTipText: string;
        text: string;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    abstract class ToolStripActionItem extends ToolStripItem {
        actionKey: string;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolStripButton extends ToolStripActionItem {
        imageSrc: string;
        imageClassName: string;
        displayStyle: ToolStripItemDisplayStyle;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    abstract class ToolStripDropDownItem extends ToolStripItem {
        constructor();
        items: List<ToolStripMenuItem | ToolStripDropDownMenuItem | ToolStripSeparator>;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolStripDropDownButton extends ToolStripDropDownItem {
        imageSrc: string;
        imageClassName: string;
        displayStyle: ToolStripItemDisplayStyle;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolStripDropDownMenuItem extends ToolStripDropDownItem {
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    enum ToolStripItemDisplayStyle {
        Text = "Text",
        Image = "Image",
        ImageAndText = "ImageAndText"
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolStripMenuItem extends ToolStripActionItem {
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class ToolStripSeparator extends ToolStripItem {
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class Dictionary<T> {
        constructor();
        private _keys;
        private _values;
        keys(): string[];
        values(): T[];
        getValue(key: string): T;
        add(key: string, value: T): void;
        remove(key: string): void;
        containsKey(key: string): boolean;
        count(): number;
        clear(): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    interface IEqualsFunction<T> {
        (a: T, b: T): boolean;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    enum KeyCodes {
        Enter = 13,
        Esc = 27,
        Left = 37,
        Up = 38,
        Right = 39,
        Down = 40,
        Del = 46,
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        Plus = 187,
        Minus = 189
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class List<T> {
        constructor();
        array: Array<T>;
        count(): number;
        add(item: T): void;
        addRange(items: T[]): void;
        clear(): void;
        contains(item: T): boolean;
        indexOf(item: T): number;
        insert(index: number, item: T): void;
        remove(item: T): boolean;
        removeAt(index: number): void;
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class Utils {
        static hasOwnProperty(obj: any, prop: string): boolean;
        static defaultEquals<T>(a: T, b: T): boolean;
        static indexOf<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        static lastIndexOf<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        static contains<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        static remove<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        static equals<T>(array1: T[], array2: T[], equalsFunction?: IEqualsFunction<T>): boolean;
        static keyboardMap: string[];
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
    class WorkFlowActivity extends mxCell {
        type: string;
        constructor(value?: any, geometry?: mxGeometry, style?: string, type?: string);
    }
}
declare namespace inspur.gsp.pmf.grapheditor {
}
