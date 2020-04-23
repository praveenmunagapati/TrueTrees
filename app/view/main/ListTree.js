/**
 * This view is an example list of people.
 */

Ext.define('MyApp.view.main.ListTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'mainListTree',
    requires: [
        'MyApp.store.TreeData'
    ],
    store:Ext.create('xu_tree_store'),
    title: "My awesome directory tree named after Ksyshen'ka",

    columns: [{
        xtype: 'treecolumn',
        text: 'Name',
        dataIndex: 'name',
        flex: 1,
        renderer: function (val, meta, rec) {
            if (rec.get('isLayover')) {
                meta.tdStyle = 'color: gray; font-style: italic;';
            }
            return val;
        }
    }, {
        text: 'Size',
        dataIndex: 'size',
        flex: 1
    }, {
        xtype: 'actioncolumn',
        text: 'Edit',
        width: 55,
        menuDisabled: true,
        tooltip: 'Edit task',
        align: 'center',
        iconCls: 'x-fa fa-edit',
        handler: 'onEditRowAction'
    }, {
        xtype: 'actioncolumn',
        text: 'Kill',
        width: 55,
        menuDisabled: true,
        tooltip: 'Kill me plz',
        align: 'center',
        iconCls: 'x-fa fa-times',
        handler: 'onDeleteRowAction'
    }],
    tbar: {
        reference: 'tbar',
        items: [{
            text: 'Add item',
            handler: 'onAddItemAction'
        }]
    },
    viewConfig: {
        plugins: {
            treeviewdragdrop: {
                containerScroll: true
            }
        }
    }

});

