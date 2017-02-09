Vue.component('docs-menu', {
    template: '<ul>\
        <li><a href="index.html">Home</a></li>\
        <li><a href="typography.html">Typography</a></li>\
        <li><a href="grid.html">Grid</a></li>\
        <li><a href="button.html">Button</a></li>\
        <li><a href="button-group.html">Button Group</a></li>\
        <li><a href="table.html">Table</a></li>\
    </ul>'
});

var app = new Vue({
    el: '#app'
});