interface Duck{
    walk: () => void;
    swim: () => void;
    quack: () => void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    isDamaged: (reason: string) => void;
}
// question marks make it optional
let probablyADuck = {
    walk: () => console.log('walking like a duck'),
    swim: () => console.log('swimming like a duck'),
    quack: () => console.log('quacking like a duck'),
}
function FlyOverWater(bird:Duck){}

