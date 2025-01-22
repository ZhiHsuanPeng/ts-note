// class can also use generics

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [] 

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
}

const textStorage = new DataStorage<string>
textStorage.addItem('123')