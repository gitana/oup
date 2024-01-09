
(function() {
 
    var CKEDITOR = window.CKEDITOR;
 
    var pluginName = "newfeatureheading";
 
    CKEDITOR.plugins.add(pluginName, {
        icons: pluginName,
        onLoad: function() {
            CKEDITOR.document.appendStyleSheet(this.path + "css/feature.css");
        },
        init: function (editor) {
            CKEDITOR.dialog.add( 'getNewFeature', this.path + 'dialog/dialog.js' );
			CKEDITOR.config.autoParagraph= false;
			CKEDITOR.config.enterMode= CKEDITOR.ENTER_BR;
			editor.addCommand(pluginName,new CKEDITOR.dialogCommand( 'getNewFeature'));
            
            editor.ui.addButton(pluginName, {
                label: 'New Feature Heading',
                command: pluginName,
                toolbar: 'newfeatureheading',
				icon: this.path + "icons/new-feature-heading.png"
            });          
        }
    });
   
})();