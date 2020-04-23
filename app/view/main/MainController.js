/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onEditRowAction: function (grid, rowIndex, colIndex, actionItem, event, record, row) {
        record.set({name: 'Groot', size: 777});
        //console.log(grid, rowIndex, colIndex, actionItem, event, record, row);
    },

    onDeleteRowAction: function (grid, rowIndex, colIndex, actionItem, event, record, row) {
        record.erase();
        //console.log(grid, rowIndex, colIndex, actionItem, event, record, row);
    },

    onAddItemAction: function () {
        // console.log(some, thing, more, one , any);
        console.log(this);
        // var view = this.getView(),
        //     toolbar = view.lookup('tbar');
        //
        // view.getEl().mask('Expanding tree...');
        // toolbar.disable();
        // console.log(view);
        //
        // view.expandAll(function() {
        //     view.getEl().unmask();
        //     toolbar.enable();
        // });
    },

});
