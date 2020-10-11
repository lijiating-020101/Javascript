// mass是体重，单位为kg；height为身高，单位为m
// 体重指数计算公式：BMI = mass / height^2 = mass / (height * height)
// Mmass是Mark体重，Mheight是Mark身高；Jmass是John体重，Jheight是John身高

// 定义Mark与John身高和体重
let Mmass = 189 , Mheight = 71;
let Jmass = 183 , Jheight = 69;
//计算BMI
let MBIM = Mmass / (Mheight * Mheight);
let JBIM = Jmass / (Jheight * Jheight);
//输出BMI
console.log("Mark的BIM值为:",MBIM);
console.log("John的BIM值为:",JBIM);
//比较BMI
let BMI = (MBIM > JBIM ? "Mark高" : "Jonh高");
console.log(BMI);