// 單字測驗資料
const fullQuizData = [
    { word: "a", options: ["一個", "很多", "這個", "那個"], correct: 0 },
    { word: "A.M.", options: ["下午", "上午", "晚上", "中午"], correct: 1 },
    { word: "ability", options: ["能力", "態度", "外表", "性格"], correct: 0 },
    { word: "able", options: ["無能的", "能夠的", "困難的", "軟弱的"], correct: 1 },
    { word: "about", options: ["遠離", "經過", "關於", "穿過"], correct: 2 },
    { word: "above", options: ["下面", "旁邊", "上面", "裡面"], correct: 2 },
    { word: "abroad", options: ["國內", "海邊", "山上", "國外"], correct: 3 },
    { word: "absent", options: ["缺席的", "出席的", "準時的", "積極的"], correct: 0 },
    { word: "accept", options: ["拒絕", "接受", "放棄", "忽略"], correct: 1 },
    { word: "accident", options: ["計畫", "意外", "活動", "慶祝"], correct: 1 },
    { word: "achieve", options: ["放棄", "失敗", "達到", "忘記"], correct: 2 },
    { word: "across", options: ["橫過", "直行", "轉彎", "迴轉"], correct: 0 },
    { word: "act", options: ["休息", "思考", "表演", "睡覺"], correct: 2 },
    { word: "action", options: ["想法", "行動", "夢想", "計畫"], correct: 1 },
    { word: "active", options: ["懶惰的", "活躍的", "安靜的", "憂鬱的"], correct: 1 },
    { word: "activity", options: ["休息", "活動", "睡眠", "放鬆"], correct: 1 },
    { word: "actor", options: ["觀眾", "導演", "演員", "作家"], correct: 2 },
    { word: "actress", options: ["女演員", "女歌手", "女老師", "女醫生"], correct: 0 },
    { word: "actually", options: ["可能", "或許", "實際上", "也許"], correct: 2 },
    { word: "add", options: ["減少", "加上", "除以", "乘以"], correct: 1 },
    { word: "addition", options: ["減法", "除法", "加法", "乘法"], correct: 2 },
    { word: "address", options: ["時間", "地址", "名字", "年齡"], correct: 1 },
    { word: "admire", options: ["討厭", "欽佩", "忽視", "批評"], correct: 1 },
    { word: "admit", options: ["否認", "承認", "拒絕", "懷疑"], correct: 1 },
    { word: "adopt", options: ["遺棄", "領養", "販賣", "租借"], correct: 1 },
    { word: "adult", options: ["小孩", "成年人", "青少年", "嬰兒"], correct: 1 },
    { word: "advance", options: ["後退", "前進", "停止", "等待"], correct: 1 },
    { word: "advantage", options: ["缺點", "優點", "平等", "普通"], correct: 1 },
    { word: "adventure", options: ["平靜", "冒險", "無聊", "例行"], correct: 1 },
    { word: "advertisement", options: ["新聞", "廣告", "小說", "報導"], correct: 1 },
    { word: "advice", options: ["命令", "建議", "威脅", "懲罰"], correct: 1 },
    { word: "advise", options: ["命令", "建議", "強迫", "處罰"], correct: 1 },
    { word: "affair", options: ["事務", "娛樂", "遊戲", "運動"], correct: 0 },
    { word: "affect", options: ["影響", "效果", "結果", "原因"], correct: 0 },
    { word: "afraid", options: ["勇敢的", "害怕的", "興奮的", "生氣的"], correct: 1 },
    { word: "after", options: ["之前", "之後", "現在", "同時"], correct: 1 },
    { word: "afternoon", options: ["早上", "中午", "下午", "晚上"], correct: 2 },
    { word: "again", options: ["從不", "再次", "永遠", "經常"], correct: 1 },
    { word: "against", options: ["支持", "反對", "同意", "贊成"], correct: 1 },
    { word: "age", options: ["身高", "年齡", "體重", "長度"], correct: 1 },
    { word: "ago", options: ["以前", "現在", "之後", "將來"], correct: 0 },
    { word: "agree", options: ["反對", "同意", "懷疑", "拒絕"], correct: 1 },
    { word: "ahead", options: ["後面", "前面", "旁邊", "中間"], correct: 1 },
    { word: "aid", options: ["阻礙", "幫助", "破壞", "干擾"], correct: 1 },
    { word: "aim", options: ["放棄", "目標", "失敗", "混亂"], correct: 1 },
    { word: "air", options: ["水", "空氣", "土地", "火"], correct: 1 },
    { word: "air conditioner", options: ["電扇", "冷氣機", "暖氣", "除濕機"], correct: 1 },
    { word: "aircraft", options: ["汽車", "飛機", "船", "火車"], correct: 1 },
    { word: "airline", options: ["鐵路", "航空公司", "巴士公司", "輪船公司"], correct: 1 },
    { word: "airplane", options: ["直升機", "飛機", "熱氣球", "風箏"], correct: 1 },
    { word: "airport", options: ["車站", "機場", "碼頭", "公園"], correct: 1 }
];

