import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public titleOfComponent: string;
  public listOfClasses: string;

  constructor() {
    this.titleOfComponent = "Title of Exercice 1";
  }

  ngOnInit(): void {
    this.initClassList();
  }

  private initClassList() {
    this.listOfClasses = "text-bold";
  }

  public clickMe(): void {
    this.initClassList();
    let color: string = prompt("'rouge' ou 'bleu' ? Ecris donc :)");
    color = color.toLowerCase();

    if (color !== "rouge" && color !== "bleu") {
      alert("Je t'ai dit rouge ou bleu, alalala !!");
      this.clickMe();
    } else {
      this.changeColor(color);
    }
  }

  private changeColor(color: string): void {
    this.listOfClasses = `${this.listOfClasses} ${color}`;

    setTimeout(() => alert("Waaaa trop bien, j'ai des super pouvoirs !!"), 200);
  }
}
