import { Subject } from "rxjs";

// creates stream for selectedQuery
// main grid will subscribe to this stream
// stream emits the selected queryId

const subject = new Subject();

export const queryMessageService = {
  sendMessage: (message) => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  getMessage: () => subject.asObservable(),
};
