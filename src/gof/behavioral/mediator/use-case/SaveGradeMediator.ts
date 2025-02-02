import Grade from "../Grade";
import Mediator from "../Mediator";
import GradeRepository from "../repository/GradeRepository";

export default class SaveGrade {

	constructor (readonly gradeRepository: GradeRepository, readonly mediator: Mediator) {}

	async execute (input: Input): Promise<void> {
		const grade = new Grade(input.studentId, input.exam, input.value);
		await this.gradeRepository.save(grade);
		await this.mediator.notify("gradeSaved", { studentId: input.studentId });
	}
}

type Input = {
	studentId: number,
	exam: string,
	value: number
}