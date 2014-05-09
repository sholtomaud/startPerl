module.exports = function(app){
    var views = app.views,
        actions = app.actions,
        behaviours = app.behaviours;

    function createDataEntryForm(){
        var formPage          = new views.Form(),
            formTitle          = new views.Container(),
            formTemplate          = new views.Container(),
            pageTitle               = new views.Label(), 
            jobName               = new views.Textbox(), 
            jobNameLabel               = new views.Label(), 
            jobNumber             = new views.Textbox(),	
            jobNumberLabel             = new views.Label(),	
            basin                 = new views.Textbox(), 
            basinLabel                 = new views.Label(), 
            wellField             = new views.Textbox(),	
            wellFieldLabel             = new views.Label(),	
            recordedBy            = new views.Textbox(),	
            recordedByLabel            = new views.Label(),	
            date                  = new views.Textbox(), 
            dateLabel                  = new views.Label(), 
            time                  = new views.Textbox(), 
            timeLabel                  = new views.Label(), 
            freeGasReadingMethane = new views.Textbox(), 
            freeGasReadingMethaneLabel = new views.Label(), 
            wellNumber            = new views.Textbox(), 
            wellNumberLabel            = new views.Label(), 
            wellType              = new views.Textbox(), 
            wellTypeLabel              = new views.Label(), 
            wellMaterial          = new views.Textbox(),
            wellMaterialLabel          = new views.Label(),
            saveRecord            = new actions.Set(),
            submitButton          = new views.Button();
         
        
        pageTitle.classes.value = 'subHead';
        pageTitle.text.value = 'Ground Water Monitoring Field Form';
        
        jobName.classes.value = 'input';
        jobName.value.binding = '[jobName]';
                    
        jobNumber.classes.value = 'input';            
        jobNumber.value.binding = '[jobNumber]';

        basin.classes.value = 'input';                
        basin.value.binding = '[basin]';
        

        wellField.classes.value = 'input';
        wellField.size.value = 25;
        wellField.value.binding = '[wellField]';

        recordedBy.classes.value = 'input';
        recordedBy.size.value = 15;
        recordedBy.value.binding = '[recordedBy]';

        
        date.classes.value = 'input';
        date.type.value = 'date';

        time.classes.value = 'input';
        freeGasReadingMethane.classes.value = 'input';
        wellNumber.classes.value = 'input';
        wellType.classes.value = 'input';
        wellMaterial.classes.value = 'input'; 
        
        jobNameLabel.classes.value = 'fldname';            
        jobNumberLabel.classes.value = 'fldname';            
        basinLabel.classes.value = 'fldname';                
        wellFieldLabel.classes.value = 'fldname';
        recordedByLabel.classes.value = 'fldname';
        dateLabel.classes.value = 'fldname';
        timeLabel.classes.value = 'fldname';
        freeGasReadingMethaneLabel.classes.value = 'fldname';
        wellNumberLabel.classes.value = 'fldname';
        wellTypeLabel.classes.value = 'fldname';
        wellMaterialLabel.classes.value = 'fldname'; 

        jobNameLabel.text.value = 'Job Name';
        jobNumberLabel.text.value = 'Job Number';            
        basinLabel.text.value = 'Basin';                
        wellFieldLabel.text.value = 'Well Field';
        recordedByLabel.text.value = 'Recorded By';
        dateLabel.text.value = 'Date';
        timeLabel.text.value = 'Time';
        freeGasReadingMethaneLabel.text.value = 'Free Gas Reading (Methane)';
        wellNumberLabel.text.value = 'Well No.';
        wellTypeLabel.text.value = 'Well Type';
        wellMaterialLabel.text.value = 'Well Material'; 

         
        formTemplate.views.content.add([
          jobNameLabel,
          jobName,
          jobNumberLabel,
          jobNumber,            
          basinLabel,
          basin,                
          wellFieldLabel,
          wellField,
          recordedByLabel,
          recordedBy,
          dateLabel,
          date,
          timeLabel,
          time,
          freeGasReadingMethaneLabel,
          freeGasReadingMethane,
          wellNumberLabel,
          wellNumber,
          wellTypeLabel,
          wellType,
          wellMaterialLabel,
          wellMaterial
        ]);
        formTemplate.path = '[/form]';
        
        //formTemplate.classes.value = 'controls';
        
        //saveRecord.source.binding = 'formTemplate';
        //saveRecord.target.binding = '[/data]';

        //cancelButton.actions.click = [disableForm];
        //submitButton.text.value = 'Save';
        //submitButton.actions.click = [saveRecord];
        

/*        
        formTemplate.classes.value = 'form';
        formPage.views.content.add([
          pageTitle,
          formTemplate,
          submitButton
        ])
*/        

        var pushNewUser = new actions.Push();
        pushNewUser.source.binding = '[/form]'; //data is in scope from ajax action success
        pushNewUser.target.binding = '[/data]';
        
        //var alert = new actions.Alert();
        //alert.text.value = 'Saved';

        var submitButton = new views.Button();
        submitButton.text.value = 'Submit';
        submitButton.actions.click = [pushNewUser];

        var form = new views.Form();
        form.path = '[/formData]';
        form.views.content.add([
            formTemplate,
            submitButton
        ]);
        form.actions.submit = [pushNewUser];
        
        var clearNewUser = new actions.Remove();
        clearNewUser.target.binding = '[]';

        var saveData = new actions.Ajax();
        //saveUser.method.value = 'POST';
        saveData.source.binding = '[]';
        saveData.actions.success = [pushNewUser, clearNewUser];
            


        return form;

    }
    
    function oldJSONbased_createDataEntryForm(){
        var selectedForm = new views.Frame();
        //selectedForm.url.value = 'github/chforms/app/build/pages/form1.json';
        //selectedForm.url.value = 'build/pages/form1.json';
        selectedForm.url.value = 'build/pages/aquifer.json';
        /*
            the Frame view loads a chunk of UI based on its url.
            Change this to be a binding which loads the correct form.
        */
        return selectedForm;
    }

    // Make the apps UI
    function createHeader(){
      var headerTemplate = new views.Container(),
        header = new views.Header();

        header.text.value = 'Ground Water Bores Data Forms';

        headerTemplate.views.content.add([
          header
        ]);

        return headerTemplate;
    }

    // Make the app footer
    function stickyFooter(){
      var footerTemplate = new views.Container(),
        banner = new views.Image(),
        footer = new views.Textbox();

        banner.source.value = 'images/chromicon_logo_small.png';

        footerTemplate.views.content.add([
          banner
        ]);

        footerTemplate.classes.value = 'footer';
        return footerTemplate;
    }

    // Make the apps UI
    function createControls(){

        var controlsTemplate = new views.Container(),
            backButton = new views.Button(),
            newRecordButton = new views.Button(),
            editRecordButton = new views.Button(),
            cancelButton = new views.Button(),
            saveRecordButton = new views.Button(),
            nextButton = new views.Button(),
            searchBox = new views.Textbox(),
            deleteRecordButton = new views.Button(),
            enableForm = new actions.Set(),
            disableForm = new actions.Set(),
            addNewRecord = new actions.Push(),
            saveRecord = new actions.Set(),
            addRecordIfNotEmpty = new actions.Conditional(),
            clearNewRecord = new actions.Remove();


        backButton.text.value = '<- Back';
        newRecordButton.text.value = 'New Record';
        editRecordButton.text.value = 'Edit';
        cancelButton.text.value = 'Cancel';
        saveRecordButton.text.value = 'Save';
        nextButton.text.value = 'Next ->';
        searchBox.placeholder.value = 'Search...';
        deleteRecordButton.text.value = 'Delete';

        enableForm.source.value = 'true' ;
        enableForm.target.binding = '[/fieldsEnabled]';

        disableForm.source.value = 'false' ;
        disableForm.target.binding = '[/fieldsEnabled]';

        editRecordButton.actions.click = [enableForm];
        newRecordButton.actions.click = [enableForm];

        saveRecord.source.binding = '(object "record" (? (filter [] {fields fields.value}) (filter [/ui] {fields fields.table_field}) ) )';
        saveRecord.target.binding = '[/data]';

        cancelButton.actions.click = [disableForm];
        saveRecordButton.actions.click = [disableForm,saveRecord];

        controlsTemplate.views.content.add([
            newRecordButton,
            editRecordButton,
            saveRecordButton,
            backButton,
            nextButton,
            cancelButton,
            searchBox,
            deleteRecordButton
        ]);

        controlsTemplate.classes.value = 'controls';
        return controlsTemplate;

    }

    // Make the apps UI
    function createFormView(){
        var appWrapper = new views.Container();

        appWrapper.views.content.add([
            //createHeader(),
            //createControls(),
            createDataEntryForm()
        ]);
        appWrapper.classes.value = 'app'
        return appWrapper;
    }

    function createAppBehaviours(){
        var onLoadBehaviour = new behaviours.PageLoad(),
            retieveLocalData = new actions.BrowserStorage(),
            persistDataOnChange = new behaviours.ModelChange(),
            persistData = new actions.BrowserStorage(),
            active = new actions.Set(),
            updateDisabled = new actions.Set(),
            setActiveRecord = new actions.Set(),
            ttoggleDisabled = new behaviours.ModelChange();

        updateDisabled.source.binding = '[/fieldsEnabled]';
        updateDisabled.target.binding = '[]';

        ttoggleDisabled.watch.binding = '[/fieldsEnabled]';
        ttoggleDisabled.actions.change = [updateDisabled];

        active.source.value = 0;
        active.target.value = '[/activeNo]';

        retieveLocalData.source.value = 'data';
        retieveLocalData.method.value = 'get';
        retieveLocalData.target.binding = '[/data]';

        onLoadBehaviour.actions.load = [retieveLocalData];

        persistData.source.binding = '[/data]';
        persistData.method.value = 'set';
        persistData.target.value = 'data';

        persistDataOnChange.watch.binding = '[/data]';
        persistDataOnChange.actions.change = [persistData];

        return [
            onLoadBehaviour,
            persistDataOnChange
        ];
    }

    function createView(){
        var appView = new views.Container();

        appView.views.content.add([
            //createHeader(),
            createFormView(),
            stickyFooter()
        ]);

        appView.classes.value = 'app';
        appView.behaviours = createAppBehaviours();

        return appView;
    }

    return createView;
};