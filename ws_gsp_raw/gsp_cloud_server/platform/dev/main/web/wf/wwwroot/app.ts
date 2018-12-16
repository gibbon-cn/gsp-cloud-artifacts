namespace inspur.gsp.pmf.grapheditor
{
    window.onload = function ()
    {
        let resourcesUrl: string = "grapheditor/resources/grapheditor.txt";
        //let resourcesUrl: string = "http://localhost:8403/ResourceHandler.ashx";

        $.get(resourcesUrl, function (data: string)
        {
            mxResources.parse(data);

            let editor = new EditorUi();

            //editor.menubarEnabled = true;
            //editor.formatEnabled = true;
            //editor.footerEnabled = true;

            editor.show();
        });
    };
}