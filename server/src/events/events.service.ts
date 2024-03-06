import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { IEvent } from './interfaces/event.interface';

@Injectable()
export class EventsService {
  constructor(@Inject('EVENT_MODEL') private readonly eventModel: Model<IEvent>) {}

  async create(createEventDto: CreateEventDto): Promise<IEvent> {
    const createdEvent = this.eventModel.create(createEventDto);
    return createdEvent;
  }

  async findAll(): Promise<IEvent[]> {
    return this.eventModel.find().exec()
  }

  async findById(eventId: ObjectId): Promise<IEvent> {
    return this.eventModel.findOne({ _id: eventId }).exec()
  }

  async updateEvent(eventId: ObjectId, updateEventDto: UpdateEventDto): Promise<IEvent> {
    const existingEvent = await this.eventModel.findByIdAndUpdate(eventId, updateEventDto, { new: true });
    if (!existingEvent) {
        throw new NotFoundException(`Event #${eventId} not found`);
    }
    return existingEvent;
  }

  async deleteEvent(eventId: string): Promise<IEvent> {
    const deletedEvent = await this.eventModel.findByIdAndDelete(eventId);
   if (!deletedEvent) {
     throw new NotFoundException(`Event #${eventId} not found`);
   }
   return deletedEvent;
}
}