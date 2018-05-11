/*
 * 封装表单验证方法，支持异步验证
 */
/*
 * 表单元素验证结果集合合并
 */
export const resultMerge = async(form, rules) => {
    let results = []
    for (let item in form) {
        results.push(await validate(form, rules, item))
    }
    let flag = true
    for (let item of results) {
        flag = flag && item
    }
    return flag
}


/*
 * 表单验证单个元素
 * params:  form: 表单数据对象, rules： 对应表单规则对象, field: 需要验证的表单字段
 */
export const validate = async(form, rules, field) => {
    if (!!rules[field]) {
        for (const item of rules[field]) {
            const tepmResult = await item.check(form[field].value)
            if (!!item && !tepmResult) {
                form[field].errorText = item.message
                form[field].bool = false
                return false
            } else {
                form[field].errorText = ''
            }
        }
        form[field].bool = true
        return true
    } else {
        form[field].bool = true
        return true
    }
}


/*
 * 验证金额只能为整数
 */
export const checkPositiveInteger = (valeue) => {
    let regx = /^[1-9][0-9]*$/
    return regx.test(value)
}

/*
 * 验证身份证号
 */
export const checkIdcard = (value) => {
    let regx = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    return regx.test(value)
}

/*
 * 验证银行卡号
 */
export const checkBankcard = (value) => {
    let regx = /^(\d{16}|\d{19})$/
    return regx.test(value)
};
/*
 * 不为空检测
 */
export const checkNotNull = (value) => {
    return value === '' ? false : true
};
/*
 * 验证手机号，返回布尔
 */
export const checkPhone = (value) => {
    let regx = /^1[34578]\d{9}$/;
    if (!value || !regx.test(value)) {
        return false;
    } else {
        return true;
    }
};
/*
 * 验证邀请人信息手机号，可为空，返回布尔
 */
export const checkInvitorPhone = (value) => {
    let regx = /^1[34578]\d{9}$/;
    return value === '' ? true : regx.test(value)
};
/*
 * 验证密码格式，返回布尔
 */
export const checkPwd = (value) => {
    let regx = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
    if (!regx.test(value)) {
        return false;
    } else {
        return true;
    }
};
/*
 * 验证支付密码格式，返回布尔
 */
export const checkPayPwd = (value) => {
    let regx = /^\d{6}$/;
    if (!regx.test(value)) {
        return false;
    } else {
        return true;
    }
};
/**
 * 验证兑换码，返回布尔（只能输入数字和英文）
 */
export const checkRedeem = (value) => {
    let regx = /^[A-Za-z0-9]{8,10}$/;
    if (!regx.test(value)) {
        return false;
    } else {
        return true;
    }
}