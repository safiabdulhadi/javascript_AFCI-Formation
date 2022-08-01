export enum Types { starter="entrée", dish="plat", dessert="dessert"}
export interface Recette{
    id: number;
    name: string;
    type: Types;
    duration: number;
    description: string;
    ingredients: string[];
    steps: string[];
    images: string[];
    createdAt: Date;
}