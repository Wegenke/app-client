import { createContext } from "react";

export const HumanContext = createContext({humans:{}})

export const PlantContext = createContext({plants:{}, setPlants: () => {}})

export const AnimalContext = createContext({animals:{}, setAnimals: () => {}})

export const ChoreContext = createContext({chores:{}, setChores: () => {}})