import { Document } from 'mongoose';
import { Ticket } from './ticket.interface';

export interface IEvent extends Document {
  readonly name: string;
  readonly date: Date;
  readonly descrtiption: string;
  readonly tickets: Number;
}