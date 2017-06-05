var Observer = (function(){
    var subscribe = function(channel, fn){
        if (!Observer.channels[channel]) Observer.channels[channel] = [];
        Observer.channels[channel].push({ context: this, callback: fn });
        return this;
    },
 
    publish = function(channel){
        if (!Observer.channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = Observer.channels[channel].length; i < l; i++) {
            var subscription = Observer.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };
 
    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installMethods: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
 
}());