import module2 from './module2';

export default {
    state: {},
    getters: {},
    mutators: {},
    actions: {
        test2(ctx, { param2 }) {
            console.log('Test2: ', param2);
        },
    },
    modules: { module2 },
    namespaced: true,
}
