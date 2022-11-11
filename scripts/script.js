const course = [{code: "COMM 1116-0", name: "Business Communications",}, {code: "ACIT 1630", "name": "Database Systems",}, {code: "ACIT 1620", name: "Web Fundamental Technologies",}]
var num1 = prompt("Enter a 4-digit number: ");

while ((courseList != code) && (courseList != name)) {
    courseList = prompt(course + " is not valid. Please enter a number: ");
}

if (courseList === num1) {
    num1 = "Yes I am taking the course: " + code + name;
  } else {
    for (let course of course)
    {
        if (course.program === "CIT" && course.GPA > 3)
        {
            counter++;
            console.log(course);
        }
    }
  }
console.log(counter)