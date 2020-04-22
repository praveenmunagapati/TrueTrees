Ext.define('MyApp.view.tree.XmlTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree-xml',

    requires: [
        'Ext.data.TreeStore'
    ],

    title: 'Files',
    height: 400,
    width: 350,
    useArrows: true,



    viewConfig: {
        plugins: {
            treeviewdragdrop: {
                containerScroll: true
            }
        }
    }
});