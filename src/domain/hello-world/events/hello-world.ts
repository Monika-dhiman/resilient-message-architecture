import { Event } from "src/domain/common/event";

export class HelloWorldMessageEvent extends Event {
  type = 'hello-world-event';

  getBody() {
    return this.payload
  }
}
