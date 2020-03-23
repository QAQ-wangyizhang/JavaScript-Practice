//一个算法
function getDir(ev, box) { //获取鼠标进入的方向(事件对象， li标签)
    //返回元素的尺寸以及位置信息
    var t = box.getBoundingClientRect().top;
    var l = box.getBoundingClientRect().left;
    var w = box.getBoundingClientRect().width;
    var h = box.getBoundingClientRect().height;

    //w = 100 h = 60 60/100 = 3/5 高占宽的比例
    var x = (ev.clientX - l - w / 2) * (w > h ? (h / w) : 1); //宽比高大（横着的长方形）
    var y = (ev.clientY - t - h / 2) * (h > w ? (w / h) : 1); //高比宽大（竖着的长方形）

    var deg = Math.atan2(y, x) / (Math.PI / 180); //弧度转角度
    //atan2 -180 到 180

    var d = (Math.round((deg + 180) / 90) + 3) % 4; //鬼才算法
    //  console.log(d);
    return d; //方向 上0右1下2左3
}
var lis = document.getElementsByTagName('li');
var ps = document.getElementsByTagName('p');
var pos = [{ left: 0, top: '-100%' }, { left: '100%', top: 0 }, { left: 0, top: '100%' }, { left: 0, top: '-100%' }, { left: '-100%', top: 0 }];

for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseenter = function (ev) {
        // console.log(getDir(ev,box));
        // console.log(getDir(ev, this));
        var dir = getDir(ev,this);
        ps[i].style.transition = '';
        ps[i].style.left = pos[dir].left;
        ps[i].style.top = pos[dir].top;

        //异步执行
        setTimeout(() => {
            ps[i].style.transition = '.3s';
            ps[i].style.left = 0;
            ps[i].style.top = 0;
        }, 16); //1000 / 60 60hz
        
    }
    lis[i].onmouseleave = function (ev) {
        var dir = getDir(ev,this);
        setTimeout(() => {
            ps[i].style.left = pos[dir].left;
            ps[i].style.top = pos[dir].top;
        }, 100);
    }
}