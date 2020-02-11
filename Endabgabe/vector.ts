namespace endabgabe {
     export class Vector {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.set(_x, _y);
    
        }
        public static getRandom(_minLength: number, _maxLength: number): Vector {
            let vector: Vector =  new Vector(0, 0);
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_minLength: number, _maxLength: number): void {
        let length: number = _minLength + Math.random() * (_maxLength - _minLength);
        let direction: number = Math.random() * 2 * Math.PI;

        this.set(Math.cos(direction), Math.sin(direction));
        this.scale(length);
        }
    }

}