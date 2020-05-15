class Box{
    constructor(x,y, width, height){
        this.body = rect(x, y, width, height);
        this.height = height;
        this.body.position.y = 630 - this.height/2;
    }
}