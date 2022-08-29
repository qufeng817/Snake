//引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制器，控制其他类
class GameControl {

    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;

    direction:string = 'Right';
    isLive = true;

    //点击事件
    handclick:HTMLElement;
    up:HTMLElement;
    left:HTMLElement;
    right:HTMLElement;
    down:HTMLElement;
    // handkeys:string=' ';

    constructor() {
        this.snake=new Snake();
        this.food=new Food();
        this.scorePanel=new ScorePanel();

        this.handclick=document.getElementById('hand-click')!;
        this.up=this.handclick.querySelector('#up')!;
        this.left=this.handclick.querySelector('#left')!;
        this.right=this.handclick.querySelector('#right')!;
        this.down=this.handclick.querySelector('#down')!;

        this.init();
    }

    //初始化
    init() {
        // 绑定键盘事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))

        var _this = this;
        this.up.addEventListener('click',function() {
            _this.direction='Up';
            //  console.log('上 ');
        } )
        this.left.addEventListener('click',function() {
            _this.direction='Left';
        } ) 
        this.right.addEventListener('click',function() {
            _this.direction='Right';
        } ) 
        this.down.addEventListener('click',function() {
            _this.direction='Down';
        } ) 

        this.run()

    }

    //键盘响应函数
    keydownHandler(event:KeyboardEvent) {
    //    console.log(event.key);
    if(event.key=="ArrowUp"||event.key=="Up"||event.key=="ArrowDown"||event.key=="Down"||event.key=="ArrowLeft"||event.key=="Left"||event.key=="ArrowRight"||event.key=="Right") {
       this.direction=event.key;
    }

    }
    //蛇运动的方向 
    run(){
        let X=this.snake.X;
        let Y=this.snake.Y;
        
        switch(this.direction) {
            case "ArrowUp":
            case "Up":
                Y -=10;
                break;
            case "ArrowDown":
            case "Down":
                Y +=10;
                break;  
            case "ArrowLeft":
            case "Left":
                X -=10;
                break; 
            case "ArrowRight":
            case "Right":
                X +=10;
                break;         
        }

        //是否吃到食物
        this.checkEat(X,Y)

        //修改蛇X与Y值
        try {
            this.snake.X=X;
            this.snake.Y=Y; 
        } catch (e:any) {
            alert(e.message+'GAME OVER!')
            this.isLive = false
        }

        this.isLive && setTimeout(this.run.bind(this),270 - (this.scorePanel.level-1)*20);
    }

    //定义一个方法，用来监测蛇是否吃到食物
    checkEat(X:number,Y:number){
        if (X===this.food.X && Y===this.food.Y) {
            // console.log('吃到了'); 
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
            
        }
    }
}

export default GameControl;