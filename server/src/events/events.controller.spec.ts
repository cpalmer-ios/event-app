import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';

describe('EventsController', () => {
  let controller: EventsController;
  let service: EventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [
        {
          provide: EventsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
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
              {
                name: 'Event #3',
                date: "2024-03-04T14:31:01.346Z",
                description: "description",
                tickets: 10
              },
            ]),
            create: jest
              .fn()
              .mockImplementation((createEventDto: CreateEventDto) =>
                Promise.resolve({ _id: '1', ...createEventDto }),
              ),
          },
        },
      ],
    }).compile();

    controller = module.get(EventsController);
    service = module.get(EventsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should create a new event', async () => {
      const createEventDto: CreateEventDto = {
        name: 'Event #1',
        date: "2024-03-04T14:31:01.346Z",
        description: "description",
        tickets: 10
      };

      expect(controller.create(createEventDto)).resolves.toEqual({
        _id: '1',
        ...createEventDto,
      });
    });
  });

  describe('findAll()', () => {
    it('should get an array of events', () => {
      expect(controller.findAll()).resolves.toEqual([
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
        {
          name: 'Event #3',
          date: "2024-03-04T14:31:01.346Z",
          description: "description",
          tickets: 10
        },
      ]);
    });
  });
});