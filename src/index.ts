import "./style.scss";

const h1 = <HTMLHeadingElement>document.createElement("h1");

h1.innerText = "Hello World!";

document.body.appendChild(h1);

export function plus(x: number, y: number): number {
    return x + y;
}
