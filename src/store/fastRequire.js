// permet d'avoir le chemin  direct vers l'asset en utilisant require. exploitable dans le store

export  function fastRequire( nomFichier, type) {
 return require('@/assets/' + nomFichier + '.' + type +'');

}