/**
 * Created by Gagan on 23-12-2016.
 */
function route(handler, pathname, response, postdata) {
    console.log("About to route a request for " + pathname);
    if(typeof handler[pathname] === 'function') {
        return handler[pathname](response, postdata);
    }
    else {
        console.log("No request handler for : " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 not found");
        response.end();
    }
}
exports.route = route;