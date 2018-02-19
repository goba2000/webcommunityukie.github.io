'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style/style.css"]);

toolbox.router.get('/rpapp/images/*', toolbox.cacheFirst);

toolbox.router.get('/rpapp/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
