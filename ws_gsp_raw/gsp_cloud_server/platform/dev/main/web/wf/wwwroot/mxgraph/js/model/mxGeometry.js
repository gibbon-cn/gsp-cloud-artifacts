function mxGeometry(x, y, width, height)
{
	mxRectangle.call(this, x, y, width, height);
};

/**
 * Extends mxRectangle.
 */
mxGeometry.prototype = new mxRectangle();
mxGeometry.prototype.constructor = mxGeometry;

/**
 * Variable: TRANSLATE_CONTROL_POINTS
 * 
 * Global switch to translate the points in translate. Default is true.
 */
mxGeometry.prototype.TRANSLATE_CONTROL_POINTS = true;

/**
 * Variable: alternateBounds
 *
 * Stores alternate values for x, y, width and height in a rectangle. See
 * <swap> to exchange the values. Default is null.
 */
mxGeometry.prototype.alternateBounds = null;

/**
 * Variable: sourcePoint
 *
 * Defines the source <mxPoint> of the edge. This is used if the
 * corresponding edge does not have a source vertex. Otherwise it is
 * ignored. Default is  null.
 */
mxGeometry.prototype.sourcePoint = null;

/**
 * Variable: targetPoint
 *
 * Defines the target <mxPoint> of the edge. This is used if the
 * corresponding edge does not have a target vertex. Otherwise it is
 * ignored. Default is null.
 */
mxGeometry.prototype.targetPoint = null;

/**
 * Variable: points
 *
 * Array of <mxPoints> which specifies the control points along the edge.
 * These points are the intermediate points on the edge, for the endpoints
 * use <targetPoint> and <sourcePoint> or set the terminals of the edge to
 * a non-null value. Default is null.
 */
mxGeometry.prototype.points = null;

/**
 * Variable: offset
 *
 * For edges, this holds the offset (in pixels) from the position defined
 * by <x> and <y> on the edge. For relative geometries (for vertices), this
 * defines the absolute offset from the point defined by the relative
 * coordinates. For absolute geometries (for vertices), this defines the
 * offset for the label. Default is null.
 */
mxGeometry.prototype.offset = null;

/**
 * Variable: relative
 *
 * Specifies if the coordinates in the geometry are to be interpreted as
 * relative coordinates. For edges, this is used to define the location of
 * the edge label relative to the edge as rendered on the display. For
 * vertices, this specifies the relative location inside the bounds of the
 * parent cell.
 * 
 * If this is false, then the coordinates are relative to the origin of the
 * parent cell or, for edges, the edge label position is relative to the
 * center of the edge as rendered on screen.
 * 
 * Default is false.
 */
mxGeometry.prototype.relative = false;

/**
 * Function: swap
 * 
 * Swaps the x, y, width and height with the values stored in
 * <alternateBounds> and puts the previous values into <alternateBounds> as
 * a rectangle. This operation is carried-out in-place, that is, using the
 * existing geometry instance. If this operation is called during a graph
 * model transactional change, then the geometry should be cloned before
 * calling this method and setting the geometry of the cell using
 * <mxGraphModel.setGeometry>.
 */
mxGeometry.prototype.swap = function()
{
	if (this.alternateBounds != null)
	{
		var old = new mxRectangle(
			this.x, this.y, this.width, this.height);

		this.x = this.alternateBounds.x;
		this.y = this.alternateBounds.y;
		this.width = this.alternateBounds.width;
		this.height = this.alternateBounds.height;

		this.alternateBounds = old;
	}
};

/**
 * Function: getTerminalPoint
 * 
 * Returns the <mxPoint> representing the source or target point of this
 * edge. This is only used if the edge has no source or target vertex.
 * 
 * Parameters:
 * 
 * isSource - Boolean that specifies if the source or target point
 * should be returned.
 */
mxGeometry.prototype.getTerminalPoint = function(isSource)
{
	return (isSource) ? this.sourcePoint : this.targetPoint;
};

/**
 * Function: setTerminalPoint
 * 
 * Sets the <sourcePoint> or <targetPoint> to the given <mxPoint> and
 * returns the new point.
 * 
 * Parameters:
 * 
 * point - Point to be used as the new source or target point.
 * isSource - Boolean that specifies if the source or target point
 * should be set.
 */
mxGeometry.prototype.setTerminalPoint = function(point, isSource)
{
	if (isSource)
	{
		this.sourcePoint = point;
	}
	else
	{
		this.targetPoint = point;
	}
	
	return point;
};

/**
 * Function: rotate
 * 
 * Rotates the geometry by the given angle around the given center. That is,
 * <x> and <y> of the geometry, the <sourcePoint>, <targetPoint> and all
 * <points> are translated by the given amount. <x> and <y> are only
 * translated if <relative> is false.
 * 
 * Parameters:
 * 
 * angle - Number that specifies the rotation angle in degrees.
 * cx - <mxPoint> that specifies the center of the rotation.
 */
