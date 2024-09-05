import UIKit

var greeting:String = "Hello, playground"

print(greeting)

let x:Int = 5
print(x)

var y:Double = 0.9
print(y)

var z:Bool = false
print(z)

func DoAdd(_ m:Int, _ n:Int) -> Int{
    var sum = 2*(m+n)
    return sum
}

let ans = DoAdd(10, 10)
print(ans)
