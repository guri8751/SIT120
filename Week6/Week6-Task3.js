new Vue({
    el: "#app",
    data: {
        List: 'employees',
        lists: {
            mark: ['Age: 30', 'Gender: Male'],
            david: ['Age: 35', 'Gender: Male'],
            jessica: ['Age: 22', 'Gender: Female']
        }
    },
    computed: {
        items() {
            return this.lists[this.List]
        }
    }
})
