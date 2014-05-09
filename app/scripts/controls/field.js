module.exports = function(app){
    var views = app.views;

    function createField(labelText){
        var field = new views.Field(),
            label = new views.Label();

        if(typeof labelText === 'string'){
            label.text.value = labelText;
        }else{
            label.text.value = labelText.value;
            label.text.binding = labelText.binding;
        }

        field.classes.value = 'field';

        field.views.content.add(label);

        return field;
    }

    return createField;
};