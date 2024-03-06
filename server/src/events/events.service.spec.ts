import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { EventsService } from './events.service';
import { IEvent } from './interfaces/event.interface';

const mockEvent = {
  name: 'Event #1',
  date: "2024-03-04T14:31:01.346Z",
  description: "description",
  tickets: 10
};

const eventsArray = [
  {
    name: 'Event #1',
    date: "2024-03-04T14:31:01.346Z",
    description: "description",
    tickets: 10
  },
  {
    name: 'Event #2',
    date: "2024-03-04T14:31:01.346Z",
    description: "description",
    tickets: 10
  },
];

describe('EventsService', () => {
  let service: EventsService;
  let model: Model<IEvent>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        {
          provide: 'EVENT_MODEL',
          useValue: {
            new: jest.fn().mockResolvedValue(mockEvent),
            constructor: jest.fn().mockResolvedValue(mockEvent),
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(EventsService);
    model = module.get<Model<IEvent>>('EVENT_MODEL');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all events', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(eventsArray),
    } as any);
    const events = await service.findAll();
    expect(events).toEqual(eventsArray);
  });

  it('should insert a new event', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        name: 'Event #1',
        date: "2024-03-04T14:31:01.346Z",
        description: "description",
        tickets: 10
      } as any),
    );
    const newEvent = await service.create({
      name: 'Event #1',
      date: "2024-03-04T14:31:01.346Z",
      description: "description",
      tickets: 10
    });
    expect(newEvent).toEqual(mockEvent);
  });
});