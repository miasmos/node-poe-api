const moxios = require("moxios");

const intercept = <T>(response: T): T => {
    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response });
    });
    return response;
};

export { intercept };
