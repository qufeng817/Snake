
//失败了这个点击控制方向的类
class HandClick {

    handclick:HTMLElement;
    up:HTMLElement;
    left:HTMLElement;
    right:HTMLElement;
    down:HTMLElement;

    handkeys:string=' ';
    // _this:any

    constructor() {
        this.handclick=document.getElementById('hand-click')!;
        this.up=this.handclick.querySelector('#up')!;
        this.left=this.handclick.querySelector('#left')!;
        this.right=this.handclick.querySelector('#right')!;
        this.down=this.handclick.querySelector('#down')!;
    }

    //监听点击事件
    handDirection() {
        var _this = this;
        this.up.addEventListener('click',function() {
            _this.handkeys='UP';
             console.log('上 ');
            
        } )
        this.left.addEventListener('click',function() {
            _this.handkeys='Left';
            console.log('左 ');

        } ) 
        this.right.addEventListener('click',function() {
            _this.handkeys='Right';
            console.log('右 ');

        } ) 
        this.down.addEventListener('click',function() {
            _this.handkeys='Down';
            console.log('下');
        } ) 
        console.log('被触发了');
       
    }
    
}

export default HandClick;