import Location from '../Location';
import RideRepository from '../repository/RideRepository';
import SegmentRepository from '../repository/SegmentRepository';

type Input = {
  rideId: string;
  lat: number;
  long: number;
  date: Date;
};

export default class UpdateLocation {
  constructor(
    readonly rideRepository: RideRepository,
    readonly segmentRepository: SegmentRepository,
  ) {}

  async execute(input: Input): Promise<void> {
    const ride = await this.rideRepository.getById(input.rideId);
    const newLocation = new Location(input.lat, input.long, input.date);
    const segment = ride.createSegment(ride.lastLocation, newLocation);

    ride.updateLocation(newLocation);

    await this.rideRepository.update(ride);
    await this.segmentRepository.save(segment);
  }
}
