let array = [22,27,16,2,18,6]

function insertionSort(Array){
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--){
            if (array[j] < array[j-1]){
                const temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp
            } else {
                break
            }
        }
    }
return array;

}

