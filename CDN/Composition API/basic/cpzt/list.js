function makeList(user){
    let list = Vue.ref([]);
    let category = Vue.ref('Chinese');

    Vue.watch(user, (val, oldVal) => {
        getList(category);
    });
    
    const getList = category => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', '../../mock/list.json');
        xhr.send(null);
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                if (data[category]) {
                    list.value = data[category]
                } else {
                    list.value = [];
                }
            }
        }
    };

    Vue.onMounted(e => {
        getList(category.value);
    });
    
    return {
        list,
        getList,
        category
    }
}