class Plan {
  constructor(
    public id: string,
    public name: string,
    public values: any[],
    public signupLabel?: string,
    public onSelect?: (e: any) => void,
    public onSignup?: (e: any) => void
  ) {}
}

export default Plan;
