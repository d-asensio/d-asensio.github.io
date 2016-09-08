$('svg.pie-progress[data-percentage]').each(function (n, element) {
  var pieWidth = 100;

  $(this).css({"width": pieWidth + "px", "height": pieWidth + "px"});

  if(typeof window.pieProgressCanvases === 'undefined') {
    window.pieProgressCanvases = [];
  }

  if(typeof window.pieProgressObjects === 'undefined') {
    window.pieProgressObjects = [];
  }

  var newCanvas =  SVG(element);
  var newObject = new PieP.PieProgress(
    pieWidth / 2,
    parseInt($(this).attr('data-percentage')),
    newCanvas
  );

  newObject.setColor($(this).attr('data-color'));

  window.pieProgressCanvases[window.pieProgressCanvases.length] = newCanvas;
  window.pieProgressObjects[window.pieProgressObjects.length] = newObject;

  newCanvas = null;
  newObject = null;
});
