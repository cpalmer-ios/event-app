import { Ticket } from "../interfaces/ticket.interface";

export class UpdateEventDto {
    readonly name?: string;
    readonly date?: Date | string;
    readonly description?: string;
    readonly tickets?: Number
  }