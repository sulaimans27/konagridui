import { Subject } from "rxjs";

// creates stream for selectedObject
// main grid will subscribe to this stream
// stream emits the selected object

const subject = new Subject();

export const objectMessageService = {
  sendMessage: (message) => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  getMessage: () => subject.asObservable(),
};
