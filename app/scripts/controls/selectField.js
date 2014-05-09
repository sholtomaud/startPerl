module.exports = function(app){
    var createField = require('./field')(app),
        views = app.views;

    function createTextField(labelText, selectSettings){
        var field = createField(labelText),
            select = new views.Select(selectSettings);

        field.views.content.add(select);

        return field;
    }

    return createTextField;
};