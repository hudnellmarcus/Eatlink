export interface Recipe {
    name: string;
    servings: number;
    ingredients?: Ingredients[];
    instructions?: string[];
  }

  export interface Ingredients {
    ingredient: string;
    quantity: number;
    measurement: string; 
    preparation?: string;
  }