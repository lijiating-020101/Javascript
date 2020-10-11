//每个队伍的得分
let Mscore = [116,94,123]
let Jscore = [89,120,103]
let Maryscore = [97,134,105]

//各队总分
let ScoreM = 0;
let ScoreJ = 0;
let ScoreMary = 0;

//平均分
let AVGM = 0;
let AVGJ = 0;
let AVGMary = 0;

//计算总分
//Mike队伍
for(let i = 0;i<Mscore.length;i++){
    ScoreM = ScoreM + Mscore[i]
}

//John队伍
for(let i = 0;i<Jscore.length;i++){
    ScoreJ = ScoreJ + Jscore[i]
}

//Mary队伍
for(let i = 0;i<Maryscore.length;i++){
    ScoreMary = ScoreMary + Maryscore[i]
}

//计算平均分
//Mike队伍平均分
AVGM = ScoreM/Mscore.length
console.log("Mike队的平均分为："+AVGM)
//John
AVGJ = ScoreJ/Jscore.length
console.log("John队的平均分为："+AVGJ)
//Mary队伍平均分
AVGMary = ScoreMary/Maryscore.length
console.log("Mary队的平均分为："+AVGMary)

//判断哪个队伍获胜
if(AVGM > AVGJ && AVGM >AVGMary){
    console.log("Mike队伍获胜，得分为："+AVGM)
}else if(AVGJ > AVGM && AVGJ > AVGMary){
    console.log("John队伍获胜，得分为："+AVGJ)
}else if(AVGMary > AVGJ & AVGMary > AVGM){
    console.log("Mary队伍获胜，得分为："+AVGMary)
}else if(AVGM == AVGJ && AVGM > AVGMary){
    console.log("Mike队与John队同时获胜，得分为："+AVGM)
}else if(AVGM == AVGMary && AVGM > AVGJ){
    console.log("Mike队与Mary队同时获胜，得分为："+AVGM)
}else if(AVGJ == AVGMary & AVGJ >AVGM){
    console.log("John队与Mary队同时获胜，得分为："+AVGJ)
}else{
    console.log("三对平局，得分为："+AVGM)
}