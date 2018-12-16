function mxDefaultKeyHandler(editor)
{
	if (editor != null)
	{
		this.editor = editor;
		this.handler = new mxKeyHandler(editor.graph);
		
		// Extends the escape function of the internal key
		// handle to hide the properties dialog and fire
		// the escape event via the editor instance
		var old = this.handler.escape;
		
		this.handler.escape = function(evt)
		{
			old.apply(this, arguments);
			editor.hideProperties();
			editor.fireEvent(new mxEventObject(mxEvent.ESCAPE, 'event', evt));
		};
	}
};
	
/**
 * Variable: editor
 *
 * Reference to the enclosing <mxEditor>.
 */
mxDefaultKeyHandler.prototype.editor = null;

/**
 * Variable: handler
 *
 * Holds the <mxKeyHandler> for key event handling.
 */
mxDefaultKeyHandler.prototype.handler = null;

/**
 * Function: bindAction
 *
 * Binds the specified keycode to the given action in <editor>. The
 * optional control flag specifies if the control key must be pressed
 * to trigger the action.
 *
 * Parameters:
 *
 * code - Integer that specifies the keycode.
 * action - Name of the action to execute in <editor>.
 * control - Optional boolean that specifies if control must be pressed.
 * Default is false.
 */
mxDefaultKeyHandler.prototype.bindAction = function (code, action, control)
{
	var keyHandler = mxUtils.bind(this, function()
	{
		this.editor.execute(action);
	});

	// Binds the function to control-down keycode
	if (control)
	{
		this.handler.bindControlKey(code, keyHandler);
	}

	// Binds the function to the normal keycode
	else
	{
		this.handler.bindKey(code, keyHandler);				
	}
};

/**
 * Function: destroy
 *
 * Destroys the <handler> associated with this object. This does normally
 * not need to be called, the <handler> is destroyed automatically when the
 * window unloads (in IE) by <mxEditor>.
 */
mxDefaultKeyHandler.prototype.destroy = function ()
{
	this.handler.destroy();
	this.handler = null;
};
