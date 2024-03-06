import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  HttpStatus,
  Res,
  Delete,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
import { IEvent } from './interfaces/event.interface';
import { UpdateEventDto } from './dto/update-event.dto';
import { ObjectId } from 'mongoose';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  async findAll(): Promise<IEvent[]> {
    return this.eventsService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') eventId: ObjectId,): Promise<IEvent> {
    return this.eventsService.findById(eventId);
  }

  @Put('/:id')
  async updateEvent(
    @Res() response,
    @Param('id') eventId: ObjectId,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    try {
      const existingEvent = await this.eventsService.updateEvent(
        eventId,
        updateEventDto,
      );
      return response.status(200).json({
        message: 'Event has been successfully updated',
        existingEvent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteEvent(@Res() response, @Param('id') eventId: string) {
    try {
      const deletedEvent = await this.eventsService.deleteEvent(eventId);
      return response.status(HttpStatus.OK).json({
        message: 'Event deleted successfully',
        deletedEvent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
