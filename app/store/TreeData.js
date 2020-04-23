Ext.define('MyApp.store.TreeData', {
    extend: 'Ext.data.TreeStore',
    alias: 'xu_tree_store',
    requires: ['MyApp.model.Tree'],
    model: 'MyApp.model.Tree',
    fields: ['name', 'size'],
    type: 'tree',
    proxy: {
        type: 'ajax',
        url: 'data/treedata.json'
    }
});