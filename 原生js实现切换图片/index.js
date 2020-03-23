//  1.把图片的地址放到数组里，取索引值，取相应的地址
//  2.吧地址放到img里 ， 同时切换数组的索引
// [one,two,three,four,five]
//  1  , 2  , 3 , 4,  5
// 3.上下按钮点击，index++ 取到不同的地址


(function () { //代码块  立即执行函数 命名空间

    var imgArr = ['/images/a1.jpg', '/images/a2.jpg', '/images/a3.jpg', '/images/a4.jpg', '/images/a5.jpg'];

    var imgNode = document.getElementById('imgData'),
        prevNode = document.getElementsByClassName('prev')[0],
        nextNode = document.getElementsByClassName('next')[0],
        numBtn = document.getElementById('numBtn'),
        circuleNode = document.getElementsByClassName('cirulate')[0],
        acyclicNode = document.getElementsByClassName('acyclic')[0];

    function TunPicture(arr) {
        this.index = 0;
        this.len = arr.length - 1;
        this.bool = true;
    }
    TunPicture.prototype = {
        prev: function () {
            this.index--;
            if (this.bool) { //非循环状态
                // if (this.index < 0) {
                //     this.index = 0;
                // }
                this.index = this.index < 0 ? 0 : this.index;
            } else {  //循环状态下
                // if (this.index < 0) {
                //     this.index = this.len;
                // }
                this.index = this.index < 0 ? this.len : this.index;
            }
            return this.index;
        },
        next: function () {
            this.index++;
            if (this.bool) {
                // if (this.index > this.len) {
                //     this.index = this.len;
                // }
                this.index = this.index > this.len ? this.len : this.index;
            } else {
                // if (this.index > this.len) {
                //     this.index = 0;
                // }
                this.index = this.index > this.len ? 0 : this.index;
            }
            return this.index;
        }
    }
    var turnIndex = new TunPicture(imgArr);
    // imgNode.src = imgArr[n];
    // var index = 0;
    // var bool = false; //循环状态下

    prevNode.onclick = function () { //
        var index = turnIndex.prev();
        // if (bool) { //非循环状态
        //     if (index < 0) {
        //         index = 0;
        //     }
        // }else{  //循环状态下
        //     if (index < 0) {
        //         index = (imgArr.length - 1);
        //     }
        // }

        imgNode.src = imgArr[index];
        numBtn.innerHTML = (index + 1) + '/' + imgArr.length;

    }
    nextNode.onclick = function () { //
        // index++;
        // if (bool) {
        //     if (index > (imgArr.length - 1)) {
        //         index = (imgArr.length - 1);
        //     }
        // }else{
        //     if (index > (imgArr.length - 1)) {
        //         index = 0;
        //     }
        // }
        var index = turnIndex.next();
        imgNode.src = imgArr[index];
        numBtn.innerHTML = (index + 1) + '/' + imgArr.length;

    }
    circuleNode.onclick = function () {
        turnIndex.bool = false; //循环
        this.style.backgroundColor = 'yellowgreen';
        acyclicNode.style.backgroundColor = 'blue';
    }
    acyclicNode.onclick = function () {
        turnIndex.bool = true;
        this.style.backgroundColor = 'yellowgreen';
        circuleNode.style.backgroundColor = 'blue';
    }
})()