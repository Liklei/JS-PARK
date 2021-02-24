function foo() {
    console.log("执行foo")
  throw new Error('error')
}
function bar() {
  console.log("执行bar")
  foo()
}
bar()