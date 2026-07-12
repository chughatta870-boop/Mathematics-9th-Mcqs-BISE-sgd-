const mcqs = [
  // === 2024 - 33 MCQs ===
  {q: "a² - b² =?", options: ["(a-b)²", "(a+b)²", "(a+b)(a-b)", "a²+b²"], ans: 2},
  {q: "3x + 5 = 20 میں x =?", options: ["3", "4", "5", "6"], ans: 2},
  {q: "2 کی طاقت 5 =?", options: ["10", "16", "32", "64"], ans: 2},
  {q: "مربع کی مساحت کا فارمولا؟", options: ["2a", "a²", "4a", "a/2"], ans: 1},
  {q: "دائرے کا محیط =?", options: ["πr²", "2πr", "πd", "2πd"], ans: 1},
  {q: "LCM of 4, 6 =?", options: ["8", "10", "12", "24"], ans: 2},
  {q: "HCF of 12, 18 =?", options: ["3", "4", "6", "9"], ans: 2},
  {q: "x² + 5x + 6 کے فیکٹر؟", options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x+4)(x+2)", "(x+5)(x+1)"], ans: 0},
  {q: "tan 45° =?", options: ["0", "1", "√3", "1/√3"], ans: 1},
  {q: "sin 90° =?", options: ["0", "1/2", "1", "√3/2"], ans: 2},
  {q: "مثلث کے زاویوں کا مجموعہ؟", options: ["90°", "180°", "270°", "360°"], ans: 1},
  {q: "متوازی اضلاع میں مخالف زاویے؟", options: ["برابر", "مکمل", "متتم", "الگ"], ans: 0},
  {q: "نقطہ (0,0) کو کیا کہتے؟", options: ["X-axis", "Y-axis", "Origin", "Quadrant"], ans: 2},
  {q: "y = mx + c میں c کیا ہے؟", options: ["ڈھلان", "Y-intercept", "X-intercept", "فاصلہ"], ans: 1},
  {q: "1 میٹر = ؟ سینٹی میٹر", options: ["10", "100", "1000", "10000"], ans: 1},
  {q: "π کی تقریبی قیمت؟", options: ["3.14", "3.41", "4.13", "2.14"], ans: 0},
  {q: "مکعب کا حجم =?", options: ["6a²", "a³", "3a", "a/3"], ans: 1},
  {q: "احصاء میں ڈیٹا کی درمیانی قیمت؟", options: ["Mode", "Mean", "Median", "Range"], ans: 2},
  {q: "احتمال کی کم سے کم قیمت؟", options: ["0", "1", "-1", "0.5"], ans: 0},
  {q: "2,4,6,8 کا Mean =?", options: ["4", "5", "6", "8"], ans: 1},
  {q: "x + y = 10, x - y = 2 میں x =?", options: ["4", "5", "6", "8"], ans: 2},
  {q: "عمودی زاویے؟", options: ["برابر", "90°", "180°", "360°"], ans: 0},
  {q: "مکمل زاویہ =?", options: ["90°", "180°", "270°", "360°"], ans: 3},
  {q: "متکمل زاویے؟", options: ["90°", "180°", "270°", "360°"], ans: 1},
  {q: "مربع کی 1 سائیڈ 5cm تو محیط؟", options: ["10", "15", "20", "25"], ans: 2},
  {q: "مستطیل کی مساحت =?", options: ["2(l+b)", "l*b", "l+b", "l²"], ans: 1},
  {q: "مخروط کا حجم =?", options: ["πr²h", "1/3πr²h", "4/3πr³", "2πrh"], ans: 1},
  {q: "کروی کا حجم =?", options: ["πr²h", "1/3πr²h", "4/3πr³", "2πrh"], ans: 2},
  {q: "مجموعہ A = {1,2,3} کے عناصر؟", options: ["1", "2", "3", "اوپر سب"], ans: 3},
  {q: "خالی مجموعہ کی علامت؟", options: ["{0}", "{ }", "{1}", "N"], ans: 1},
  {q: "A ∪ B کا مطلب؟", options: ["Intersection", "Union", "Difference", "Complement"], ans: 1},
  {q: "A ∩ B کا مطلب؟", options: ["Intersection", "Union", "Difference", "Complement"], ans: 0},
  {q: "عدہ 1 سے 10 تک کے اعداد؟", options: ["زوج", "فرد", "طبیعی", "صحیح"], ans: 2},

  // === 2025 - 33 MCQs ===
  {q: "(a+b)² =?", options: ["a²+b²", "a²-b²", "a²+2ab+b²", "a²-2ab+b²"], ans: 2},
  {q: "5x - 10 = 0 میں x =?", options: ["1", "2", "3", "5"], ans: 1},
  {q: "3 کی طاقت 4 =?", options: ["12", "27", "81", "243"], ans: 2},
  {q: "دائرے کا رقبہ =?", options: ["2πr", "πr²", "πd", "r²"], ans: 1},
  {q: "LCM of 5, 7 =?", options: ["12", "24", "35", "70"], ans: 2},
  {q: "HCF of 15, 25 =?", options: ["3", "5", "15", "25"], ans: 1},
  {q: "x² - 9 کے فیکٹر؟", options: ["(x-3)²", "(x+3)(x-3)", "(x+9)(x-9)", "x(x-9)"], ans: 1},
  {q: "cos 0° =?", options: ["0", "1", "1/2", "√3/2"], ans: 1},
  {q: "cot 45° =?", options: ["0", "1", "√3", "1/√3"], ans: 1},
  {q: "متساوی الساقین مثلث میں؟", options: ["3 سائیڈ برابر", "2 سائیڈ برابر", "کوئی سائیڈ برابر نہیں", "زاویے برابر"], ans: 1},
  {q: "مستطیل میں ہر زاویہ؟", options: ["60°", "90°", "120°", "180°"], ans: 1},
  {q: "نقطہ (3,4) کس Quadrant میں؟", options: ["1st", "2nd", "3rd", "4th"], ans: 0},
  {q: "y = 2x میں ڈھلان =?", options: ["1", "2", "3", "4"], ans: 1},
  {q: "1 کلومیٹر = ؟ میٹر", options: ["10", "100", "1000", "10000"], ans: 2},
  {q: "مکعب کا کل رقبہ =?", options: ["a²", "6a²", "a³", "4a²"], ans: 1},
  {q: "Mode کا مطلب؟", options: ["اوسط", "درمیانی", "سب سے زیادہ", "فرق"], ans: 2},
  {q: "احتمال کی زیادہ سے زیادہ قیمت؟", options: ["0", "1", "-1", "2"], ans: 1},
  {q: "10,20,30 کا Mean =?", options: ["10", "20", "30", "60"], ans: 1},
  {q: "2x + 3y = 12 میں اگر x=3 تو y =?", options: ["1", "2", "3", "4"], ans: 1},
  {q: "مکمل زاویہ کا 1/4 =?", options: ["45°", "90°", "120°", "180°"], ans: 1},
  {q: "متوازی اضلاع کا رقبہ =?", options: ["b*h", "2(b+h)", "b+h", "b²"], ans: 0},
  {q: "دائرے کا قطر = 14cm تو رداس؟", options: ["7", "14", "21", "28"], ans: 0},
  {q: "سلنڈر کا کل رقبہ =?", options: ["2πr²", "2πrh", "2πr(r+h)", "πr²h"], ans: 2},
  {q: "مجموعہ B = {2,4,6} یہ کیسا مجموعہ؟", options: ["زوج", "فرد", "محدود", "لامحدود"], ans: 2},
  {q: "Universal Set کی علامت؟", options: ["U", "A", "B", "S"], ans: 0},
  {q: "A - B کا مطلب؟", options: ["Union", "Intersection", "Difference", "Complement"], ans: 2},
  {q: "خالی مجموعہ کے Subsets =?", options: ["0", "1", "2", "3"], ans: 1},
  {q: "صحیح اعداد میں صفر؟", options: ["شامل", "شامل نہیں", "فرد", "زوج"], ans: 0},
  {q: "کسری اعداد کی مثال؟", options: ["1/2", "2", "0", "-1"], ans: 0},
  {q: "مطلق قیمت | -5 | =?", options: ["-5", "5", "0", "10"], ans: 1},
  {q: "مربع جذر 81 =?", options: ["7", "8", "9", "10"], ans: 2},
  {q: "مکعب جذر 27 =?", options: ["2", "3", "4", "9"], ans: 1},
  {q: "معیاری فارم 5000 =?", options: ["5x10²", "5x10³", "5x10⁴", "50x10²"], ans: 1},

  // === 2026 - 34 MCQs SNC نیا پیٹرن ===
  {q: "متغیر کی مثال؟", options: ["5", "x", "10", "2"], ans: 1},
  {q: "Coefficient of 5x =?", options: ["x", "5", "0", "1"], ans: 1},
  {q: "Constant Term in 3x+7 =?", options: ["3", "x", "7", "10"], ans: 2},
  {q: "Linear Equation کی ڈگری؟", options: ["0", "1", "2", "3"], ans: 1},
  {q: "Quadratic Equation کی مثال؟", options: ["x+2=0", "x²+3x+2=0", "x³=0", "2x=4"], ans: 1},
  {q: "مجموعہ کے اجزاء کو کیا کہتے؟", options: ["Points", "Elements", "Numbers", "Lines"], ans: 1},
  {q: "Subset کی علامت؟", options: ["∈", "⊂", "∪", "∩"], ans: 1},
  {q: "Venn Diagram کس نے بنایا؟", options: ["نیوٹن", "وین", "آئنسٹائن", "پیتھاگورس"], ans: 1},
  {q: "مستقیم کا ڈھلان فارمولا؟", options: ["y2-y1/x2-x1", "x2-x1/y2-y1", "x+y", "x-y"], ans: 0},
  {q: "X-axis پر y =?", options: ["0", "1", "x", "کوئی بھی"], ans: 0},
  {q: "Y-axis پر x =?", options: ["0", "1", "y", "کوئی بھی"], ans: 0},
  {q: "فاصلے کا فارمولا؟", options: ["√(x2-x1)²+(y2-y1)²", "x+y", "xy", "x/y"], ans: 0},
  {q: "نقطہ وسط کا فارمولا؟", options: ["(x1+x2)/2,(y1+y2)/2", "x+y", "xy", "x-y"], ans: 0},
  {q: "مربع میں قطر؟", options: ["برابر", "الگ", "90°", "180°"], ans: 0},
  {q: "مثلث کی مساحت =?", options: ["1/2*b*h", "b*h", "2*b*h", "b+h"], ans: 0},
  {q: "فیثاغورس تھیورم؟", options: ["a²+b²=c²", "a+b=c", "ab=c", "a/b=c"], ans: 0},
  {q: "30°-60°-90° مثلث میں بڑی سائیڈ؟", options: ["2", "√3", "1", "1/2"], ans: 0},
  {q: "Trigonometry کس زبان کا لفظ؟", options: ["عربی", "یونانی", "لاطینی", "فارسی"], ans: 1},
  {q: "sin θ =?", options: ["P/B", "P/H", "B/H", "H/P"], ans: 1},
  {q: "cos θ =?", options: ["P/B", "P/H", "B/H", "H/P"], ans: 2},
  {q: "tan θ =?", options: ["P/B", "P/H", "B/H", "H/P"], ans: 0},
  {q: "Sec θ =?", options: ["1/cos", "1/sin", "1/tan", "1/cot"], ans: 0},
  {q: "ڈیٹا جمع کرنے کا طریقہ؟", options: ["Observation", "Interview", "Questionnaire", "اوپر سب"], ans: 3},
  {q: "Pie Chart کس لیے؟", options: ["مقابلہ", "حصہ", "وقت", "فاصلہ"], ans: 1},
  {q: "Bar Graph کی شکل؟", options: ["دائرہ", "لکیر", "ستون", "نقطہ"], ans: 2},
  {q: "Histogram میں کیا؟", options: ["فاصلہ", "فریکوئنسی", "وقت", "رقبہ"], ans: 1},
  {q: "Range =?", options: ["Max-Min", "Max+Min", "Max/Min", "Max*Min"], ans: 0},
  {q: "Probability =?", options: ["Favorable/Total", "Total/Favorable", "Favorable*Total", "Total-Favorable"], ans: 0},
  {q: "تاش میں Badshah کے امکان؟", options: ["1/13", "1/52", "4/52", "1/4"], ans: 0},
  {q: "سکہ اچھالنے پر Head کا امکان؟", options: ["0", "1/2", "1", "2"], ans: 1},
  {q: "Permutation کا فارمولا؟", options: ["n!", "nCr", "nPr", "n²"], ans: 0},
  {q: "Combination کی علامت؟", options: ["nP_r", "nC_r", "n!", "r!"], ans: 1},
  {q: "Matrix میں قطار؟", options: ["Column", "Row", "Diagonal", "Scalar"], ans: 1},
  {q: "2x2 Matrix کے عناصر؟", options: ["2", "3", "4", "5"], ans: 2}
];

