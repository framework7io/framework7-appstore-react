
const PWA = {
  skipWaitingSent: false,
  registration: null,
  serviceWorkerPendingUpdate: false,

  listenForWaitingServiceWorker(reg) {
    function awaitStateChange() {
      reg.installing.addEventListener('statechange', function onStateChange() {
        if (this.state === 'installed') PWA.promptUserToRefresh(reg);
      });
    }
    if (!reg) return;
    if (reg.waiting) {
      PWA.promptUserToRefresh(reg);
      return;
    }
    if (reg.installing) awaitStateChange();
    reg.addEventListener('updatefound', awaitStateChange);
  },

  promptUserToRefresh(registration) {
    if (!(registration && registration.waiting)) return;
    // Show UI and then:
    PWA.skipWaitingSent = true;
    registration.waiting.postMessage('skipWaiting');
    PWA.serviceWorkerPendingUpdate = true;
  },

  init() {
    if ('serviceWorker' in window.navigator) {
      window.navigator.serviceWorker
        .register('./service-worker.js', { scope: '/' })
        .then((registration) => {
          PWA.registration = registration;
          PWA.listenForWaitingServiceWorker(registration);
        });

      let refreshing;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing || !PWA.skipWaitingSent) return;
        refreshing = true;
        // window.location.reload();
      });
    }
  },
};

export default PWA;
