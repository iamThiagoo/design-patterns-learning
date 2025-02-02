import Grade from "./Grade";
import GradeRepository from "./repository/GradeRepository";
import CalculateAverage from "./use-case/CalculateAverage";

type Input = {
    studentId: number,
    exam: string,
    value: number
}

export default class SaveGrade {

	constructor (readonly gradeRepository: GradeRepository, readonly calculateAverage: CalculateAverage) {
	}

	async execute (input: Input): Promise<void> {
		const grade = new Grade(input.studentId, input.exam, input.value);
		await this.gradeRepository.save(grade);
		await this.calculateAverage.execute(input.studentId);
	}
}