let current = 0; let score = 0; let shuffled = [];
window.onload = function() { shuffled = mcqs.sort(() => Math.random() - 0.5); loadQuestion(); }
function loadQuestion() {
  document.getElementById("result").innerText = "";
  if(current >= shuffled.length) {
    document.getElementById("question").innerText = "🎉 100 MCQs مکمل! 🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("score").innerText = "فائنل سکور: " + score + " / " + shuffled.length;
    return;
  }
  let q = shuffled[current];
  document.getElementById("question").innerText = "سوال " + (current+1) + ": " + q.q;
  let optionsDiv = document.getElementById("options"); optionsDiv.innerHTML = "";
  q.options.forEach((opt, i) => {
    let btn = document.createElement("button"); btn.innerText = opt; btn.className = "option-btn";
    btn.onclick = () => checkAnswer(i, btn); optionsDiv.appendChild(btn);
  });
  document.getElementById("score").innerText = "Score: " + score + " / " + current;
  document.getElementById("nextBtn").style.display = "inline-block";
}
function checkAnswer(i, btn) {
  let allBtns = document.querySelectorAll(".option-btn"); allBtns.forEach(b => b.disabled = true);
  if(i == shuffled[current].ans) {
    score++; btn.style.background = "#16a34a"; btn.style.color = "white";
    document.getElementById("result").innerText = "✅ شاباش! صحیح جواب";
  } else {
    btn.style.background = "#dc2626"; btn.style.color = "white";
    allBtns[shuffled[current].ans].style.background = "#16a34a"; allBtns[shuffled[current].ans].style.color = "white";
    document.getElementById("result").innerText = "❌ غلط! صحیح جواب: " + shuffled[current].options[shuffled[current].ans];
  }
  document.getElementById("score").innerText = "Score: " + score + " / " + (current+1);
}
document.getElementById("nextBtn").onclick = () => { current++; loadQuestion(); }
if('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }
