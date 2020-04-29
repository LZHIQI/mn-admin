import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboadrSuccess () {
    Vue.prototype.$message({
        message:'复制成功',
        type:'success',
        duration:1500
    })
}

function clipboardError() {
    Vue.prototype.$message({
        message: '复制失败',
        type: 'error'
    })
}


export  default function  handleClipboard(text,event) {
    const clipboard=new Clipboard(event.target,{
        text:()=>text
    })
    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        e.clearSelection();
        clipboadrSuccess();
        clipboard.destroy()
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        clipboardError()
        clipboard.destroy()
    });
    clipboard.onClick(event)
}
