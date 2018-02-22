export class Student {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  year: string;
  school: string;
  major: string;
  canTutor: string[];
  password: string;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phone = "";
    this.bio = "";
    this.year = "";
    this.school = "";
    this.major = "";
    this.canTutor = [];
    this.password = "";
  }

/*
  constructor(fName: string, lName: string, email: string, year: string, school: string, major: string, password: string) {
    this.firstName = fName;
    this.lastName = lName;
    this.email = email;
    this.year = year;
    this.school = school;
    this.major = major;
    this.password = password;

    this.phone = "";
    this.bio = "";
    this.canTutor = [];
  }
  */
}
