
let student = [
    {fName: "John", lName: "Micky", percentage: 95+"%", grade: "A"},
    {fName: "Tony", lName: "Morgan", percentage: 65+"%", grade: "C"},

];

function drawTable()
{
    student.sort(sortByGrade);

    let theTable = $("tbody");

    theTable.empty();

    const start = 0;
    const stop = student.length;
    for(let i = start; i < stop; i++)
    {
        let anItem = student[i];

        let tableRow = $("<tr>");

        theTable.append(tableRow);

        let FNameCell = $("<td>");
        tableRow.append(FNameCell);
        FNameCell.text(anItem.fName);

        let lNameCell = $("<td>");
        tableRow.append(lNameCell);
        lNameCell.text(anItem.lName);

        let percentageCell = $("<td>");
        tableRow.append(percentageCell);
        percentageCell.text(anItem.percentage);

        let gradeCell = $("<td>");
        tableRow.append(gradeCell);
        gradeCell.text(anItem.grade);

    }
}


function addStudentGrade(event)
{
    event.preventDefault();


    let pointE = parseFloat($("#pointEarned").val());
    let pointP = parseFloat($("#pointPossible").val());

    let studentFName = $("#firstName").val();
    let studentLName = $("#lastName").val();
    let studentPercent = Math.round(pointE / pointP * 100);
    let studentGrade ="";
    if (studentPercent >=90){
        studentGrade = "A";
    }else if (studentPercent >= 80){
        studentGrade = "B";
    }else if (studentPercent >= 0){
        studentGrade = "C";
    }else
        studentGrade= "Undefined";
   let newStudent = {
    fName: studentFName    // create object w/property
   };
   newStudent.lName = studentLName;  // add property to object
   newStudent.percentage = studentPercent + "%";
   newStudent.grade = studentGrade;

    student.push(newStudent);

    drawTable();
}

function sortByGrade(a, b)
{
    if (a.grade < b.grade)
        return -1;
    else if (a.grade > b.grade)
        return 1;
    else {
        // if grade are the same, check name
        if(a.fName < b.fName)
            return -2;
        else if (a.fName > b.fName)
            return 2;
        else
            return 0;
    }
}



$(document).ready(function() {
    $("button").click(addStudentGrade);

    drawTable();


});





















