interface Grupo {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}
const grupoA : Grupo = {

    nombre: "The Battles",
    año: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
}
const grupoB : Grupo = {

    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock",
}
const grupoC : Grupo = {

    nombre: "AC DC ",
    año: 1973,
    activo: true,
    genero: "🤘 Hard Rock",
}
const grupoD : Grupo = {

    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: "🎼 Clásica",
}
const grupoE : Grupo = {

    nombre: "The Rolling Stones ",
    año: 1962,
    activo: true,
    genero: "🎸 Rock",
}
console.log(grupoA , grupoB, grupoC, grupoD, grupoE)
