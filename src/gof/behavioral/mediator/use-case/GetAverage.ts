import AverageRepository from "../repository/AverageRepository";

type Output = {
    average: number
}

export default class GetAverage {

	constructor (readonly averageRepository: AverageRepository) {}

	async execute (studentId: number): Promise<Output> {
		const average = await this.averageRepository.getByStudentId(studentId);
		return {
			average: average.value
		}
	}
}
