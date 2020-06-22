class BangunDatar {
    constructor(panjang, lebar, alas, tinggi, sisi, r) {
        (this.panjang = panjang),
            (this.lebar = lebar),
            (this.alas = alas),
            (this.tinggi = tinggi),
            (this.sisi = sisi),
            (this.r = r);
    }

    persegi() {
        let luas = this.sisi * this.sisi;
        let kel = this.sisi * 4;
        console.log(` luas dan keliling persegi: ${luas} dan ${kel}`);
    }
    persegiPjg() {
        let luas = this.panjang * this.lebar;
        let kel = 2 * (this.panjang + this.lebar);
        console.log(`luas dan keliling persegi panjang: ${luas} dan ${kel}`);
    }
    segitigaSiku() {
        let luas = (this.alas * this.tinggi) / 2;
        let mi = sqrt(this.alas ** 2 + this.tinggi ** 2);
        let kel = mi + this.alas + this.tinggi;
        console.log(`luas dan keliling segitga siku: ${luas} dan ${kel}`);
    }
    lingkaran() {
        let luas = 3.14 * this.r ** 2;
        let kel = 2 * 3.14 * this.r;
        console.log(`luas dan keliling lingkaran: ${luas} dan ${kel}`);
    }
}

class BangunRuang extends BangunDatar {
    constructor(panjang, lebar, tinggi, sisi) {
        super(panjang, lebar, tinggi, sisi);
        (this.panjang = panjang),
            (this.lebar = lebar),
            (this.tinggi = tinggi),
            (this.sisi = sisi);
    }

    kubus() {
        let luas = 6 * this.sisi * this.sisi;
        let kel = 12 * this.sisi;
        let volume = this.sisi ** 3;
        console.log(
            `luas dan keliling serta volume kubus : ${luas} dan ${kel} dan ${volume}`
        );
    }
    balok() {
        let luas = 2(
            this.panjang * this.lebar +
                this.panjang * this.tinggi +
                this.lebar * this * this.tinggi
        );
        let kel = 4(this.panjang + this.lebar + this.tinggi);
        let volume = this.panjang * this.lebar * this.tinggi;
        console.log(
            `luas dan keliling serta volume balok: ${luas} dan ${kel} , ${volume}`
        );
    }
}

let soal = new BangunDatar(10, 12, 5, 7, 8, 7);
let soal2 = new BangunRuang(10, 12, 7, 8);
console.log(soal2.kubus());
console.log(soal.persegi());
