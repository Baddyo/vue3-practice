function makeFilter(list) {
    let sex = Vue.ref('');

    let filterList = Vue.computed(() => {
        return list.value.filter(x => {
            if (sex.value) {
                return x.sex === sex.value;
            } else {
                return x;
            }
        });
    });

    return {
        sex,
        filterList
    }
}