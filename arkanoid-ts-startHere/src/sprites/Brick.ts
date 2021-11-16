
import { Vector } from "~/types";

export class Brick{

    private brickImage:HTMLImageElement = new Image();
    
    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private position: Vector,
        private brickEnery: number,
        image: string
    ){
     this.brickHeight = brickHeight;
     this.brickWidth = brickWidth;
     this.position = position;
     this.brickEnery = brickEnery;
     this.brickImage.src = image;
    }

    //getters
    get width():number{
        return this.brickWidth;
    }

    get height():number{
        return this.brickHeight;
    }

    get pos():Vector{
    return this.position;
}
    get image():HTMLImageElement{
        return this.brickImage;
    }

    get energy():number{
        return this.brickEnery;
    }

    //setter

    set energy (energy:number){
        this.brickEnery = energy;

    }

}