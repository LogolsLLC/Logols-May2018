logols.csharp = logols.csharp || {};

(function () {
    let self = this;
    let levelNumber = 1;
    let maxLevels = logols.levels.length;

    this.initialize = function () {
        level.innerText = "Level " + levelNumber + " of " + maxLevels;
        self.createCodeBox();
        document.getElementById("codeText").addEventListener("input", self.codeChange);
    };

    this.nextClick = function () {
        levelNumber += 1;
        let level = document.getElementById("level");
        self.hideNextButton();
        self.initialize();
    };

    this.codeChange = function () {
        self.compareValues();
    };

    this.compareValues = function () {
        let correctAnswer = logols.levels[levelNumber-1].correctAnswer;
        let value = document.getElementById("codeText").value;
        if (value == correctAnswer) {
            self.writeSuccess();
        }
        else {
            self.writeFailure();
        }
    };

    this.writeSuccess = function () {
        let result = document.getElementById("result");
        if (levelNumber == maxLevels) {
            result.innerText = "You completed all the levels!";
        }
        else { 
            self.showSuccessBox();  
        }
        result.classList.remove("failure");
        result.classList.add("success");
    };

    this.writeFailure = function () {
        self.showFailureBox();
    };

    this.hideNextButton = function () {
        let result = document.getElementById("nextButton");
        result.classList.add("hidden");
    } 

    this.createCodeBox = function () {
        let codeLines = logols.levels[levelNumber-1].codeLines;
        let codeBoxHTML = '';
        let lineNumberHTML = '';
        let lineNumber = 1;
        for (let codeLine of codeLines) {
            lineNumberHTML += '<div class="lineNumber">' + lineNumber + '</div>';
            codeBoxHTML +=  codeLine;
            lineNumber++;
        }

        lineNumberHTML = '<div class="lineNumbers">' + lineNumberHTML + '</div>';
        codeBoxHTML = '<div class="codeBox">' + codeBoxHTML + '</div>';
        let codeBox = document.getElementById("codeContainer");
        codeBox.innerHTML = lineNumberHTML + codeBoxHTML;       
        let testInstructionsHTML = logols.levels[levelNumber-1].textInstructions;
        let textInstructions = document.getElementById("textInstructions");
        textInstructions.innerHTML = testInstructionsHTML;
        let codeText = document.getElementById("codeText");
        codeText.focus();
    }

    this.showSuccessBox = function () {
        document.getElementById("failBox").style.display = 'none';
        let codeBoxHTML = '<div id="successBox">Great!  Keep Going.<div><button id="nextButton">Next</button></div></div>';
        let codeBox = document.getElementById("codeContainer");
        codeBox.innerHTML = codeBoxHTML; 
        let nextButton = document.getElementById("nextButton");
        nextButton.addEventListener("click", self.nextClick);
        nextButton.focus();
    }

    this.showFailureBox = function () {
        document.getElementById("failBox").style.display = 'flex';
    }

}.apply(logols.csharp));