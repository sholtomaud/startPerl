var Gaffa = require('gaffa'),
    AjaxAction = require('gaffa-ajax'),
    doc = require('doc-js'),
    crel = require('crel'),
    Container = require('gaffa-container');

function Field(){
    var view = this;
}
Field = Gaffa.createSpec(Field, Container);
Field.prototype.type = 'field';
Field.prototype.render = function(){
    this.renderedElement = crel('div');

    this.errorsElement = crel('div', {'class':'errors'});

    this.views.content.element = this.renderedElement;
};
Field.prototype.error = new Gaffa.Property(function(view, error){
    if(!error){
        doc(view.renderedElement).removeClass('error');
        view.errorsElement.parentNode && view.renderedElement.removeChild(view.errorsElement);
    }else{
        doc(view.renderedElement).addClass('error');
        view.errorsElement.textContent = error;
        view.renderedElement.insertBefore(view.errorsElement, view.renderedElement.childNodes[0]);
    }
});

module.exports = Field;