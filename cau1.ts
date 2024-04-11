type check = number | boolean | string | null | undefined;
function parseInput(input:check){
    return typeof input;
}
console.log(parseInput('a'));
