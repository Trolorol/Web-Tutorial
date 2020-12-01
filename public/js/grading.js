const calcButton = document.getElementById('')
const restButton = document.getElementById('')

function calculate() {

    const nameInput = document.getElementById('studentname').value
    const unitNameInput = document.getElementById('unitName').value

    const projectGradeInput = document.getElementById('projectGrade').value
    const projectGradePercentageInput = document.getElementById('projectPercentage').value

    const testGradeInput = document.getElementById('testGrade').value
    const testGradePercentageInput = document.getElementById('testPercentage').value

    let projectGrade = projectGradeInput * (projectGradePercentageInput / 100);
    let testGrade = testGradeInput * (testGradePercentageInput / 100);
    let finalResult = Math.round(((testGrade + projectGrade) + Number.EPSILON) * 100) / 100;
    document.getElementById("result").innerHTML = "Student "+nameInput+" obtained "+finalResult+" on the "+unitNameInput+".";
}

function resetResult() {
    document.getElementById("result").innerHTML="";
}
