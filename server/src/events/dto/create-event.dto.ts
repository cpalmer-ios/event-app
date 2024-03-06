import { Ticket } from "../interfaces/ticket.interface";

export class CreateEventDto {
    readonly name: string;
    readonly date: Date | string;
    readonly description: string;
    readonly tickets: Number
  }