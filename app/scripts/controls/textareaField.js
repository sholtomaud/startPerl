module.exports = function(app){
    var createField = require('./field')(app),
        views = app.views;

    function createTextareaField(labelText, textareaSettings){
        var field = createField(labelText),
            textarea = new views.Textarea(textareaSettings);

        field.views.content.add(textarea);

        return field;
    }

    return createTextareaField;
};