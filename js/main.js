// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. 
// Є масив з оцінками, це також властивість. 
// І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, 
// в масив записується true, коли викликаємо .absent() - записується false. 
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. 
// Масив – це властивість, present та absent – ​​методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) 
// і показати використання цих методів.

class Student {
  constructor(name, surname, birthYear, grades) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = true;
      this.attendanceIndex++;
    } else {
      console.log("Відвідуваність не може перевищувати 25 записів");
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = false;
      this.attendanceIndex++;
    } else {
      console.log("Відвідуваність не може перевищувати 25 записів");
    }
  }

  getAverageAttendance() {
    const attendedClasses = this.attendance.filter((item) => item === true).length;
    return attendedClasses / this.attendanceIndex;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageGrade <= 90 || averageAttendance <= 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Олексій", "Мережко", 1998, [90, 85, 92, 88, 79]);
const student2 = new Student("Роман", "Денисюк", 2001, [95, 92, 89, 96, 87]);

student1.present();
student1.present();
student1.absent();
console.log(student1.summary()); // "Добре, але можна краще"

student2.present();
student2.present();
student2.present();
student2.present();
console.log(student2.summary()); // "Молодець!"