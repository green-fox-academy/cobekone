import { SSL_OP_LEGACY_SERVER_CONNECT } from "constants"

class Student {
    constructor() {
        
    }
    learn(){
        console.log('the student is actually learning')
    }

    question(){
        teacher.giveAnswer()
    }
}

class Teacher {
    constructor() {
        
    }
    teach(){
        student.learn()
    }

    giveAnswer(){
        console.log('the teacher is answering a question')
    }
}

let teacher = new Teacher;
let student = new Student;

student.question();
teacher.teach();