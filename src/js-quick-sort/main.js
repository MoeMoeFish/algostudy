const quickSort = (arr) => {
    sort(arr, 0, arr.length - 1)
    return arr
}

const swap = (arr, i, j) => {
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const partition = (arr, left, right) => {
    let pivot = arr[right]

    let storeIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            swap(arr, storeIndex, i)
            storeIndex++
        }
    }

    swap(arr, storeIndex, right)

    return storeIndex
}

const sort = (arr, left, right) => {
    if (left >= right) {
        return
    }

    let storeIndex = partition(arr, left, right)
    sort(arr, left, storeIndex - 1)
    sort(arr, storeIndex + 1, right)
}

module.exports = quickSort