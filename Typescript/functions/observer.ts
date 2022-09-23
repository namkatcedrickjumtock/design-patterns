const Observable = () => {

    // return a factory
    return {
        subscribers: [],

    // subcribing to the observable
    subcribe(fn:never) {
        this.subscribers.push(fn)
    }
,
    // unsubcribing
    unSubcribe(fn: any) {
        this.subscribers = this.subscribers.filter(items => items != fn)
    }
,
    //broadcast methods
    // broadCast(data: any) {
    //     for (let i = 0; i < this.subscribers.length; i++) {
    //         this.subscribers[i](data);
    //     }
    // }
    }
}