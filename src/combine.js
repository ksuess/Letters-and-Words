import sketch from 'sketch'

export default function() {
    const doc = sketch.getSelectedDocument()
    const selectedLayers = doc.selectedLayers
    sketch.UI.message(`selected layers: ${selectedLayers.length}`);
    // TODO ignore layers that are not text layers
    // if (layer.type === String(sketch.Types.Text))

    selectedLayers.forEach(layer => log(layer.id))

    log("\n\ntext layers ( huchtilopochtli )")
    selectedLayers.forEach(layer => {
        if (layer.type === String(sketch.Types.Text)) {
            log(layer.id)
            log(layer.name)
            log(layer.frame)
            log(layer.text)
            log(" ")
            // Math.min.apply(Math,_array); 
        }
    })
}




//
//
// var onRun = function(context) {
//   // Combine text layers
//
//   var textArray = [],
//       firstObject = context.selection[0],
//       parent = [firstObject parentGroup], // layer parent for removing original layer
//       newLayer = [firstObject duplicate],
//       selectedLayers = context.selection,
//       selectedCount = selectedLayers.count();
//
//   for (var i=0; i<selectedCount; i++) {
//     var layer = selectedLayers[i],
//         frame = [layer frame],
//         layerVals = {
//           text: [layer stringValue],
//           y: [frame y]
//         };
//
//     textArray.push(layerVals);
//
//     // Remove layer
//     [parent removeLayer: layer];
//   };
//
//   textArray.sort(function (a, b) {
//       if (a.y > b.y) {
//         return 1;
//       }
//       if (a.y < b.y) {
//         return -1;
//       }
//       // a must be equal to b
//       return 0;
//   });
//
//   var lineHeight = [newLayer lineHeight],
//       newFrame = [newLayer frame],
//       combinedText = textArray.map(function(elem){
//       return elem.text;
//   }).join("\n");
//
//   // Bug in Sketch causes lineHeight to return 0 if set to auto. Faking it with magic number.
//   if (lineHeight == 0) {
//     lineHeight = [newLayer fontSize] * 1.2;
//   };
//
//   [newLayer setStringValue: combinedText];
//   [newFrame setY: textArray[0].y];
//   [newLayer select:true byExpandingSelection:true]
//
//   // New layer still retains old height info; bug?
//   newFrame.setHeight(Math.round(lineHeight * textArray.length));
//
// };
