/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.ListTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'mainListTree',

    requires: [
        'MyApp.store.Tree'
    ],
    title: 'Files',
    height: 400,
    width: 350,
    useArrows: true,
    rootVisible: true,
    root: {
        children: [{
            text: 'Root 1',
            children: [{
                text: 'Root 3',
                children: [{
                    text: 'Saratov',
                    leaf: true
                }]
            }]
            }, {
                text: 'Root 2',
                children: [
                    {
                    text: 'Root 4',
                    children: [{
                        text: 'Arizona',
                        leaf: true
                    }]
                }]
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

/* store: {
         type: 'tree',
         proxy: {
             type: 'ajax',
             url: '/xml-tree/get-nodes.php',
             reader: {
                 type: 'xml',
                 rootProperty: 'nodes',
                 record: 'node'
             }
         },

         root: {
             text: 'Ext JS',
             id: 'src',
             expanded: true
         },

         folderSort: true,

         sorters: [{
             property: 'text',
             direction: 'ASC'
         }]
     },

//     root: {
//         text: 'Root',
//         expanded: false,
//         children: [
//             {
//                 text: 'Child 1',
//                 leaf: true
//             },
//             {
//                 text: 'Child 2',
//                 leaf: true
//             }
//         ]
//     },
//
 */