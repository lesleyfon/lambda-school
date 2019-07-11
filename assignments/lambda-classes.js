// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// Instructor class

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo (subjectStr){
        return `Today we are learning about ${subjectStr}' where subject is the param passed in.`;
    }
    grade(studentObj, subjectStr){
        return `${studentObj.name} receives a perfect score on ${subjectStr}`;
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.favSubject = attributes.favSubject;
       
    }
    listsStudents(){
       return `${this.favSubject}`; 
    }
    pRAssignment(student){
        return  `${student.name}has submitted a PR for ${this.name}`;
    }
    sprintChallenge(student){
        return  `${student.name}has begun sprint challenge on ${subject}`;
    }
}

class TeamLeads extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name}  announces to ${slackChannel}, @channel standy times!​​​​​`
    }
    debugsCode(studentObj){
        return `${this.name} debugs ${studentObj.name}'s code on ${this.specialty}`
    }
}