// 從題庫中隨機選取10題
function getRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 初始化測驗題目
const quizData = getRandomQuestions(fullQuizData, 10);

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;
let isAnswered = false;
let userAnswers = []; // 儲存使用者的答案

const wordElement = document.getElementById('word');
const speakerElement = document.getElementById('speaker');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const resultMessage = document.getElementById('result-message');
const quizElement = document.getElementById('quiz');

// 語音合成
const speech = window.speechSynthesis;

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speech.speak(utterance);
}

function startTimer() {
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1); // 時間到，視為答錯
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showFinalResults();
        return;
    }

    const currentQuizData = quizData[currentQuestion];
    wordElement.textContent = currentQuizData.word;
    
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(index);
        optionsElement.appendChild(optionDiv);
    });

    isAnswered = false;
    nextButton.style.display = 'none';
    resultMessage.style.display = 'none';
    resultMessage.className = 'result-message';
    startTimer();
}

function checkAnswer(selectedIndex) {
    if (isAnswered) return;
    
    clearInterval(timer);
    isAnswered = true;
    const options = document.querySelectorAll('.option');
    const correctAnswer = quizData[currentQuestion].correct;

    // 儲存答案資訊
    userAnswers.push({
        word: quizData[currentQuestion].word,
        userAnswer: selectedIndex === -1 ? '未作答' : quizData[currentQuestion].options[selectedIndex],
        correctAnswer: quizData[currentQuestion].options[correctAnswer],
        isCorrect: selectedIndex === correctAnswer
    });

    if (selectedIndex === correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score += 10;
        scoreElement.textContent = `得分: ${score}`;
        resultMessage.innerHTML = '<div class="result-icon">✓</div>答對了！<div class="points">+10分</div>';
        resultMessage.classList.add('result-correct');
    } else {
        if (selectedIndex !== -1) {
            options[selectedIndex].classList.add('wrong');
        }
        options[correctAnswer].classList.add('correct');
        resultMessage.innerHTML = '<div class="result-icon">✗</div>答錯了！<div>正確答案是：' + 
            quizData[currentQuestion].options[correctAnswer] + '</div>';
        resultMessage.classList.add('result-wrong');
    }
    
    resultMessage.style.display = 'block';
    
    // 2秒後自動進入下一題
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 2000);
}

function showFinalResults() {
    // 隱藏測驗界面元素
    document.querySelector('.timer').style.display = 'none';
    document.querySelector('.word-section').style.display = 'none';
    document.querySelector('.options').style.display = 'none';
    resultMessage.style.display = 'none';
    nextButton.style.display = 'none';

    // 創建結果表格
    let resultsHTML = `
        <div class="final-results">
            <h2>測驗結束！</h2>
            <h3>最終得分：${score} / 100</h3>
            <div class="results-table">
                <table>
                    <thead>
                        <tr>
                            <th>題號</th>
                            <th>單字</th>
                            <th>您的答案</th>
                            <th>正確答案</th>
                            <th>結果</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    userAnswers.forEach((answer, index) => {
        resultsHTML += `
            <tr class="${answer.isCorrect ? 'correct-row' : 'wrong-row'}">
                <td>${index + 1}</td>
                <td>${answer.word}</td>
                <td>${answer.userAnswer}</td>
                <td>${answer.correctAnswer}</td>
                <td>${answer.isCorrect ? '✓' : '✗'}</td>
            </tr>
        `;
    });

    resultsHTML += `
                    </tbody>
                </table>
            </div>
            <button onclick="location.reload()">重新測驗</button>
        </div>
    `;

    quizElement.innerHTML = resultsHTML;
}

// 發音按鈕事件
speakerElement.addEventListener('click', () => {
    speak(quizData[currentQuestion].word);
});

// 載入第一題
loadQuestion();
