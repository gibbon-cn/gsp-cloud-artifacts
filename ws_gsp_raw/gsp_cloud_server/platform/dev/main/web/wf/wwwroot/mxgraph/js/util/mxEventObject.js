function mxEventObject(name)
{
	this.name = name;
	this.properties = [];
	
	for (var i = 1; i < arguments.length; i += 2)
	{
		if (arguments[i + 1] != null)
		{
			this.properties[arguments[i]] = arguments[i + 1];
		}
	}
};

mxEventObject.prototype.name = null;

mxEventObject.prototype.properties = null;

mxEventObject.prototype.consumed = false;

mxEventObject.prototype.getName = function()
{
	return this.name;
};

mxEventObject.prototype.getProperties = function()
{
	return this.properties;
};

mxEventObject.prototype.getProperty = function(key)
{
	return this.properties[key];
};

mxEventObject.prototype.isConsumed = function()
{
	return this.consumed;
};

mxEventObject.prototype.consume = function()
{
	this.consumed = true;
};
