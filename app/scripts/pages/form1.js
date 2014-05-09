module.exports = function(){
    var app = require('../app'),
        views = app.views,
        textField = require('../controls/textField')(app);
        checkField = require('../controls/checkField')(app);

    function createForm(){
        var form = new views.Form();

        // Tenure Holder BoreID
        var tenureHolderBoreIdField = textField(
                'Tenure Holder BoreID',
                {
                    required: { value: true},
                    maxLength: { value: 7},
                    placeholder: { value: 'e.g. AES0001'},
                    value: { binding: '[tenureHolderBoreId]'},
                    enabled: { value: '[/fieldsEnabled]'}
                }
            );


        // More fields
        var checkboxField = checkField(
                'Field Label',
                {
                    value: { binding: '[someOtherValue]'},
                    enabled: { value: '[/fieldsEnabled]'}
                }
            );

        form.views.content.add([
            tenureHolderBoreIdField,
            checkboxField
        ]);

        return form;
    }

    return createForm();

};