// const mid_x = window.innerWidth / 2
// const mid_y = window.innerHeight / 2

class BlockArray {
    // Display flex
    // Should have corresponding class to center
    // Padding also seperates block
    constructor(items,width,height,color="black") {
        this.blockarray = []
        // this.indices = {}
        for (let i = 0; i < items.length; i++) {
            let block
            const ele = items[i]
            if (width === 0) {
                block = new Block(ele,ele,height,i)
            }
            else if (height === 0) {
                block = new Block(ele,width,ele,i)
            }
            else {
                block = new Block(ele,width,height,i)
            }
            this.blockarray.push(block)
            // this.indices[]
        }
    }
    get length() {
        return this.items.length
    }
    set add(ele) {
        this.items.append(ele)
    }
    swap(i1,i2) {
        const temp = items.blockarray[i1]
        this.blockarray[i1] = items.blockarray[i2]
        this.blockarray[i2] = temp
        return this.blockarray
    }
    pop(i) {
        return this.items.pop(i)
    }


}


class Block {
    //Block should have corresponding div
    constructor(val,width,height,i) {
        this.val = val
        this.x = (i * width)
        // this.y = 
        this.width = width
        this.height = height
    }

}


let items = new BlockArray([2,4,3,5,3],12,14)
console.log(items)
