/**
 * Created by ximing on 11/15/17.
 */

const networkErrorResponse = {
    data: {
        message: '网络异常'
    },
    rescode: 1
};

function setAuthHeader(xhr) {
    // let {u, uu, al} = _ALTOKEN;
    // xhr.setRequestHeader('u', u);
    // xhr.setRequestHeader('uu', uu);
    // xhr.setRequestHeader('al', al);
    // xhr.setRequestHeader('dt', 2);
    // xhr.setRequestHeader('ai', 1);
}

export default {
    get(url, dataType = 'json') {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'get',
                url,
                dataType,
                xhrFields: {
                    // withCredentials: true
                },
                beforeSend(xhr) {
                    setAuthHeader(xhr);
                }
            })
                .done((data, textStatus, jqXHR) => {
                    resolve(data);
                })
                .fail((jqXHR, textStatus, errorThrown) => {
                    if (jqXHR.responseJSON) {
                        resolve(jqXHR.responseJSON);
                    } else if (jqXHR.responseText) {
                        try {
                            const _text = JSON.parse(jqXHR.responseText);
                            resolve(_text);
                        } catch (err) {
                            resolve(networkErrorResponse);
                        }
                    } else {
                        resolve(networkErrorResponse);
                    }
                });
        });
    },

    post(obj, dataType = 'json', headers) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: obj.url,
                method: 'POST',
                contentType: 'application/json',
                dataType,
                data: obj.data,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend(xhr) {
                    setAuthHeader(xhr);
                    if (headers) {
                        for (const h in headers) {
                            xhr.setRequestHeader(h, headers[h]);
                        }
                    }
                }
            })
                .done((data, textStatus, jqXHR) => {
                    resolve(data);
                })
                .fail((jqXHR, textStatus, errorThrown) => {
                    if (jqXHR.responseJSON) {
                        resolve(jqXHR.responseJSON);
                    } else if (dataType === 'text' && jqXHR.responseText) {
                        try {
                            const _text = JSON.parse(jqXHR.responseText);
                            resolve(_text);
                        } catch (err) {
                            resolve(networkErrorResponse);
                        }
                    } else {
                        resolve(networkErrorResponse);
                    }
                });
        });
    },

    delete(obj) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: obj.url,
                method: 'DELETE',
                contentType: 'application/json',
                dataType: 'json',
                data: obj.data,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend(xhr) {
                    setAuthHeader(xhr);
                }
            })
                .done((data, textStatus, jqXHR) => {
                    resolve(data);
                })
                .fail((jqXHR, textStatus, errorThrown) => {
                    if (jqXHR.responseJSON) {
                        resolve(jqXHR.responseJSON);
                    } else if (jqXHR.responseText) {
                        try {
                            const _text = JSON.parse(jqXHR.responseText);
                            resolve(_text);
                        } catch (err) {
                            resolve(networkErrorResponse);
                        }
                    } else {
                        resolve(networkErrorResponse);
                    }
                });
        });
    },

    put(obj) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: obj.url,
                method: 'PUT',
                contentType: 'application/json',
                dataType: 'json',
                data: obj.data,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend(xhr) {
                    setAuthHeader(xhr);
                }
            })
                .done((data, textStatus, jqXHR) => {
                    resolve(data);
                })
                .fail((jqXHR, textStatus, errorThrown) => {
                    if (jqXHR.responseJSON) {
                        resolve(jqXHR.responseJSON);
                    } else if (jqXHR.responseText) {
                        try {
                            const _text = JSON.parse(jqXHR.responseText);
                            resolve(_text);
                        } catch (err) {
                            resolve(networkErrorResponse);
                        }
                    } else {
                        resolve(networkErrorResponse);
                    }
                });
        });
    }
};
