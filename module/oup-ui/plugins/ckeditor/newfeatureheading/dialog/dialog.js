CKEDITOR.dialog.add( 'getNewFeature', function( editor ) {
    return {
		title: 'New Feature Heading',
        minWidth:     400,
        minHeight:    120,
        contents: [
            {
                id:         'tab',
                label:      'Settings',
                title:      'Basic Settings',
                elements: [
                    {
                        type:           'text',
                        label:          'Heading text:',
                        id:             'headingText'  
                    },
                    {
                        type:           'text',
                        label:          'Date (text):',
                        id:             'dateText'  
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            var headingText = dialog.getValueOf( 'tab', 'headingText');
            var dateText = dialog.getValueOf( 'tab', 'dateText');

            editor.insertHtml(`<div class="newFeatureHead">
                                    <span class="newFeatureDate">${dateText}</span>
                                    <h2>${headingText}</h2>
                                </div>\n<p></p>`);
        }
    }
});
