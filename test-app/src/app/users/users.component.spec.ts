import { TestBed } from "@angular/core/testing";
import { DataService } from "../services/data.service";
import { UsersComponent } from "./users.component";

describe("The Users Component", () => {

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers : [DataService]
    }).compileComponents()
  })

  let fixture;
  let app;
  let dataService : DataService;

  beforeEach(()=>{
    fixture = TestBed.createComponent(UsersComponent);
    app = fixture.componentInstance;
    dataService = new DataService();
    fixture.detectChanges()
  })

  it("Should display Users works", () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Users works");
  })

  it("Should populate theUserName from DataService", () => {
    expect(app.theUserName).toEqual("Bam");
  })

  it("Should create the Users Component", ()=>{
    expect(app).toBeTruthy();
  })

  it("Should create the user name", () => {
    expect(app.username).toEqual("Foo");
  });

  it("Test 01", () => {
    expect(true).toBeTruthy();
  })

  it("Test 02", () => {
    expect("Hello World").toContain("Hello");
  })





})
