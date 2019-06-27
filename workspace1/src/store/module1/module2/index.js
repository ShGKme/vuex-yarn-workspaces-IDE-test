import { TEST4 } from "./types";

export default {
    state: {},
    getters: {},
    mutators: {},
    actions: {
        test3(ctx, { param3 }) {
            console.log('Test3: ', param3);
        },
        [TEST4](ctx, { param4 }) {
            console.log('TEST4: ', param4);
        },
    },
    namespaced: true,
}
