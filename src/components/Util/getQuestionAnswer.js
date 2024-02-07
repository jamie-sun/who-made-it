const getQuestionAnswer = (carList, countryList) => {
    const carListKeys = Object.keys(carList);
    const countryListKeys = Object.keys(countryList);

    const getRandomIndex = (array) => {
        return Math.floor(Math.random() * (array.length));
    }

    const createQuestion = () => {
        let questionArray = [];
        let questionIndex = getRandomIndex(carListKeys);
        questionArray.push(carListKeys[questionIndex]);
        questionArray.push(carList[questionArray].origin);
        return questionArray;
    }

    const createAnswers = (answer) => {
        let questionArray = [];
        while (questionArray.length < 3) {
            let answerIndex = getRandomIndex(countryListKeys);
            if (countryListKeys[answerIndex] !== answer && !questionArray.includes(countryListKeys[answerIndex])) {
                questionArray.push(countryListKeys[answerIndex]);
            }
        }
        let insertIndex = getRandomIndex(questionArray);
        questionArray.splice(insertIndex, 0, answer);
        return questionArray
    }

    const question = createQuestion();
    const answerList = createAnswers(question[1]);

    return ([question, answerList]);
}

export default getQuestionAnswer;