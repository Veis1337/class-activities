// TODO: Refactor the class to a factory function.
const getInformation = (state) => ({
  information: () => console.log(`${state.title}  ${state.description}`)
});

const Lesson = (title, description) => {
  const state = {
    title,
    description,
  };
  return { ...getInformation(state) };
};

const csForJS = Lesson('Module 17 - Comp Sci', 'CS for JS');

csForJS.information();

// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();

