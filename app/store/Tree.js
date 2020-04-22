Ext.define('MyApp.store.Tree', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.tree',

    model: 'MyApp.model.Tree',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'xml',
            rootProperty: 'nodes',
            record: 'node'
        }
    }
});

