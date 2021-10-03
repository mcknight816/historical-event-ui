export class Config {
  private readonly _api:string;
  constructor(private environment: any) {
    console.log(environment);
    this._api = environment.api;
  }
  get api(){
    return this._api;
  }
}
