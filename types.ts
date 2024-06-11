export interface Recipe {
    name: string;
    servings: number;
    ingredients?: Ingredients[];
    instructions?: string[];
    image: string; 
  }



  export interface Ingredients {
    ingredient: string;
    quantity: number;
    measurement: string; 
    preparation?: string;
  }