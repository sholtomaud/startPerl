module.exports = function(app){
    var createField = require('./field')(app),
        views = app.views;

    function createTextField(labelText, textboxSettings){
        var field = createField(labelText),
            textbox = new views.Textbox(textboxSettings);

        field.views.content.add(textbox);

        return field;
    }

    return createTextField;
};