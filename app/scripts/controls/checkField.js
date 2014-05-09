module.exports = function(app){
    var views = app.views;

    function createCheckField(labelText, checkboxSettings, checkLabelText){
        var field = new views.Container(),
            label = new views.Label(),
            checkbox = new views.Checkbox(checkboxSettings);

        if(typeof labelText === 'string'){
            label.text.value = labelText;
        }else{
            label.text.value = labelText.value;
            label.text.binding = labelText.binding;
        }

        checkbox.classes.value = 'checkbox';

        if(typeof checkLabelText === 'string'){
            checkbox.text.value = checkLabelText;
        }else if(checkLabelText && typeof checkLabelText === 'object'){
            checkbox.text.value = checkLabelText.value;
            checkbox.text.binding = checkLabelText.binding;
        }

        field.classes.value = 'field';
        field.views.content.add([
            label,
            checkbox
        ]);

        return field;
    }

    return createCheckField;
};