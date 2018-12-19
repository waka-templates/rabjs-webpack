/**
 * Created by yeanzhi on 15/11/24.
 */
import { message } from 'antd';

function showError(msg) {
    message.error(msg);
}

export default function(res, showErrorToast = true) {
    if (typeof res === 'string') {
        return;
    }
    let resCode = res.rescode;
    if (resCode === undefined) {
        resCode = res.code;
    }
    if (!((resCode || resCode === 0) && (res.data || res.data === null))) {
        throw {
            code: 500,
            message: 'api response格式错误'
        };
    }
    if (resCode !== 0 && resCode !== 200) {
        if (showErrorToast) {
            showError(res.data.message || res.data.msg);
        }
        throw {
            code: resCode,
            message: res.data.message || res.data.msg
        };
    }
}

export const weixinCheck = function() {};
