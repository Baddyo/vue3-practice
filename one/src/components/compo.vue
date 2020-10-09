<template>
    <h2>It's a COMPO</h2>
    <slot></slot>
    <slot name="part"></slot>
    <p>{{a}}</p>
    <p>{{b}}</p>
    <p>{{c}}</p>
</template>

<script>
import { inject, toRefs } from 'vue';
    export default {
        name: 'compo',
        props: {
            nm: {
                type: String,
                default: 'Badd'
            }
        },
        setup(props, context) {
            // let {nm1} = props; // 解构出来的 prop 没有响应性

            // let {nm} = toRefs(props);
            // nm.value = 'Swing'; // toRefs 处理后的 prop 是只读的
            console.log('context', context.slots);

            let a = inject('a');
            let b = inject('b');
            let c = inject('c');

            return {a, b, c};
        }
    }
</script>

<style>

</style>