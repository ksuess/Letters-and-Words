import sketch from 'sketch'

export function combine_to_farest() {
    const textwidth = 150
    const doc = sketch.getSelectedDocument()
    const selectedLayers = doc.selectedLayers

    var textLayers = []
    selectedLayers.forEach(function (layer, i) {
        if (layer.type === String(sketch.Types.Text)) {
            textLayers.push(layer)
        }
    });
    var selectedCount = textLayers.length
    if (selectedCount === 0) {
        sketch.UI.message('No layers are selected.')
        return
    }
    var finalLayer = textLayers.shift()
    textLayers.forEach(function (layer, i){
        finalLayer.text += "\n" + layer.text
        finalLayer.frame.width = textwidth
        layer.remove()
    });
    const finalText = finalLayer.text;
    doc.selectedLayers = [finalLayer];
    // sketch.UI.message('Text has been merged: ' + finalText)
    sketch.UI.message(`Text has been merged: ${finalText}`)
}
