import {imCSS} from './dialog_css.js'


export default function Dialog(obj){
    if (!obj) throw '所需基础参数未上传'
    if (obj.props.content && obj.props.title){
        render(obj)
    } else{
        throw '必要参数未上传'
    }

    function render(res){

        // 创建节点
        let DIYdiv = document.createElement('div')
        DIYdiv.innerHTML = `
        <div class="diy_mask" style="display:${res.props.mask || res.props.mask === undefined ? 'block' : 'none'}"></div>
        <div class="diy_dialog">
                <div class="diy_header">
                    <div class="diy_title"><span style="user-select:none">${res.props.title}</span></div>
                    
                    <div class="diy_close"><span style="user-select:none;display:${res.props.closable || res.props.closable === undefined ? 'block' : 'none'}">
                    <svg
                        class='iconClose'
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M572.16 512l183.466667-183.04a42.666667 42.666667 0 1 0-60.586667-60.586667L512 451.84l-183.04-183.466667a42.666667 42.666667 0 0 0-60.586667 60.586667l183.466667 183.04-183.466667 183.04a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586667 0l183.04-183.466667 183.04 183.466667a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667z"
                        p-id="2371"
                        ></path>
                    </svg>
                    </span></div>
                </div>
                <div class="diy_body" style="user-select:none">
                    <div>${res.props.content}</div>
                </div>
                <div class="diy_footer">
                    <span class="diy_confirm" style="display:${res.props.isShowOk || res.props.isShowOk === undefined ? 'block' : 'none'}">${res.props.ok === '' ? '确认' : res.props.ok}</span>
                    <span class="diy_cancel">${res.props.cancel === '' ? '取消' : res.props.cancel}</span>
                </div>
        </div>
        `
        document.body.appendChild(DIYdiv)

        // 给卓远content添加类名
        if (document.getElementById('mlrkon-tabs')) {
            document.getElementById('mlrkon-tabs').classList.add('ui-tabs','ui-widget','ui-widgrt-content','ui-corner-all')
            document.getElementById('mlrkon-tabs').firstElementChild.classList.add('ui-tabs-nav','ui-helper-reset','ui-helper-clearfix','ui-widget-header','ui-corner-all')
            let ulls = document.getElementById('mlrkon-tabs').firstElementChild.children
            let formls = document.getElementById('mlrkon-tabs').lastElementChild.children
            for (let a = 0; a < formls.length; a++){
                formls[a].style.display = 'none'
            }
            formls[0].style.display = 'block'
            ulls[0].style.backgroundColor = '#ccc'
            console.log(ulls);
            for (let i = 0; i < ulls.length; i++){
                ulls[i].classList.add('ui-state-default','ui-corner-top','ui-tabs-selected','ui-state-active')
                // ls[i].addEventListener('mouseenter',function(){
                //     this.classList.add('ui-state-hover')
                // })
                // ls[i].addEventListener('mouseleave',function(){
                //     this.classList.remove('ui-state-hover')
                // })
                ulls[i].addEventListener('click',function(){
                    for (let j = 0; j < formls.length; j++){
                        formls[j].style.display = 'none'
                        ulls[j].style.backgroundColor = '#fff'
                    }
                    formls[i].style.display = 'block'
                    ulls[i].style.backgroundColor = '#ccc'
                })
            }
            document.getElementById('_cdiv_med_screen_special').classList.add('ui-tabs-panel','mlrkon-tabs-panel')
        }
        // 导入css
        let DIYstyle = document.createElement('style')
        DIYstyle.innerHTML = imCSS(res)
        document.head.appendChild(DIYstyle)

        // 添加点击事件---关闭
        
        document.querySelector('.diy_close').addEventListener('click',function(){
            document.body.removeChild(DIYdiv)
            document.head.removeChild(DIYstyle)
            res.props.onClose?.()
        })
        // 添加点击事件---确认
        document.querySelector('.diy_confirm').addEventListener('click',async function(){
            let temp = res.props.onConfirm?.()
            if ( await temp ){
                document.body.removeChild(DIYdiv)
                document.head.removeChild(DIYstyle)
            }
            
        })
        // 添加点击事件---取消
        document.querySelector('.diy_cancel').addEventListener('click',function(){
            document.body.removeChild(DIYdiv)
            document.head.removeChild(DIYstyle)
            res.props.onCancel?.()
        })

        // 是否支持拖拽和是否支持esc键退出
        // if (res.props.draggable === true) drag()
        if (res.props.escClose === true){
                document.onkeyup = function(e){
                // console.log(e);
                if (e.key === 'Escape') {
                    document.body.removeChild(DIYdiv)
                    document.head.removeChild(DIYstyle)
                    res.props.onClose?.()
                }
            }
        }
        
        // 拖拽封装
        // function drag(){
        //     let header = document.querySelector('.diy_header')
        //     let dialog = document.querySelector('.diy_dialog')
        //     header.addEventListener('mousedown',function(e){
        //         e.preventDefault()
        //         // console.log(e.target);
        //         if (e.target === header && e.button === 0){
        //             // console.log(e);
        //             let x = e.clientX  - dialog.offsetLeft
        //             let y = e.clientY - dialog.offsetTop
        //             document.onmousemove = function(evevt) {
        //                 let leftNumber = evevt.clientX - x
        //                 let topNumber = evevt.clientY - y
        //                 // 增加边界限定
        //                 if (leftNumber < dialog.getBoundingClientRect().width / 2) {
        //                     leftNumber = dialog.getBoundingClientRect().width / 2
        //                 }
        //                 else if (leftNumber > document.documentElement.clientWidth - dialog.getBoundingClientRect().width / 2) {
        //                     leftNumber = document.documentElement.clientWidth - dialog.getBoundingClientRect().width / 2
        //                 }
        //                 if (topNumber < dialog.getBoundingClientRect().height / 2) {
        //                     topNumber = dialog.getBoundingClientRect().height / 2
        //                 }
        //                 else if (topNumber > document.documentElement.clientHeight - dialog.getBoundingClientRect().height / 2) {
        //                     topNumber = document.documentElement.clientHeight - dialog.getBoundingClientRect().height / 2
        //                 }
        //                 dialog.style.left = leftNumber + "px";
        //                 dialog.style.top = topNumber + "px";
        //                 return false
        //             }
        //         }
        //     })
        //     document.addEventListener('mouseup',function(){
        //         document.onmousemove = ''
        //     })
        //     // document.body.onmouseout = function(e){
        //     //     document.onmousemove = ''
        //     // }
        // }
    }
}
