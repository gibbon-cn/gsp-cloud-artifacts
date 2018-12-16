function mxEventSource(eventSource)
{
	this.setEventSource(eventSource);
};

mxEventSource.prototype.eventListeners = null;

mxEventSource.prototype.eventsEnabled = true;

mxEventSource.prototype.eventSource = null;

mxEventSource.prototype.isEventsEnabled = function()
{
	return this.eventsEnabled;
};

mxEventSource.prototype.setEventsEnabled = function(value)
{
	this.eventsEnabled = value;
};

mxEventSource.prototype.getEventSource = function()
{
	return this.eventSource;
};

mxEventSource.prototype.setEventSource = function(value)
{
	this.eventSource = value;
};

mxEventSource.prototype.addListener = function(name, funct)
{
	if (this.eventListeners == null)
	{
		this.eventListeners = [];
	}
	
	this.eventListeners.push(name);
	this.eventListeners.push(funct);
};

mxEventSource.prototype.removeListener = function(funct)
{
	if (this.eventListeners != null)
	{
		var i = 0;
		
		while (i < this.eventListeners.length)
		{
			if (this.eventListeners[i+1] == funct)
			{
				this.eventListeners.splice(i, 2);
			}
			else
			{
				i += 2;
			}
		}
	}
};

mxEventSource.prototype.fireEvent = function(evt, sender)
{
	if (this.eventListeners != null && this.isEventsEnabled())
	{
		if (evt == null)
		{
			evt = new mxEventObject();
		}
		
		if (sender == null)
		{
			sender = this.getEventSource();
		}

		if (sender == null)
		{
			sender = this;
		}

		var args = [sender, evt];
		
		for (var i = 0; i < this.eventListeners.length; i += 2)
		{
			var listen = this.eventListeners[i];
			
			if (listen == null || listen == evt.getName())
			{
				this.eventListeners[i+1].apply(this, args);
			}
		}
	}
};
