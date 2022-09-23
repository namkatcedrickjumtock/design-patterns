var Observable = function () {
    // return a factory
    return {
        subscribers: [],
        // subcribing to the observable
        subcribe: function (fn) {
            this.subscribers.push(fn);
        },
        // unsubcribing
        unSubcribe: function (fn) {
            this.subscribers = this.subscribers.filter(function (items) { return items != fn; });
        }
    };
};
