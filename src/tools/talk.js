/*
 * 用于触发全局提示，通知提醒，对话框，全局加载中等
 */
import store from '@/store'


/*
 *  notice方法
 */
export const notice = (msg = '提示消息', delay = 1000) => {
    let config = null
    config = {
        msg: msg,
        delay: delay
    }
    store.state.notice.config = config
    store.state.notice.state++
}


/*
 * feedback 用户操作反馈，带大图标
 */
export const feedback = (type = 'ok', msg, delay = 3000) => {
    let config = null
    switch (type) {
        case 'ok':
            msg = msg ? msg : '操作成功'
            break;
        case 'error':
            msg = msg ? msg : '操作失败'
            break;
        case 'waring':
            msg = msg ? msg : '操作异常'
            break;
        default:
            msg = msg ? msg : '操作成功'
            break;
    }
    config = {
        msg: msg,
        type: type,
        delay: delay
    }
    store.state.feedback.config = config
    store.state.feedback.state++
}

/*
 * 简单对话框,可添加点击确定事件
 */
export const simpleDialog = (title, content = '新消息', onOk) => {
    let config = {
        title: title,
        content: content,
        onOk: !!onOk ? onOk : () => {}
    }
    store.state.simpleDialog.config = config
    store.state.simpleDialog.state++
}

/*
 * 询问对话框，绑定确定事件和取消事件
 */
export const confirmDialog = (title, content = '新消息', onOk, onCancel) => {
    let config = {
        title: title,
        content: content,
        onOk: !!onOk ? onOk : () => {},
        onCancel: !!onCancel ? onCancel : () => {}
    }
    store.state.confirmDialog.config = config
    store.state.confirmDialog.state++
}