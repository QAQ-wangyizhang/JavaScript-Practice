


var banner = {
    curIndex : 0,
    el : document.getElementById('app'),
    init : function () {
      this.initData();
      this.startMove();
      this.handle();
    },
    initData : function () {
       this.oBannerList = this.el.getElementsByClassName('banner-list')[0];
       this.bannerWidth = this.oBannerList.children[0].offsetWidth;

       this.bannerLength = this.oBannerList.children.length;
       this.oIndexMap = this.el.getElementsByClassName('index');
       this.oIndexActive = this.el.getElementsByClassName('index active')[0];
    },
    autoMove : function () {
        // this.curIndex ++;
        this.oBannerList.style.left = -this.bannerWidth * ++ this.curIndex + 'px';
        // this.startMove();
        this.changeIndex();
    },
    startMove : function () {
        setTimeout(this.autoMove.bind(this), 1500);
    },
    changeIndex : function () {
        var curIndex = this.curIndex % (bannerLength - 1);
        this.oIndexMap[curIndex].classList.add('active');
        this.oIndexActive.classList.remove('active');
        this.oIndexActive = this.oIndexMap[curIndex];
    },
    handle : function () {
        this.handleTransition();
    },
    handleTransition : function () {
        var self = this;
        this.oBannerList.addEventListener('transitionend',function () {
            if (self.curIndex === self.bannerLength - 1) {
               self.oBannerList.style.left = 0;
               self.oBannerList.style.transition = 'none';
               self.curIndex = 0;
            }
            if (self.oBannerList.offsetLeft === 0) {
                self.oBannerList.style.transition = 'left .3s';
            }
            self.startMove();
        })
    },

}
banner.init();