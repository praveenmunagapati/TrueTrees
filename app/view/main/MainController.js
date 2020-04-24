/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onAddFolderAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!record.isLeaf()) {
            Ext.MessageBox.prompt('New folder', 'Please enter folder name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    record.appendChild({name: sInput});
                    record.expand();
                }
            }, this);
        } else {
            Ext.Msg.alert("Error", "You cannot add directory to file");
        }
    },


    onAddFileAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!record.isLeaf()) {
            Ext.MessageBox.prompt('New file', 'Please enter file name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    record.appendChild({name: sInput, size: Math.ceil(Math.random() * 100000), leaf: true});
                    record.expand();
                }
            }, this);
        } else {
            Ext.Msg.alert("Error", "You cannot add anything to file");
        }
    },

    onEditRowAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        Ext.MessageBox.prompt('Rename', 'Please enter new name:', function (btnText, sInput) {
            if (btnText === 'ok') {
                record.set({name: sInput});
            }
        }, this);
    },

    onDeleteRowAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        record.erase();
    }
});
