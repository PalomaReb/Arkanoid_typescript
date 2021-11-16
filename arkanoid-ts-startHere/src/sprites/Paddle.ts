
import { Vector } from "~/types";

export class Paddle{
    private paddleImage: HTMLImageElement = new Image();
    private moveLeft: boolean;
    private moveRight: boolean;

    constructor(
        private speed:number,
        private paddleWidth: number,
        private paddlHeight: number,
        private position: Vector,
        image:string
    ){
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddlHeight = paddlHeight;
        this.position = position;
        this.moveLeft = false;
        this.moveRight=false;
        this.paddleImage.src = image;

    }

}