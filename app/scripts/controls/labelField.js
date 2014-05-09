module.exports = function(app){
    var createField = require('./field')(app),
        views = app.views,
        actions = app.actions,
        behaviours = app.behaviours;

    function createLabelField(labelText, labelSettings){
        var field = createField(labelText),
            valueLabel = new views.Label(labelSettings);

        field.views.content.add(valueLabel);

        return field;
    }

    return createLabelField;
};