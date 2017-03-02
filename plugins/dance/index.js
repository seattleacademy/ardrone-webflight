function dance(name, deps) {
    'use strict';

    // deps.client.on('navdata', function(data) {
    //     console.log(JSON.stringify(data, null, 4));
    // });

    deps.io.sockets.on('connection', function(socket) {

        socket.on('/dance/dance1', function(params) {
            console.log("dance1")
            deps.io.sockets.emit('/message', params);

            deps.client.takeoff();

            deps.client
                .after(3000, function() {
                    this.stop();
                }).after(5000, function() {
                    this.clockwise(.5);
                }).after(2000, function() {
                    this.stop();
                    this.land();
                })
        });

    });
}

module.exports = dance;
