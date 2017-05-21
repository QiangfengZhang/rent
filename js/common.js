var api = 'https://16909118.qcloud.la/webapp';


function get(url, params, cb) {
    $.ajax({
        url: api + url,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: cb,
        data: params,
        success: function (res) {
            res;
        }
    });
}