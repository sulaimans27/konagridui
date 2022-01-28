import { Subject } from "rxjs";

// creates stream for selectedTemplate
// main grid will subscribe to this stream
// stream emits the selected templateId

const subject = new Subject();

export const templateMessageService = {
  sendMessage: (message) => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  getMessage: () => subject.asObservable(),
};