mxGeometry.prototype.rotate = function(angle, cx)
{
	var rad = mxUtils.toRadians(angle);
	var cos = Math.cos(rad);
	var sin = Math.sin(rad);
	
	// Rotates the geometry
	if (!this.relative)
	{
		var ct = new mxPoint(this.getCenterX(), this.getCenterY());
		var pt = mxUtils.getRotatedPoint(ct, cos, sin, cx);
		
		this.x = Math.round(pt.x - this.width / 2);
		this.y = Math.round(pt.y - this.height / 2);
	}

	// Rotates the source point
	if (this.sourcePoint != null)
	{
		var pt = mxUtils.getRotatedPoint(this.sourcePoint, cos, sin, cx);
		this.sourcePoint.x = Math.round(pt.x);
		this.sourcePoint.y = Math.round(pt.y);
	}
	
	// Translates the target point
	if (this.targetPoint != null)
	{
		var pt = mxUtils.getRotatedPoint(this.targetPoint, cos, sin, cx);
		this.targetPoint.x = Math.round(pt.x);
		this.targetPoint.y = Math.round(pt.y);	
	}
	
	// Translate the control points
	if (this.points != null)
	{
		for (var i = 0; i < this.points.length; i++)
		{
			if (this.points[i] != null)
			{
				var pt = mxUtils.getRotatedPoint(this.points[i], cos, sin, cx);
				this.points[i].x = Math.round(pt.x);
				this.points[i].y = Math.round(pt.y);
			}
		}
	}
};

/**
 * Function: translate
 * 
 * Translates the geometry by the specified amount. That is, <x> and <y> of the
 * geometry, the <sourcePoint>, <targetPoint> and all <points> are translated
 * by the given amount. <x> and <y> are only translated if <relative> is false.
 * If <TRANSLATE_CONTROL_POINTS> is false, then <points> are not modified by
 * this function.
 * 
 * Parameters:
 * 
 * dx - Number that specifies the x-coordinate of the translation.
 * dy - Number that specifies the y-coordinate of the translation.
 */
mxGeometry.prototype.translate = function(dx, dy)
{
	dx = parseFloat(dx);
	dy = parseFloat(dy);
	
	// Translates the geometry
	if (!this.relative)
	{
		this.x = parseFloat(this.x) + dx;
		this.y = parseFloat(this.y) + dy;
	}

	// Translates the source point
	if (this.sourcePoint != null)
	{
		this.sourcePoint.x = parseFloat(this.sourcePoint.x) + dx;
		this.sourcePoint.y = parseFloat(this.sourcePoint.y) + dy;
	}
	
	// Translates the target point
	if (this.targetPoint != null)
	{
		this.targetPoint.x = parseFloat(this.targetPoint.x) + dx;
		this.targetPoint.y = parseFloat(this.targetPoint.y) + dy;		
	}

	// Translate the control points
	if (this.TRANSLATE_CONTROL_POINTS && this.points != null)
	{
		for (var i = 0; i < this.points.length; i++)
		{
			if (this.points[i] != null)
			{
				this.points[i].x = parseFloat(this.points[i].x) + dx;
				this.points[i].y = parseFloat(this.points[i].y) + dy;
			}
		}
	}
};

/**
 * Function: scale
 * 
 * Scales the geometry by the given amount. That is, <x> and <y> of the
 * geometry, the <sourcePoint>, <targetPoint> and all <points> are scaled
 * by the given amount. <x>, <y>, <width> and <height> are only scaled if
 * <relative> is false. If <fixedAspect> is true, then the smaller value
 * is used to scale the width and the height.
 * 
 * Parameters:
 * 
 * sx - Number that specifies the horizontal scale factor.
 * sy - Number that specifies the vertical scale factor.
 * fixedAspect - Optional boolean to keep the aspect ratio fixed.
 */
mxGeometry.prototype.scale = function(sx, sy, fixedAspect)
{
	sx = parseFloat(sx);
	sy = parseFloat(sy);

	// Translates the source point
	if (this.sourcePoint != null)
	{
		this.sourcePoint.x = parseFloat(this.sourcePoint.x) * sx;
		this.sourcePoint.y = parseFloat(this.sourcePoint.y) * sy;
	}
	
	// Translates the target point
	if (this.targetPoint != null)
	{
		this.targetPoint.x = parseFloat(this.targetPoint.x) * sx;
		this.targetPoint.y = parseFloat(this.targetPoint.y) * sy;		
	}

	// Translate the control points
	if (this.points != null)
	{
		for (var i = 0; i < this.points.length; i++)
		{
			if (this.points[i] != null)
			{
				this.points[i].x = parseFloat(this.points[i].x) * sx;
				this.points[i].y = parseFloat(this.points[i].y) * sy;
			}
		}
	}
	
	// Translates the geometry
	if (!this.relative)
	{
		this.x = parseFloat(this.x) * sx;
		this.y = parseFloat(this.y) * sy;

		if (fixedAspect)
		{
			sy = sx = Math.min(sx, sy);
		}
		
		this.width = parseFloat(this.width) * sx;
		this.height = parseFloat(this.height) * sy;
	}
};

/**
 * Function: equals
 * 
 * Returns true if the given object equals this geometry.
 */
mxGeometry.prototype.equals = function(obj)
{
	return mxRectangle.prototype.equals.apply(this, arguments) &&
		this.relative == obj.relative &&
		((this.sourcePoint == null && obj.sourcePoint == null) || (this.sourcePoint != null && this.sourcePoint.equals(obj.sourcePoint))) &&
		((this.targetPoint == null && obj.targetPoint == null) || (this.targetPoint != null && this.targetPoint.equals(obj.targetPoint))) &&
		((this.points == null && obj.points == null) || (this.points != null && mxUtils.equalPoints(this.points, obj.points))) &&
		((this.alternateBounds == null && obj.alternateBounds == null) || (this.alternateBounds != null && this.alternateBounds.equals(obj.alternateBounds))) &&
		((this.offset == null && obj.offset == null) || (this.offset != null && this.offset.equals(obj.offset)));
};
