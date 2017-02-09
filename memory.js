var memory = {
    save: function (name, data) {
        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }
        localStorage.setItem(name, data);
    },
    get: function (name) {
        var data = localStorage.getItem(name);
        try {
            data = JSON.parse(data);
            return data;
        } catch (err) {
            var obj = localStorage.getItem(name);
            if (obj === 'undefined') {
                return undefined;
            }
            else {
                return obj;
            }
        }
    },
    remove: function (name) {
        localStorage.removeItem(name);
    },
    clear: function () {
        localStorage.clear();
    }
};