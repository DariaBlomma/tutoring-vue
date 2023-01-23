interface Question {
  id: number,
  questionText: string,
  answer?: string,
  hasMarkUp?: boolean, // auto generated type for a string with markup
}

interface ImageTask {
  name: string,
}

interface Link {
  title: string,
  address: string,
}

export interface Task {
  id: number,
  task: string,
  questionsList?: Question[],
  img?: ImageTask,
  audio?: string,
  links?: Link[],
}
