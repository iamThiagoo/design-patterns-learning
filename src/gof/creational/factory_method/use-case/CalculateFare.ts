import RideRepository from '../repository/RideRepository';
import SegmentRepository from '../repository/SegmentRepository';

type Output = {
  fare: number;
};

export default class CalculateFare {
  constructor(
    readonly rideRepository: RideRepository,
    readonly segmentRepository: SegmentRepository,
  ) {}

  async execute(rideId: string): Promise<Output> {
    const ride = await this.rideRepository.getById(rideId);
    const segments = await this.segmentRepository.listByRideId(rideId);
    const fare = ride.calculateFare(segments);
    return {
      fare,
    };
  }
}
