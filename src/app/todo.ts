export class Todo{
  constructor(
    public id: number,
    public name: string,
    public active: boolean = false,
	  public complete: boolean = false
  ){}
}
