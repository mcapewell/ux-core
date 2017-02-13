Vue.component('docs-menu', {
    props: ['currentPage'],

    template: '<ul class="menu">\
        <li v-for="item in menuItems" v-bind:class="item.url === currentPage ? \'active\' : \'\'">\
            <a v-bind:href="item.url">{{ item.title }}</a>\
        </li>\
    </ul>',
    
    data: function () {
        return {
            menuItems: [
                { url: "index.html", title: "Home" },
                { url: "typography.html", title: "Typography" },
                { url: "grid.html", title: "Grid" },
                { url: "button.html", title: "Button" },
                { url: "button-group.html", title: "Button Group" },
                { url: "table.html", title: "Table" },
                { url: "form.html", title: "Form" },
                { url: "menu.html", title: "Menu" }
            ]
        }
    }
});

var app = new Vue({
    el: '#app'
});