//获取视口尺寸
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode === "CSS1Compat") {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        } else {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        }
    }
}


//实现inserAfter方法
Element.prototype.insertAfter = function(targetNode, afterNode) {
    var beforeNode = afterNode.nextElementSibling;
    if (beforeNode == null) {
        this.appendChild(targetNode);
    } else {
        this.insertBefore(targetNode, beforeNode);
    }
}
var div = document.getElementsByTagName('div')[0];
var p = document.getElementsByTagName('p')[0];
var span = document.createElement('span');
span.setAttribute('class', 'qaq');

// 标签逆序
function res(div) {
    var len = div.children.length;
    var child = div.children;
    for (var i = len - 2; i >= 0; i--) {
        div.appendChild(child[i]);
    }
}
//获取所有的元素节点
function retElementChild(node) {
    var arr = [],
        len = node.childNodes.length;
    for (var i = 0; i < len; i++) {
        if (node.childNodes[i].nodeType === 1) {
            arr.push(node.childNodes[i]);
        }

    }
    return arr;

}

//查询样式所有浏览器兼容
function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

//不同浏览器兼容给dom添加事件
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function() {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}

// 取消冒泡事件
function stopBubble(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.stopBubble = true;
    }
}

//取消默认事件
function cancelHanler(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

//让事件随着鼠标移动
function drag(elem) {

    var disX,
        disY;


    elem.onmousedown = function(e) {

        disX = e.pageX - parseInt(elem.style.left);
        disY = e.pageY - parseInt(elem.style.top);

        document.onmousemove = function(e) {
            var event = e || window.event;
            // console.log(e.pageX + "" + e.pageY);
            elem.style.left = event.pageX - disX + "px";
            elem.style.top = event.pageY - disY + "px";
        }

        document.onmouseup = function() {
            document.onmousemove = null;
        }
    }

}

//异步加载js所有浏览器适用
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState == "complete" || script.readyState == "loaded") {
                callback();
            }
        }
    } else {
        script.onload = function() {
            callback();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}

function test() {
    console.log('a');
}

//字符串去重返回，数组去重
function deWeight(str) {
    var obj = {};
    var arr = [];
    var len = str.length;
    for (var i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[[str[i]]] = 'la';
            arr.push(this.str[i]);
        }
    }
    // return arr.join('');
    return arr;
}