// //渲染
// function render() {
    

// }
// //添加事件
// function handle() {
    
// }

// function init() {
//     render();
//     handle();
// }

//生成元素 元素？
//级别 1 2 3 


var game = {
    maxLevel : 3,
    gameWidth : 600,
    gameHeight : 600,
    picNum : 20,
    init : function (options) {
        console.log(options);
        
        this.initData(options);
        //this === game
        this.render();
        this.handle();
    },
    initData : function (options) {
        this.el = options.el;
        this.level = options.level > this.maxLevel ? this.maxLevel : options.level;
        this.blocks = (this.level * 2) * (this.level *2);
        this.blockWidth = this.gameWidth / (this.level *2);
        this.blockHeight = this.gameHeight / (this.level *2);
        this.dataArr = this.getDataArr();
    },
    getDataArr : function () {
      var arr = [];
      var halfBlocks = this.blocks / 2;
      for(var i = 0 ; i < halfBlocks; i++){
          var num = i;
          var info = {
              url : 'images' + num + '.png'
          }
          arr.push(info,info);
      }
      return arr;
    },
    getRandomArr : function () {
        var arr = [];
        for(var i = 0 ;i < arr.length; i++){
            
        }
    },
    shuffle : function (arr) {
        return arr.sort(function () {
           return 0.5 - Math.random(); 
        });
    },
    render : function () {
        for(var i = 0 ; i < this.blocks; i++){
            var oBlock = document.createElement('div');
            var oPic = document.createElement('div');
            oBlock.setAttribute('class', 'block');
            oBlock.style.width = this.blockWidth + 'px';
            oBlock.style.height = this.blockHeight + 'px';
            oPic.setAttribute('class', 'pic');
            oBlock.appendChild(oPic);
            this.el.appendChild(oBlock);


        }
    },
    handle : function () {
        var self = this;
        this.el.onclick = function (e) {
            var dom = e.target;
            var isBlock = dom.classList.contains('block');
            if(isBlock){
                self.handleBlock(dom);
            }
        }
    },
    handleBlock : function () {
        dom.classList.add('on');
        var judgeLength = this.judgeArr.push
    }
};