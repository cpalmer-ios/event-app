import { Mongoose } from 'mongoose';
import { EventSchema } from './schemas/event.schema';

export const eventsProviders = [
  {
    provide: 'EVENT_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Event', EventSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];