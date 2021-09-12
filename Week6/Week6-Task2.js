Vue.component('checkbox-vue', {
    template:
        `<div>
    <label><input type="checkbox" :name="name" :checked="value" @change="$emit('input', $event.target.checked)">{{ label }}</label> {{ value }}
  </div>`,
    props: ['label', 'value']
})

new Vue({
    el: '#app',
    data: {
        Data: {},
        options: [
            {
                label: 'Checked or Not: '
            },
        ]
    }
})
