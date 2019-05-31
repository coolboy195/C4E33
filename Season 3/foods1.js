let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"];
foods.forEach((food, index) => {
console.log(`${index+1}. ${food}`);
});
let delete1 = prompt("Co muon delete k? (Y/N): ");
if (delete1 === "N" || delete1 === "n"){
console.log("Good bye");
}
else if (delete1 === "Y" || delete1 === "y"){
    let a = prompt("ban muon xoa vi tri hay gia tri (input 1 or 2): ");
    if (a==="1"){
        let vt = prompt("Nhap vi tri can xoa: ");
        vt1 = vt-1
        foods.splice(vt-1,1)
        console.log(foods);
    }
    else if (a==="2"){
        let gt = prompt("Nhap gia tri can xoa: ");
        delete2 = foods.indexOf(gt);
        foods.splice(delete2, 1);
    console.log(foods);
    }
}
else {
    console.log("khong hop le");
}