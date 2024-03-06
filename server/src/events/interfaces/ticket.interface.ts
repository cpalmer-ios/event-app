import { Document } from 'mongoose';

export interface Ticket extends Document {
  readonly name: string;
  readonly type: string;
  readonly price: number;
  readonly availability: string;
}