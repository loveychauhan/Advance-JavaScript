function c() {
    let m = 100;
    function a() {
        let x = 10;
        function b() {
            console.log(x,m)
        }
    }
    a()
}
b()
c()