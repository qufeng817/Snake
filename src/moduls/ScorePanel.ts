//定义计分板
class ScorePanel {
    score=0;
    level=1;

    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    // 设置限制等级和升级分数 
    //一些参数：尽量不要直接写数字，方便后续修改
    maxLevel:number;
    upScore:number;

    constructor(maxLevel:number=10,upScore:number= 5) {
        this.scoreEle= document.getElementById('score')!;
        this.levelEle= document.getElementById('level')!;
        this.maxLevel=maxLevel;
        this.upScore=upScore;

    }

    addScore(){
        this.scoreEle.innerHTML= ++this.score + '';
        if(this.score % this.upScore ==0) {
            this.levelUp();
            alert('  小曲真棒！！ ')
        }
    }

    levelUp() {
        if (this.level<this.maxLevel) {
        this.levelEle.innerHTML= ++this.level + '';
        }
    }
}
export default ScorePanel;
// 测试代码
// const scorePanel = new ScorePanel()
// for (let i = 0; i < 10; i++) {
//     scorePanel.addScore()
// }