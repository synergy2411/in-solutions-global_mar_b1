import { DataService } from "./data.service"

describe("Testing Data Service", () => {
  let dataService : DataService;

  beforeEach(() => {
    dataService = new DataService();
  })

  it("Should have username as Bam", () => {
    expect(dataService.user.name).toEqual("Bam");
  })

  it("Should Change the username as Baz", () => {
    dataService.setUser("Baz");
    expect(dataService.user.name).toEqual("Baz");
  })

  it("Should return the username", () => {
    let user = dataService.getUser();
    expect(user.name).toEqual("Bam")
  })
})
