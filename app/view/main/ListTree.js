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

    tbar: [{
        xtype: 'button',
        text: 'Create folder',
        handler: function () {
            var selection = tree.getSelection()
            if (selection.length > 0) {
                var activeNode = tree.getSelection()[0]
                if (activeNode.data.leaf) {
                    console.log("Can't create folder inside file")
                } else {
                    activeNode.appendChild({
                        name: "Folder_" + Math.random().toString(36).substring(7),
                        leaf: false
                    });
                }
            } else {
                var root = tree.getRootNode();
                root.appendChild({
                    name: "Folder_" + Math.random().toString(36).substring(7),
                    leaf: false
                });
            }
        }
    }, {
        xtype: 'button',
        text: 'Create file',
        handler: function () {
            var selection = tree.getSelection()
            if (selection.length > 0) {
                var activeNode = tree.getSelection()[0]
                if (activeNode.data.leaf) {
                    console.log("Can't create file inside file")
                } else {
                    activeNode.appendChild({
                        name: "File_" + Math.random().toString(36).substring(7),
                        size: Math.floor(Math.random() * Math.floor(1000)),
                        leaf: true
                    });
                }
            } else {
                console.log("nothing selected")
            }

        }
    }, {
        xtype: 'button',
        text: 'Delete',
        handler: function () {
            var activeNode = tree.getSelection()[0]
            activeNode.childNodes.forEach(function (item) {
                store.remove(item)
                // it would be fine to make a recursion here to delete all child nodes
                // ... but I don't know how to do a function inside extjs fiddle :)
            });
            store.remove(tree.getSelection())

        }
    }],

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