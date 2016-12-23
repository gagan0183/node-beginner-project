/**
 * Created by Gagan on 23-12-2016.
 */
var querystring = require('querystring');
function start(response, postdata) {
    console.log("Request handler start");
    var body = '<html>' +
        '<head><meta http-equiv="Content-Type" content="text/html">' + '</head>' +
            '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"/><br> ' +
        '<input type="file" name="upload" multiple="multiple"><br/>' +
        '<input type="submit" value="upload">' +
        '</form>' +
        '</body></html>';
        response.writeHead(200, {"Content-type": "text/html"});
        response.write(body);
        response.end();
}

function upload(response, postdata) {
    console.log("Request handler uploads");
    response.writeHead(200, {"content-type": "text/plain"});
    response.write(querystring.parse(postdata).text);
    response.end();
}

exports.start = start;
exports.upload = upload;