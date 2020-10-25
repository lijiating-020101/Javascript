/*作业1
小明和他家人在泰国旅游，到3个不同的饭店吃饭。账单(bill)分别是124元、48元和268元。
为了给服务员小费(tip)，小明创建了一个简单的小费计算器函数(tipCalculator)。如果账单小于50元，他会给账单的20%作为小费;如果账单在50到200元之间，他会给账单的 15%作为小费;如果账单超过200元，他会给账单的10%作为小费。
小明想要⒉个数组:1)一个数组包含所有三个小费（每个账单一个)﹔2)一个数组包含所有三个最终支付的金额（账单＋小费)。
最后把这2个数组输出到控制台。
 */
const tipCalculator = bills => {
    const tips = []
    const spands = []
    bills.forEach(bill =>{
        let tip;
        if (bill < 50){
            tip = bill * 0.2
        }else if (bill >= 50 && bill < 200){
            tip = bill * 0.15
        }else{
            tip = bill * 0.1
        }
        const spand = bill + tip
        tips.push(tip)
        spands.push(spand)
    })
    console.log(tips,spands)
}
tipCalculator([124,48,268])

/*作业2
假设有三个数a、b、c，求这三个数的平均值的函数为∶
function mean(a, b，c) {
return (a + b + c)/ 3;
1)如果要求任意个数的数字的平均值，该如何改进这个函数呢?请编写改进的
mean1()〕函数，让该函数可以计算任意个数的数字的平均值。
提示:使用扩展运算符
2）请编写函数mean2()，使用数组的reduce()函数改写mean1() )，让代码更
佳精简。
3）请在第二步的基础上编写函数mean3()，实现只对数组中的偶数求平均值。提示:使用回调函数和map()。
 */
// 第一题
let avg = function mean1(...sum) {
    var sum = 0;
    var d = arguments.length;
    for(i=0;i<d;i++){
        sum += Number (arguments[i]);
    }
    return sum/d;
};
console.log("平均值：" + avg(2,6,6,9,15));