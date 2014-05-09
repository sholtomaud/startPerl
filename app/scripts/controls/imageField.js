module.exports = function(app){
    var createField = require('./field')(app),
        views = app.views,
        actions = app.actions,
        behaviours = app.behaviours;

    function createImageField(labelText, imageSettings){
        var field = createField(labelText),
            image = new views.Image(imageSettings);

        field.views.content.add(image);

        return field;
    }

    return createImageField;
};