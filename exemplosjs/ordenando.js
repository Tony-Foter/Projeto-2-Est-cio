ordenando.js

// Função para trocar os valores de duas posições de um vetor
const swap = (vetor, pos1, pos2) => {
    let temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (vetor, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        let pos1 = Math.floor(Math.random() * vetor.length);
        let pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

// Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
const bubble_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

// Função para ordenar um vetor de inteiros utilizando o algoritmo Selection Sort
const selection_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        swap(vetor, i, minIndex);
    }
    return vetor;
};

// Função de particionamento de apoio ao Quick Sort
const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

// Função para ordenar um vetor de inteiros com o algoritmo Quick Sort
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pivotIndex = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, fim);
    }
    return vetor;
};
